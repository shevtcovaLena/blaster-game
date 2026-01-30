"use strict";
cc._RF.push(module, 'ac15fVzPIhOSJyZG5TY+hOg', 'Board');
// scripts/core/Board.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Board = void 0;
var Tile_1 = require("./Tile");
var TileColor_1 = require("./TileColor");
/**
 * Модель игрового поля - двумерная сетка тайлов
 * Отвечает за генерацию, поиск групп, удаление и гравитацию
 */
var Board = /** @class */ (function () {
    function Board(cols, rows) {
        this.cols = cols;
        this.rows = rows;
        this.tileIdCounter = 0;
        this.grid = [];
    }
    /**
     * Генерирует случайное поле, заполняя все ячейки тайлами
     */
    Board.prototype.generate = function () {
        for (var x = 0; x < this.cols; x++) {
            this.grid[x] = [];
            for (var y = 0; y < this.rows; y++) {
                this.grid[x][y] = this.createRandomTile(x, y);
            }
        }
    };
    /**
     * Создаёт тайл случайного цвета
     */
    Board.prototype.createRandomTile = function (x, y) {
        var randomColor = TileColor_1.ALL_COLORS[Math.floor(Math.random() * TileColor_1.ALL_COLORS.length)];
        return new Tile_1.Tile(randomColor, x, y, this.tileIdCounter++);
    };
    /**
     * Получить тайл по координатам
     */
    Board.prototype.getTile = function (x, y) {
        if (x < 0 || x >= this.cols || y < 0 || y >= this.rows) {
            return null;
        }
        return this.grid[x][y];
    };
    /**
     * Установить тайл в ячейку
     */
    Board.prototype.setTile = function (x, y, tile) {
        if (x >= 0 && x < this.cols && y >= 0 && y < this.rows) {
            this.grid[x][y] = tile;
            if (tile) {
                tile.gridX = x;
                tile.gridY = y;
            }
        }
    };
    /**
     * Находит группу связанных тайлов того же цвета (BFS)
     * @param startX координата X начального тайла
     * @param startY координата Y начального тайла
     * @returns массив всех связанных тайлов
     */
    Board.prototype.findConnectedGroup = function (startX, startY) {
        var startTile = this.getTile(startX, startY);
        if (!startTile) {
            return [];
        }
        var targetColor = startTile.color;
        var result = [];
        var visited = new Set();
        var queue = [startTile];
        visited.add(startX + "," + startY);
        while (queue.length > 0) {
            var current = queue.shift();
            result.push(current);
            var neighbors = this.getNeighbors(current.gridX, current.gridY);
            for (var _i = 0, neighbors_1 = neighbors; _i < neighbors_1.length; _i++) {
                var neighbor = neighbors_1[_i];
                var key = neighbor.gridX + "," + neighbor.gridY;
                if (neighbor.color === targetColor && !visited.has(key)) {
                    visited.add(key);
                    queue.push(neighbor);
                }
            }
        }
        return result;
    };
    /**
     * Получить соседей тайла (вверх, вниз, влево, вправо)
     */
    Board.prototype.getNeighbors = function (x, y) {
        var neighbors = [];
        var directions = [
            [0, 1],
            [0, -1],
            [-1, 0],
            [1, 0],
        ];
        for (var _i = 0, directions_1 = directions; _i < directions_1.length; _i++) {
            var _a = directions_1[_i], dx = _a[0], dy = _a[1];
            var neighbor = this.getTile(x + dx, y + dy);
            if (neighbor) {
                neighbors.push(neighbor);
            }
        }
        return neighbors;
    };
    /**
     * Проверка наличия доступных ходов
     * @returns true если есть хотя бы одна группа из 2+ тайлов
     */
    Board.prototype.hasAvailableMoves = function () {
        for (var x = 0; x < this.cols; x++) {
            for (var y = 0; y < this.rows; y++) {
                var tile = this.getTile(x, y);
                if (!tile) {
                    continue;
                }
                var group = this.findConnectedGroup(x, y);
                if (group.length >= 2) {
                    return true;
                }
            }
        }
        return false;
    };
    /**
     * Создать супер-тайл на указанной позиции
     */
    Board.prototype.createSuperTile = function (x, y, superType, color) {
        var superTile = new Tile_1.Tile(color, x, y, this.tileIdCounter++, superType);
        this.setTile(x, y, superTile);
        return superTile;
    };
    /**
     * Получить все тайлы в строке
     */
    Board.prototype.getTilesInRow = function (row) {
        var tiles = [];
        for (var x = 0; x < this.cols; x++) {
            var tile = this.getTile(x, row);
            if (tile) {
                tiles.push(tile);
            }
        }
        return tiles;
    };
    /**
     * Получить все тайлы в столбце
     */
    Board.prototype.getTilesInColumn = function (col) {
        var tiles = [];
        for (var y = 0; y < this.rows; y++) {
            var tile = this.getTile(col, y);
            if (tile) {
                tiles.push(tile);
            }
        }
        return tiles;
    };
    /**
     * Получить тайлы в радиусе от точки
     */
    Board.prototype.getTilesInRadius = function (centerX, centerY, radius) {
        var tiles = [];
        for (var x = 0; x < this.cols; x++) {
            for (var y = 0; y < this.rows; y++) {
                var distance = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2));
                if (distance <= radius) {
                    var tile = this.getTile(x, y);
                    if (tile) {
                        tiles.push(tile);
                    }
                }
            }
        }
        return tiles;
    };
    /**
     * Получить все тайлы на доске
     */
    Board.prototype.getAllTiles = function () {
        var tiles = [];
        for (var x = 0; x < this.cols; x++) {
            for (var y = 0; y < this.rows; y++) {
                var tile = this.getTile(x, y);
                if (tile) {
                    tiles.push(tile);
                }
            }
        }
        return tiles;
    };
    /**
     * Перемешать доску (алгоритм Fisher-Yates)
     */
    Board.prototype.shuffle = function () {
        var _a;
        var allTiles = [];
        for (var x = 0; x < this.cols; x++) {
            for (var y = 0; y < this.rows; y++) {
                var tile = this.getTile(x, y);
                if (tile) {
                    allTiles.push(tile);
                }
            }
        }
        for (var i = allTiles.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            _a = [allTiles[j], allTiles[i]], allTiles[i] = _a[0], allTiles[j] = _a[1];
        }
        var index = 0;
        for (var x = 0; x < this.cols; x++) {
            for (var y = 0; y < this.rows; y++) {
                this.setTile(x, y, allTiles[index++]);
            }
        }
    };
    /**
     * Удаляет тайлы из сетки
     */
    Board.prototype.removeTiles = function (tiles) {
        for (var _i = 0, tiles_1 = tiles; _i < tiles_1.length; _i++) {
            var tile = tiles_1[_i];
            this.setTile(tile.gridX, tile.gridY, null);
        }
    };
    /**
     * Применяет гравитацию: тайлы падают вниз, пустоты заполняются новыми сверху
     * @returns количество сдвинутых/созданных тайлов
     */
    Board.prototype.applyGravity = function () {
        var changesCount = 0;
        for (var x = 0; x < this.cols; x++) {
            var column = [];
            for (var y = 0; y < this.rows; y++) {
                var tile = this.grid[x][y];
                if (tile) {
                    column.push(tile);
                }
            }
            for (var y = 0; y < this.rows; y++) {
                this.grid[x][y] = null;
            }
            var columnIndex = 0;
            for (var y = 0; y < this.rows; y++) {
                if (columnIndex < column.length) {
                    this.setTile(x, y, column[columnIndex]);
                    columnIndex++;
                    changesCount++;
                }
                else {
                    this.setTile(x, y, this.createRandomTile(x, y));
                    changesCount++;
                }
            }
        }
        return changesCount;
    };
    return Board;
}());
exports.Board = Board;

cc._RF.pop();