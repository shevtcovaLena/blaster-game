const { ccclass, property } = cc._decorator;
import { Board } from "../core/Board";
import { Tile } from "../core/Tile";
import { GameRules } from "../core/GameRules";
import TileView from "./TileView";

/**
 * Визуализация игрового поля
 */
@ccclass
export default class BoardView extends cc.Component {
  @property(cc.Prefab)
  tilePrefab: cc.Prefab = null;

  @property(cc.Node)
  fieldBorder: cc.Node = null;

  @property(cc.Float)
  cellSize: number = 100;

  @property(cc.Float)
  spacing: number = 0;

  private board: Board = null;
  private tileViews: Map<number, TileView> = new Map();
  private onTileClickCallback: (x: number, y: number) => void;
  private tilesContainer: cc.Node = null;
  private maskNode: cc.Node = null;

  onLoad(): void {
    this.createMaskContainer();
  }

  private createMaskContainer(): void {
    if (this.maskNode) {
      return;
    }

    this.maskNode = new cc.Node("MaskContainer");
    this.maskNode.parent = this.node;
    this.maskNode.anchorX = 0.5;
    this.maskNode.anchorY = 1;
    this.maskNode.setPosition(0, -62);

    const mask = this.maskNode.addComponent(cc.Mask);
    mask.type = cc.Mask.Type.RECT;

    this.tilesContainer = new cc.Node("TilesContainer");
    this.tilesContainer.parent = this.maskNode;
    this.tilesContainer.anchorX = 0.5;
    this.tilesContainer.anchorY = 1;
    this.tilesContainer.setPosition(0, 0);
  }

  init(board: Board, onTileClick: (x: number, y: number) => void): void {
    this.board = board;
    this.onTileClickCallback = onTileClick;

    this.createMaskContainer();

    const totalSize = this.cellSize + this.spacing;
    const fieldWidth = this.board.cols * totalSize;
    const fieldHeight = this.board.rows * totalSize;

    this.node.width = fieldWidth;
    this.node.height = fieldHeight;

    const tileOverhang = 6;
    if (this.maskNode) {
      this.maskNode.width = fieldWidth;
      this.maskNode.height = fieldHeight + tileOverhang;
    }

    this.updateFieldBorderSize();
    this.renderBoard();
  }

  private updateFieldBorderSize(): void {
    if (!this.fieldBorder) return;

    const fieldSize = this.calculateFieldSize();
    const scale = this.fieldBorder.scale;
    this.fieldBorder.width = fieldSize.width / scale;
    this.fieldBorder.height = fieldSize.height / scale;
  }

  private calculateFieldSize(): cc.Size {
    const totalSize = this.cellSize + this.spacing;

    const width =
      this.board.cols * totalSize -
      this.spacing +
      GameRules.FIELD_PADDING_SIDE * 2;

    const height =
      this.board.rows * totalSize -
      this.spacing +
      GameRules.FIELD_PADDING_TOP +
      GameRules.FIELD_PADDING_BOTTOM;

    return cc.size(width, height);
  }

  renderBoard(): void {
    if (this.tilesContainer) {
      this.tilesContainer.removeAllChildren();
    }

    this.tileViews.clear();

    for (let x = 0; x < this.board.cols; x++) {
      for (let y = 0; y < this.board.rows; y++) {
        const tile = this.board.getTile(x, y);
        if (tile) {
          this.createTileView(tile);
        }
      }
    }
  }

  private createTileView(tile: Tile): TileView {
    const tileNode = cc.instantiate(this.tilePrefab);
    const tileView = tileNode.getComponent(TileView);

    tileView.setTile(tile);
    const pos = this.gridToWorldPosition(tile.gridX, tile.gridY);
    tileView.setPosition(pos.x, pos.y);

    tileNode.on(
      cc.Node.EventType.TOUCH_END,
      () => {
        this.onTileClicked(tile.gridX, tile.gridY);
      },
      this,
    );

    if (this.tilesContainer) {
      this.tilesContainer.addChild(tileNode);
    }

    this.tileViews.set(tile.id, tileView);
    return tileView;
  }

  private onTileClicked(x: number, y: number): void {
    if (this.onTileClickCallback) {
      this.onTileClickCallback(x, y);
    }
  }

