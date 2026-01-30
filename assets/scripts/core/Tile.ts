import { TileColor } from "./TileColor";

/**
 * Типы супер-тайлов
 */
export enum SuperTileType {
  NONE = "none",
  ROW_BLAST = "row",
  COLUMN_BLAST = "column",
  BOMB = "bomb",
  MEGA_BLAST = "mega",
}

/**
 * Модель тайла - чистые данные без визуализации
 */
export class Tile {
  constructor(
    public color: TileColor,
    public gridX: number,
    public gridY: number,
    public id: number,
    public superType: SuperTileType = SuperTileType.NONE,
  ) {}

  isSuper(): boolean {
    return this.superType !== SuperTileType.NONE;
  }

  isAdjacentTo(other: Tile): boolean {
    const dx = Math.abs(this.gridX - other.gridX);
    const dy = Math.abs(this.gridY - other.gridY);
    return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
  }

  toString(): string {
    const superLabel = this.isSuper() ? ` [SUPER:${this.superType}]` : "";
    return `Tile[${this.id}](${this.color} at ${this.gridX},${this.gridY})${superLabel}`;
  }
}
