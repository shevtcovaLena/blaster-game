import { GameRules } from "./GameRules";
import { Board } from "./Board";

/**
 * Состояния игры
 */
export enum GameStatus {
  PLAYING = "playing",
  WIN = "win",
  LOSE = "lose",
}

/**
 * Состояние игры - очки, ходы, статус
 */
export class GameState {
  private _score: number = 0;
  private _movesLeft: number = GameRules.MAX_MOVES;
  private _status: GameStatus = GameStatus.PLAYING;
  private _shufflesLeft: number = GameRules.MAX_SHUFFLES;

  get score(): number {
    return this._score;
  }

  get movesLeft(): number {
    return this._movesLeft;
  }

  get status(): GameStatus {
    return this._status;
  }

  get shufflesLeft(): number {
    return this._shufflesLeft;
  }

  isPlaying(): boolean {
    return this._status === GameStatus.PLAYING;
  }

  addScore(groupSize: number): void {
    const points = GameRules.calculateScore(groupSize);
    this._score += points;
  }

  useMove(): void {
    if (this._movesLeft > 0) {
      this._movesLeft--;
    }
  }

  useShuffle(): void {
    if (this._shufflesLeft > 0) {
      this._shufflesLeft--;
    }
  }

  /**
   * Проверить условия окончания игры
   */
  checkEndConditions(board: Board): void {
    if (this._status !== GameStatus.PLAYING) {
      return;
    }

    if (this._score >= GameRules.TARGET_SCORE) {
      this._status = GameStatus.WIN;
      return;
    }

    if (this._movesLeft <= 0) {
      this._status = GameStatus.LOSE;
      return;
    }

    if (!board.hasAvailableMoves() && this._shufflesLeft <= 0) {
      this._status = GameStatus.LOSE;
    }
  }

  reset(): void {
    this._score = 0;
    this._movesLeft = GameRules.MAX_MOVES;
    this._status = GameStatus.PLAYING;
    this._shufflesLeft = GameRules.MAX_SHUFFLES;
  }
}
