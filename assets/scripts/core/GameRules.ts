import { SuperTileType } from "./Tile";

/**
 * Правила игры - константы и формулы
 */
export class GameRules {
  static readonly GRID_COLS = 9;
  static readonly GRID_ROWS = 9;

  static readonly TILE_SIZE = 100;
  static readonly TILE_SPACING = 0;
  static readonly FIELD_PADDING_SIDE = 41;
  static readonly FIELD_PADDING_TOP = 70;
  static readonly FIELD_PADDING_BOTTOM = 58;
  static readonly TILE_VISUAL_OFFSET_Y = 12;
  static readonly MAX_SHUFFLES = 3;

  static readonly TARGET_SCORE = 1000;
  static readonly MAX_MOVES = 20;

  static readonly MIN_GROUP_SIZE = 2;

  static readonly SUPER_TILE_MIN_GROUP = 5;
  static readonly ROW_BLAST_THRESHOLD = 5;
  static readonly COLUMN_BLAST_THRESHOLD = 6;
  static readonly BOMB_THRESHOLD = 7;
  static readonly MEGA_BLAST_THRESHOLD = 9;

  /**
   * Формула начисления очков за группу
   */
  static calculateScore(groupSize: number): number {
    if (groupSize < this.MIN_GROUP_SIZE) {
      return 0;
    }
    return groupSize * groupSize * 2;
  }

  /**
   * Проверка возможности взрыва группы
   */
  static isValidGroup(groupSize: number): boolean {
    return groupSize >= this.MIN_GROUP_SIZE;
  }

  /**
   * Определить тип супер-тайла по размеру группы
   */
  static getSuperTileType(groupSize: number): SuperTileType {
    if (groupSize >= this.MEGA_BLAST_THRESHOLD) {
      return SuperTileType.MEGA_BLAST;
    }
    if (groupSize >= this.BOMB_THRESHOLD) {
      return SuperTileType.BOMB;
    }
    if (groupSize >= this.COLUMN_BLAST_THRESHOLD) {
      return SuperTileType.COLUMN_BLAST;
    }
    if (groupSize >= this.ROW_BLAST_THRESHOLD) {
      return SuperTileType.ROW_BLAST;
    }

    return SuperTileType.NONE;
  }

  /**
   * Проверка необходимости создания супер-тайла
   */
  static shouldCreateSuperTile(groupSize: number): boolean {
    return groupSize >= this.SUPER_TILE_MIN_GROUP;
  }
}
