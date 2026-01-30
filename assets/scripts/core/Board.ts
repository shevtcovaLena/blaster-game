import { Tile } from "./Tile";
import { TileColor, ALL_COLORS } from "./TileColor";

/**
 * Модель игрового поля - двумерная сетка тайлов
 * Отвечает за генерацию, поиск групп, удаление и гравитацию
 */
export class Board {
  private grid: (Tile | null)[][];
  private tileIdCounter: number = 0;

  constructor(
    public readonly cols: number,
    public readonly rows: number,
  ) {
    this.grid = [];
  }

  /**
   * Генерирует случайное поле, заполняя все ячейки тайлами
   */
  generate(): void {
    for (let x = 0; x < this.cols; x++) {
      this.grid[x] = [];
      for (let y = 0; y < this.rows; y++) {
        this.grid[x][y] = this.createRandomTile(x, y);
      }
    }
  }

  /**
   * Создаёт тайл случайного цвета
   */
  private createRandomTile(x: number, y: number): Tile {
    const randomColor =
      ALL_COLORS[Math.floor(Math.random() * ALL_COLORS.length)];
    return new Tile(randomColor, x, y, this.tileIdCounter++);
  }

  /**
   * Получить тайл по координатам
   */
  getTile(x: number, y: number): Tile | null {
    if (x < 0 || x >= this.cols || y < 0 || y >= this.rows) {
      return null;
    }
    return this.grid[x][y];
  }

  /**
   * Установить тайл в ячейку
   */
  setTile(x: number, y: number, tile: Tile | null): void {
    if (x >= 0 && x < this.cols && y >= 0 && y < this.rows) {
      this.grid[x][y] = tile;
      if (tile) {
        tile.gridX = x;
        tile.gridY = y;
      }
    }
  }

  /**
   * Находит группу связанных тайлов того же цвета (BFS)
   * @param startX координата X начального тайла
   * @param startY координата Y начального тайла
   * @returns массив всех связанных тайлов
   */
  findConnectedGroup(startX: number, startY: number): Tile[] {
    const startTile = this.getTile(startX, startY);

    if (!startTile) {
      return [];
    }

    const targetColor = startTile.color;
    const result: Tile[] = [];
    const visited: Set<string> = new Set();
    const queue: Tile[] = [startTile];

    visited.add(`${startX},${startY}`);

    while (queue.length > 0) {
      const current = queue.shift()!;
      result.push(current);

      const neighbors = this.getNeighbors(current.gridX, current.gridY);

      for (const neighbor of neighbors) {
        const key = `${neighbor.gridX},${neighbor.gridY}`;

        if (neighbor.color === targetColor && !visited.has(key)) {
          visited.add(key);
          queue.push(neighbor);
        }
      }
    }

    return result;
  }

  /**
   * Получить соседей тайла (вверх, вниз, влево, вправо)
   */
  private getNeighbors(x: number, y: number): Tile[] {
    const neighbors: Tile[] = [];
    const directions = [
      [0, 1],
      [0, -1],
      [-1, 0],
      [1, 0],
    ];

    for (const [dx, dy] of directions) {
      const neighbor = this.getTile(x + dx, y + dy);
      if (neighbor) {
        neighbors.push(neighbor);
      }
    }

    return neighbors;
  }

  /**
   * Проверка наличия доступных ходов
   * @returns true если есть хотя бы одна группа из 2+ тайлов
   */
  public hasAvailableMoves(): boolean {
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        const tile = this.getTile(x, y);

        if (!tile) {
          continue;
        }

        const group = this.findConnectedGroup(x, y);

        if (group.length >= 2) {
          return true;
        }
      }
    }

    return false;
  }

  /**
   * Создать супер-тайл на указанной позиции
   */
  createSuperTile(
    x: number,
    y: number,
    superType: import("./Tile").SuperTileType,
    color: TileColor,
  ): Tile {
    const superTile = new Tile(color, x, y, this.tileIdCounter++, superType);
    this.setTile(x, y, superTile);
    return superTile;
  }

  /**
   * Получить все тайлы в строке
   */
  getTilesInRow(row: number): Tile[] {
    const tiles: Tile[] = [];
    for (let x = 0; x < this.cols; x++) {
      const tile = this.getTile(x, row);
      if (tile) {
        tiles.push(tile);
      }
    }
    return tiles;
  }

  /**
   * Получить все тайлы в столбце
   */
  getTilesInColumn(col: number): Tile[] {
    const tiles: Tile[] = [];
    for (let y = 0; y < this.rows; y++) {
      const tile = this.getTile(col, y);
      if (tile) {
        tiles.push(tile);
      }
    }
    return tiles;
  }

  /**
   * Получить тайлы в радиусе от точки
   */
  getTilesInRadius(centerX: number, centerY: number, radius: number): Tile[] {
    const tiles: Tile[] = [];

    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        const distance = Math.sqrt(
          Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2),
        );

        if (distance <= radius) {
          const tile = this.getTile(x, y);
          if (tile) {
            tiles.push(tile);
          }
        }
      }
    }

    return tiles;
  }

  /**
   * Получить все тайлы на доске
   */
  getAllTiles(): Tile[] {
    const tiles: Tile[] = [];
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        const tile = this.getTile(x, y);
        if (tile) {
          tiles.push(tile);
        }
      }
    }
    return tiles;
  }

  /**
   * Перемешать доску (алгоритм Fisher-Yates)
   */
  shuffle(): void {
    const allTiles: Tile[] = [];
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        const tile = this.getTile(x, y);
        if (tile) {
          allTiles.push(tile);
        }
      }
    }

    for (let i = allTiles.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [allTiles[i], allTiles[j]] = [allTiles[j], allTiles[i]];
    }

    let index = 0;
    for (let x = 0; x < this.cols; x++) {
      for (let y = 0; y < this.rows; y++) {
        this.setTile(x, y, allTiles[index++]);
      }
    }
  }

  /**
   * Удаляет тайлы из сетки
   */
  removeTiles(tiles: Tile[]): void {
    for (const tile of tiles) {
      this.setTile(tile.gridX, tile.gridY, null);
    }
  }

  /**
   * Применяет гравитацию: тайлы падают вниз, пустоты заполняются новыми сверху
   * @returns количество сдвинутых/созданных тайлов
   */
  applyGravity(): number {
    let changesCount = 0;

    for (let x = 0; x < this.cols; x++) {
      const column: Tile[] = [];

      for (let y = 0; y < this.rows; y++) {
        const tile = this.grid[x][y];
        if (tile) {
          column.push(tile);
        }
      }

      for (let y = 0; y < this.rows; y++) {
        this.grid[x][y] = null;
      }

      let columnIndex = 0;
      for (let y = 0; y < this.rows; y++) {
        if (columnIndex < column.length) {
          this.setTile(x, y, column[columnIndex]);
          columnIndex++;
          changesCount++;
        } else {
          this.setTile(x, y, this.createRandomTile(x, y));
          changesCount++;
        }
      }
    }

    return changesCount;
  }
}
