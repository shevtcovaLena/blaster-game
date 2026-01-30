const { ccclass, property } = cc._decorator;
import { Board } from "../core/Board";
import { GameState, GameStatus } from "../core/GameState";
import { GameRules } from "../core/GameRules";
import BoardView from "../view/BoardView";
import GameEndPanel, { GameEndType } from "../ui/GameEndPanel";
import { SuperTileType, Tile } from "../core/Tile";

/**
 * Главный контроллер игры
 * Связывает модель (Board, GameState) с отображением (BoardView)
 */
@ccclass
export default class GameController extends cc.Component {
  @property(BoardView)
  boardView: BoardView = null;

  @property(cc.Label)
  scoreLabel: cc.Label = null;

  @property(cc.Label)
  movesLabel: cc.Label = null;

  @property(cc.Node)
  gameEndPanelNode: cc.Node = null;

  private gameEndPanel: GameEndPanel = null;
  private board: Board;
  private gameState: GameState;

  onLoad() {
    this.board = new Board(GameRules.GRID_COLS, GameRules.GRID_ROWS);
    this.gameState = new GameState();

    this.board.generate();
    this.boardView.init(this.board, this.onTileClicked.bind(this));
    this.updateUI();
  }

  start() {
    if (this.gameEndPanelNode) {
      this.gameEndPanel = this.gameEndPanelNode.getComponent(GameEndPanel);
    }
  }

  /**
   * Обработчик клика по тайлу
   */
  private onTileClicked(x: number, y: number): void {
    if (!this.gameState.isPlaying()) {
      return;
    }

    const clickedTile = this.board.getTile(x, y);
    if (!clickedTile) return;

    if (clickedTile.isSuper()) {
      this.activateSuperTile(clickedTile);
      return;
    }

    const group = this.board.findConnectedGroup(x, y);

    if (!GameRules.isValidGroup(group.length)) {
      return;
    }

    const shouldCreateSuper = GameRules.shouldCreateSuperTile(group.length);
    const superType = GameRules.getSuperTileType(group.length);
    const clickColor = clickedTile.color;
    const clickX = x;
    const clickY = y;

    this.boardView.animateRemoval(group, () => {
      this.board.removeTiles(group);

      if (shouldCreateSuper && superType !== SuperTileType.NONE) {
        const superTile = this.board.createSuperTile(
          clickX,
          clickY,
          superType,
          clickColor,
        );
        this.boardView.createSuperTileWithAppearAnimation(superTile);
      }

      this.scheduleOnce(() => {
        const oldPositions = this.saveOldPositions();
        this.board.applyGravity();

        this.boardView.animateGravityWithPositions(oldPositions, () => {
          this.gameState.addScore(group.length);
          this.gameState.useMove();
          this.gameState.checkEndConditions(this.board);
          this.updateUI();
          this.checkShuffleOrGameEnd();
        });
      }, 0.3);
    });
  }

  /**
   * Активировать эффект супер-тайла с цепной реакцией
   */
  private activateSuperTile(superTile: Tile): void {
    const tilesToRemove = this.getTilesForSuperEffect(superTile);

    if (tilesToRemove.length === 0) return;

    const triggeredSuperTiles = tilesToRemove.filter(
      (tile) => tile.isSuper() && tile.id !== superTile.id,
    );

    this.boardView.animateRemoval(tilesToRemove, () => {
      this.board.removeTiles(tilesToRemove);

      if (triggeredSuperTiles.length > 0) {
        this.scheduleOnce(() => {
          const secondWaveTiles = this.collectSecondWaveTiles(
            triggeredSuperTiles,
          );

          if (secondWaveTiles.length > 0) {
            this.boardView.animateRemoval(secondWaveTiles, () => {
              this.board.removeTiles(secondWaveTiles);
              this.applyGravityAndFinish(
                tilesToRemove.length + secondWaveTiles.length,
              );
            });
          } else {
            this.applyGravityAndFinish(tilesToRemove.length);
          }
        }, 0.1);
      } else {
        this.applyGravityAndFinish(tilesToRemove.length);
      }
    });
  }