  private gridToWorldPosition(gridX: number, gridY: number): cc.Vec2 {
    const totalSize = this.cellSize + this.spacing;
    const offsetX = -(this.board.cols * totalSize) / 2 + this.cellSize / 2;

    const gridHeight = this.board.rows * totalSize;
    const offsetY = -gridHeight / 2 + this.cellSize / 2;
    const extraOffsetY = -gridHeight / 2;

    return cc.v2(
      gridX * totalSize + offsetX,
      gridY * totalSize + offsetY + extraOffsetY,
    );
  }

  animateRemoval(tiles: Tile[], callback: Function): void {
    let completed = 0;
    const total = tiles.length;

    for (const tile of tiles) {
      const tileView = this.tileViews.get(tile.id);

      if (tileView) {
        this.tileViews.delete(tile.id);

        tileView.playDestroyAnimation(() => {
          completed++;
          if (completed === total && callback) {
            callback();
          }
        });
      }
    }

    if (total === 0 && callback) {
      callback();
    }
  }

  animateGravityWithPositions(
    oldPositions: Map<number, { x: number; y: number }>,
    callback: Function,
  ): void {
    const animations: Promise<void>[] = [];

    for (let x = 0; x < this.board.cols; x++) {
      for (let y = 0; y < this.board.rows; y++) {
        const tile = this.board.getTile(x, y);
        if (tile && tile.isSuper() && !this.tileViews.has(tile.id)) {
          this.createTileView(tile);
        }
      }
    }

    for (let x = 0; x < this.board.cols; x++) {
      for (let y = 0; y < this.board.rows; y++) {
        const tile = this.board.getTile(x, y);
        if (!tile) continue;

        const oldPos = oldPositions.get(tile.id);
        const tileView = this.tileViews.get(tile.id);

        if (!oldPos && !tileView) {
          animations.push(this.createNewTileWithAnimation(tile, x, y));
        } else if (tileView && oldPos && (oldPos.x !== x || oldPos.y !== y)) {
          animations.push(this.animateExistingTile(tileView, x, y));
        }
      }
    }

    if (animations.length > 0) {
      Promise.all(animations).then(() => {
        if (callback) callback();
      });
    } else {
      if (callback) callback();
    }
  }

  private createNewTileWithAnimation(
    tile: Tile,
    gridX: number,
    gridY: number,
  ): Promise<void> {
    return new Promise((resolve) => {
      const tileView = this.createTileView(tile);

      const startY = this.board.rows + (this.board.rows - gridY) * 0.3;
      const startPos = this.gridToWorldPosition(gridX, startY);
      const targetPos = this.gridToWorldPosition(gridX, gridY);

      tileView.node.setPosition(cc.v3(startPos.x, startPos.y, 0));
      tileView.node.opacity = 255;

      const delay = gridX * 0.05;
      const duration = 0.4 + gridY * 0.05;

      cc.tween(tileView.node)
        .delay(delay)
        .to(
          duration,
          {
            position: cc.v3(targetPos.x, targetPos.y, 0),
          },
          { easing: "bounceOut" },
        )
        .call(() => resolve())
        .start();
    });
  }

  createSuperTileWithAppearAnimation(superTile: Tile): void {
    const tileView = this.createTileView(superTile);

    tileView.node.scale = 0;
    tileView.node.opacity = 255;

    cc.tween(tileView.node)
      .to(0.3, { scale: 1.2 }, { easing: "backOut" })
      .to(0.1, { scale: 1.0 }, { easing: "sineInOut" })
      .start();
  }

  private animateExistingTile(
    tileView: TileView,
    gridX: number,
    gridY: number,
  ): Promise<void> {
    return new Promise((resolve) => {
      const targetPos = this.gridToWorldPosition(gridX, gridY);

      cc.tween(tileView.node)
        .to(
          0.1,
          {
            position: cc.v3(targetPos.x, targetPos.y, 0),
          },
          { easing: "quadIn" },
        )
        .call(() => resolve())
        .start();
    });
  }

  animateAllTilesRemoval(callback: Function): void {
    const allTileViews = Array.from(this.tileViews.values());

    if (allTileViews.length === 0) {
      if (callback) callback();
      return;
    }

    let completed = 0;
    const total = allTileViews.length;

    allTileViews.forEach((tileView, index) => {
      const delay = index * 0.01;

      this.scheduleOnce(() => {
        tileView.playDestroyAnimation(() => {
          completed++;
          if (completed === total && callback) {
            callback();
          }
        });
      }, delay);
    });

    this.tileViews.clear();
  }

  private getTileView(tileId: number): TileView | null {
    return this.tileViews.get(tileId) || null;
  }
}