  /**
   * Собрать тайлы для второй волны цепной реакции
   */
  private collectSecondWaveTiles(triggeredSuperTiles: Tile[]): Tile[] {
    const secondWaveTiles = new Set<Tile>();

    triggeredSuperTiles.forEach((secondarySuperTile: Tile) => {
      const secondaryTiles = this.getTilesForSuperEffect(secondarySuperTile);
      secondaryTiles.forEach((tile) => {
        const tileOnBoard = this.board.getTile(tile.gridX, tile.gridY);
        if (tileOnBoard && tileOnBoard.id === tile.id) {
          secondWaveTiles.add(tileOnBoard);
        }
      });
    });

    return Array.from(secondWaveTiles);
  }

  /**
   * Получить тайлы для удаления в зависимости от типа супер-тайла
   */
  private getTilesForSuperEffect(superTile: Tile): Tile[] {
    const radius = Math.floor(GameRules.GRID_COLS / 4);

    switch (superTile.superType) {
      case SuperTileType.ROW_BLAST:
        return this.board.getTilesInRow(superTile.gridY);

      case SuperTileType.COLUMN_BLAST:
        return this.board.getTilesInColumn(superTile.gridX);

      case SuperTileType.BOMB:
        return this.board.getTilesInRadius(
          superTile.gridX,
          superTile.gridY,
          radius,
        );

      case SuperTileType.MEGA_BLAST:
        return this.board.getAllTiles();

      default:
        return [];
    }
  }

  /**
   * Применить гравитацию и завершить ход
   */
  private applyGravityAndFinish(totalScore: number): void {
    const oldPositions = this.saveOldPositions();
    this.board.applyGravity();

    this.boardView.animateGravityWithPositions(oldPositions, () => {
      this.gameState.addScore(totalScore);
      this.gameState.useMove();
      this.gameState.checkEndConditions(this.board);
      this.updateUI();
      this.checkShuffleOrGameEnd();
    });
  }

  /**
   * Сохранить текущие позиции всех тайлов
   */
  private saveOldPositions(): Map<number, { x: number; y: number }> {
    const positions = new Map();

    for (let x = 0; x < this.board.cols; x++) {
      for (let y = 0; y < this.board.rows; y++) {
        const tile = this.board.getTile(x, y);
        if (tile) {
          positions.set(tile.id, { x: tile.gridX, y: tile.gridY });
        }
      }
    }

    return positions;
  }

  /**
   * Обновить UI (счётчики очков и ходов)
   */
  private updateUI(): void {
    if (this.scoreLabel) {
      this.scoreLabel.string = `${this.gameState.score}/${GameRules.TARGET_SCORE}`;
    }
    if (this.movesLabel) {
      this.movesLabel.string = `${this.gameState.movesLeft}`;
    }
  }

  /**
   * Проверка необходимости перемешивания или окончания игры
   */
  private checkShuffleOrGameEnd(): void {
    const status = this.gameState.status;

    if (status === GameStatus.WIN) {
      this.showGameEndScreen(GameEndType.WIN);
      return;
    }

    if (status === GameStatus.LOSE) {
      this.showGameEndScreen(GameEndType.LOSE);
      return;
    }

    if (!this.board.hasAvailableMoves()) {
      if (this.gameState.shufflesLeft > 0) {
        this.performShuffle();
      } else {
        this.showGameEndScreen(GameEndType.LOSE);
      }
    }
  }

  /**
   * Выполнить перемешивание поля
   */
  private performShuffle(): void {
    this.gameState.useShuffle();

    const oldPositions = this.saveOldPositions();
    this.board.shuffle();

    this.boardView.animateGravityWithPositions(oldPositions, () => {
      if (!this.board.hasAvailableMoves()) {
        this.checkShuffleOrGameEnd();
      }
    });
  }

  /**
   * Показать экран окончания игры
   */
  private showGameEndScreen(type: GameEndType): void {
    this.boardView.animateAllTilesRemoval(() => {
      this.gameEndPanel.show(type, this.restartGame.bind(this));
    });
  }

  /**
   * Перезапустить игру
   */
  private restartGame(): void {
    this.gameState.reset();
    this.board.generate();
    this.boardView.renderBoard();
    this.updateUI();
  }
}
