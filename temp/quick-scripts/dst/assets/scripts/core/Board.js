
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/core/Board.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29yZVxcQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLHlDQUFvRDtBQUVwRDs7O0dBR0c7QUFDSDtJQUlFLGVBQ2tCLElBQVksRUFDWixJQUFZO1FBRFosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFNBQUksR0FBSixJQUFJLENBQVE7UUFKdEIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFNaEMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0JBQVEsR0FBUjtRQUNFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDL0M7U0FDRjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLGdDQUFnQixHQUF4QixVQUF5QixDQUFTLEVBQUUsQ0FBUztRQUMzQyxJQUFNLFdBQVcsR0FDZixzQkFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLHNCQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLElBQUksV0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFD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LEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFO29CQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3hDLFdBQVcsRUFBRSxDQUFDO29CQUNkLFlBQVksRUFBRSxDQUFDO2lCQUNoQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxZQUFZLEVBQUUsQ0FBQztpQkFDaEI7YUFDRjtTQUNGO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQXRTQSxBQXNTQyxJQUFBO0FBdFNZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IFRpbGVDb2xvciwgQUxMX0NPTE9SUyB9IGZyb20gXCIuL1RpbGVDb2xvclwiO1xuXG4vKipcbiAqINCc0L7QtNC10LvRjCDQuNCz0YDQvtCy0L7Qs9C+INC/0L7Qu9GPIC0g0LTQstGD0LzQtdGA0L3QsNGPINGB0LXRgtC60LAg0YLQsNC50LvQvtCyXG4gKiDQntGC0LLQtdGH0LDQtdGCINC30LAg0LPQtdC90LXRgNCw0YbQuNGOLCDQv9C+0LjRgdC6INCz0YDRg9C/0L8sINGD0LTQsNC70LXQvdC40LUg0Lgg0LPRgNCw0LLQuNGC0LDRhtC40Y5cbiAqL1xuZXhwb3J0IGNsYXNzIEJvYXJkIHtcbiAgcHJpdmF0ZSBncmlkOiAoVGlsZSB8IG51bGwpW11bXTtcbiAgcHJpdmF0ZSB0aWxlSWRDb3VudGVyOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBjb2xzOiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IHJvd3M6IG51bWJlcixcbiAgKSB7XG4gICAgdGhpcy5ncmlkID0gW107XG4gIH1cblxuICAvKipcbiAgICog0JPQtdC90LXRgNC40YDRg9C10YIg0YHQu9GD0YfQsNC50L3QvtC1INC/0L7Qu9C1LCDQt9Cw0L/QvtC70L3Rj9GPINCy0YHQtSDRj9GH0LXQudC60Lgg0YLQsNC50LvQsNC80LhcbiAgICovXG4gIGdlbmVyYXRlKCk6IHZvaWQge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzOyB4KyspIHtcbiAgICAgIHRoaXMuZ3JpZFt4XSA9IFtdO1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3M7IHkrKykge1xuICAgICAgICB0aGlzLmdyaWRbeF1beV0gPSB0aGlzLmNyZWF0ZVJhbmRvbVRpbGUoeCwgeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqINCh0L7Qt9C00LDRkdGCINGC0LDQudC7INGB0LvRg9GH0LDQudC90L7Qs9C+INGG0LLQtdGC0LBcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlUmFuZG9tVGlsZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IFRpbGUge1xuICAgIGNvbnN0IHJhbmRvbUNvbG9yID1cbiAgICAgIEFMTF9DT0xPUlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQUxMX0NPTE9SUy5sZW5ndGgpXTtcbiAgICByZXR1cm4gbmV3IFRpbGUocmFuZG9tQ29sb3IsIHgsIHksIHRoaXMudGlsZUlkQ291bnRlcisrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDQn9C+0LvRg9GH0LjRgtGMINGC0LDQudC7INC/0L4g0LrQvtC+0YDQtNC40L3QsNGC0LDQvFxuICAgKi9cbiAgZ2V0VGlsZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IFRpbGUgfCBudWxsIHtcbiAgICBpZiAoeCA8IDAgfHwgeCA+PSB0aGlzLmNvbHMgfHwgeSA8IDAgfHwgeSA+PSB0aGlzLnJvd3MpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ncmlkW3hdW3ldO1xuICB9XG5cbiAgLyoqXG4gICAqINCj0YHRgtCw0L3QvtCy0LjRgtGMINGC0LDQudC7INCyINGP0YfQtdC50LrRg1xuICAgKi9cbiAgc2V0VGlsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgdGlsZTogVGlsZSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoeCA+PSAwICYmIHggPCB0aGlzLmNvbHMgJiYgeSA+PSAwICYmIHkgPCB0aGlzLnJvd3MpIHtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9IHRpbGU7XG4gICAgICBpZiAodGlsZSkge1xuICAgICAgICB0aWxlLmdyaWRYID0geDtcbiAgICAgICAgdGlsZS5ncmlkWSA9IHk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqINCd0LDRhdC+0LTQuNGCINCz0YDRg9C/0L/RgyDRgdCy0Y/Qt9Cw0L3QvdGL0YUg0YLQsNC50LvQvtCyINGC0L7Qs9C+INC20LUg0YbQstC10YLQsCAoQkZTKVxuICAgKiBAcGFyYW0gc3RhcnRYINC60L7QvtGA0LTQuNC90LDRgtCwIFgg0L3QsNGH0LDQu9GM0L3QvtCz0L4g0YLQsNC50LvQsFxuICAgKiBAcGFyYW0gc3RhcnRZINC60L7QvtGA0LTQuNC90LDRgtCwIFkg0L3QsNGH0LDQu9GM0L3QvtCz0L4g0YLQsNC50LvQsFxuICAgKiBAcmV0dXJucyDQvNCw0YHRgdC40LIg0LLRgdC10YUg0YHQstGP0LfQsNC90L3Ri9GFINGC0LDQudC70L7QslxuICAgKi9cbiAgZmluZENvbm5lY3RlZEdyb3VwKHN0YXJ0WDogbnVtYmVyLCBzdGFydFk6IG51bWJlcik6IFRpbGVbXSB7XG4gICAgY29uc3Qgc3RhcnRUaWxlID0gdGhpcy5nZXRUaWxlKHN0YXJ0WCwgc3RhcnRZKTtcblxuICAgIGlmICghc3RhcnRUaWxlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0Q29sb3IgPSBzdGFydFRpbGUuY29sb3I7XG4gICAgY29uc3QgcmVzdWx0OiBUaWxlW10gPSBbXTtcbiAgICBjb25zdCB2aXNpdGVkOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBxdWV1ZTogVGlsZVtdID0gW3N0YXJ0VGlsZV07XG5cbiAgICB2aXNpdGVkLmFkZChgJHtzdGFydFh9LCR7c3RhcnRZfWApO1xuXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBxdWV1ZS5zaGlmdCgpITtcbiAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuXG4gICAgICBjb25zdCBuZWlnaGJvcnMgPSB0aGlzLmdldE5laWdoYm9ycyhjdXJyZW50LmdyaWRYLCBjdXJyZW50LmdyaWRZKTtcblxuICAgICAgZm9yIChjb25zdCBuZWlnaGJvciBvZiBuZWlnaGJvcnMpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7bmVpZ2hib3IuZ3JpZFh9LCR7bmVpZ2hib3IuZ3JpZFl9YDtcblxuICAgICAgICBpZiAobmVpZ2hib3IuY29sb3IgPT09IHRhcmdldENvbG9yICYmICF2aXNpdGVkLmhhcyhrZXkpKSB7XG4gICAgICAgICAgdmlzaXRlZC5hZGQoa2V5KTtcbiAgICAgICAgICBxdWV1ZS5wdXNoKG5laWdoYm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICog0J/QvtC70YPRh9C40YLRjCDRgdC+0YHQtdC00LXQuSDRgtCw0LnQu9CwICjQstCy0LXRgNGFLCDQstC90LjQtywg0LLQu9C10LLQviwg0LLQv9GA0LDQstC+KVxuICAgKi9cbiAgcHJpdmF0ZSBnZXROZWlnaGJvcnMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBUaWxlW10ge1xuICAgIGNvbnN0IG5laWdoYm9yczogVGlsZVtdID0gW107XG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFtcbiAgICAgIFswLCAxXSxcbiAgICAgIFswLCAtMV0sXG4gICAgICBbLTEsIDBdLFxuICAgICAgWzEsIDBdLFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IFtkeCwgZHldIG9mIGRpcmVjdGlvbnMpIHtcbiAgICAgIGNvbnN0IG5laWdoYm9yID0gdGhpcy5nZXRUaWxlKHggKyBkeCwgeSArIGR5KTtcbiAgICAgIGlmIChuZWlnaGJvcikge1xuICAgICAgICBuZWlnaGJvcnMucHVzaChuZWlnaGJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5laWdoYm9ycztcbiAgfVxuXG4gIC8qKlxuICAgKiDQn9GA0L7QstC10YDQutCwINC90LDQu9C40YfQuNGPINC00L7RgdGC0YPQv9C90YvRhSDRhdC+0LTQvtCyXG4gICAqIEByZXR1cm5zIHRydWUg0LXRgdC70Lgg0LXRgdGC0Ywg0YXQvtGC0Y8g0LHRiyDQvtC00L3QsCDQs9GA0YPQv9C/0LAg0LjQtyAyKyDRgtCw0LnQu9C+0LJcbiAgICovXG4gIHB1YmxpYyBoYXNBdmFpbGFibGVNb3ZlcygpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sczsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93czsgeSsrKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XG5cbiAgICAgICAgaWYgKCF0aWxlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuZmluZENvbm5lY3RlZEdyb3VwKHgsIHkpO1xuXG4gICAgICAgIGlmIChncm91cC5sZW5ndGggPj0gMikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqINCh0L7Qt9C00LDRgtGMINGB0YPQv9C10YAt0YLQsNC50Lsg0L3QsCDRg9C60LDQt9Cw0L3QvdC+0Lkg0L/QvtC30LjRhtC40LhcbiAgICovXG4gIGNyZWF0ZVN1cGVyVGlsZShcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIHN1cGVyVHlwZTogaW1wb3J0KFwiLi9UaWxlXCIpLlN1cGVyVGlsZVR5cGUsXG4gICAgY29sb3I6IFRpbGVDb2xvcixcbiAgKTogVGlsZSB7XG4gICAgY29uc3Qgc3VwZXJUaWxlID0gbmV3IFRpbGUoY29sb3IsIHgsIHksIHRoaXMudGlsZUlkQ291bnRlcisrLCBzdXBlclR5cGUpO1xuICAgIHRoaXMuc2V0VGlsZSh4LCB5LCBzdXBlclRpbGUpO1xuICAgIHJldHVybiBzdXBlclRpbGU7XG4gIH1cblxuICAvKipcbiAgICog0J/QvtC70YPRh9C40YLRjCDQstGB0LUg0YLQsNC50LvRiyDQsiDRgdGC0YDQvtC60LVcbiAgICovXG4gIGdldFRpbGVzSW5Sb3cocm93OiBudW1iZXIpOiBUaWxlW10ge1xuICAgIGNvbnN0IHRpbGVzOiBUaWxlW10gPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sczsgeCsrKSB7XG4gICAgICBjb25zdCB0aWxlID0gdGhpcy5nZXRUaWxlKHgsIHJvdyk7XG4gICAgICBpZiAodGlsZSkge1xuICAgICAgICB0aWxlcy5wdXNoKHRpbGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGlsZXM7XG4gIH1cblxuICAvKipcbiAgICog0J/QvtC70YPRh9C40YLRjCDQstGB0LUg0YLQsNC50LvRiyDQsiDRgdGC0L7Qu9Cx0YbQtVxuICAgKi9cbiAgZ2V0VGlsZXNJbkNvbHVtbihjb2w6IG51bWJlcik6IFRpbGVbXSB7XG4gICAgY29uc3QgdGlsZXM6IFRpbGVbXSA9IFtdO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5yb3dzOyB5KyspIHtcbiAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmdldFRpbGUoY29sLCB5KTtcbiAgICAgIGlmICh0aWxlKSB7XG4gICAgICAgIHRpbGVzLnB1c2godGlsZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aWxlcztcbiAgfVxuXG4gIC8qKlxuICAgKiDQn9C+0LvRg9GH0LjRgtGMINGC0LDQudC70Ysg0LIg0YDQsNC00LjRg9GB0LUg0L7RgiDRgtC+0YfQutC4XG4gICAqL1xuICBnZXRUaWxlc0luUmFkaXVzKGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlcik6IFRpbGVbXSB7XG4gICAgY29uc3QgdGlsZXM6IFRpbGVbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHM7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3M7IHkrKykge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChcbiAgICAgICAgICBNYXRoLnBvdyh4IC0gY2VudGVyWCwgMikgKyBNYXRoLnBvdyh5IC0gY2VudGVyWSwgMiksXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGRpc3RhbmNlIDw9IHJhZGl1cykge1xuICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XG4gICAgICAgICAgaWYgKHRpbGUpIHtcbiAgICAgICAgICAgIHRpbGVzLnB1c2godGlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpbGVzO1xuICB9XG5cbiAgLyoqXG4gICAqINCf0L7Qu9GD0YfQuNGC0Ywg0LLRgdC1INGC0LDQudC70Ysg0L3QsCDQtNC+0YHQutC1XG4gICAqL1xuICBnZXRBbGxUaWxlcygpOiBUaWxlW10ge1xuICAgIGNvbnN0IHRpbGVzOiBUaWxlW10gPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sczsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93czsgeSsrKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XG4gICAgICAgIGlmICh0aWxlKSB7XG4gICAgICAgICAgdGlsZXMucHVzaCh0aWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGlsZXM7XG4gIH1cblxuICAvKipcbiAgICog0J/QtdGA0LXQvNC10YjQsNGC0Ywg0LTQvtGB0LrRgyAo0LDQu9Cz0L7RgNC40YLQvCBGaXNoZXItWWF0ZXMpXG4gICAqL1xuICBzaHVmZmxlKCk6IHZvaWQge1xuICAgIGNvbnN0IGFsbFRpbGVzOiBUaWxlW10gPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sczsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93czsgeSsrKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XG4gICAgICAgIGlmICh0aWxlKSB7XG4gICAgICAgICAgYWxsVGlsZXMucHVzaCh0aWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBhbGxUaWxlcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICBbYWxsVGlsZXNbaV0sIGFsbFRpbGVzW2pdXSA9IFthbGxUaWxlc1tqXSwgYWxsVGlsZXNbaV1dO1xuICAgIH1cblxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHM7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3M7IHkrKykge1xuICAgICAgICB0aGlzLnNldFRpbGUoeCwgeSwgYWxsVGlsZXNbaW5kZXgrK10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDQo9C00LDQu9GP0LXRgiDRgtCw0LnQu9GLINC40Lcg0YHQtdGC0LrQuFxuICAgKi9cbiAgcmVtb3ZlVGlsZXModGlsZXM6IFRpbGVbXSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgdGlsZSBvZiB0aWxlcykge1xuICAgICAgdGhpcy5zZXRUaWxlKHRpbGUuZ3JpZFgsIHRpbGUuZ3JpZFksIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDQn9GA0LjQvNC10L3Rj9C10YIg0LPRgNCw0LLQuNGC0LDRhtC40Y46INGC0LDQudC70Ysg0L/QsNC00LDRjtGCINCy0L3QuNC3LCDQv9GD0YHRgtC+0YLRiyDQt9Cw0L/QvtC70L3Rj9GO0YLRgdGPINC90L7QstGL0LzQuCDRgdCy0LXRgNGF0YNcbiAgICogQHJldHVybnMg0LrQvtC70LjRh9C10YHRgtCy0L4g0YHQtNCy0LjQvdGD0YLRi9GFL9GB0L7Qt9C00LDQvdC90YvRhSDRgtCw0LnQu9C+0LJcbiAgICovXG4gIGFwcGx5R3Jhdml0eSgpOiBudW1iZXIge1xuICAgIGxldCBjaGFuZ2VzQ291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHM7IHgrKykge1xuICAgICAgY29uc3QgY29sdW1uOiBUaWxlW10gPSBbXTtcblxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3M7IHkrKykge1xuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy5ncmlkW3hdW3ldO1xuICAgICAgICBpZiAodGlsZSkge1xuICAgICAgICAgIGNvbHVtbi5wdXNoKHRpbGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5yb3dzOyB5KyspIHtcbiAgICAgICAgdGhpcy5ncmlkW3hdW3ldID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbGV0IGNvbHVtbkluZGV4ID0gMDtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5yb3dzOyB5KyspIHtcbiAgICAgICAgaWYgKGNvbHVtbkluZGV4IDwgY29sdW1uLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuc2V0VGlsZSh4LCB5LCBjb2x1bW5bY29sdW1uSW5kZXhdKTtcbiAgICAgICAgICBjb2x1bW5JbmRleCsrO1xuICAgICAgICAgIGNoYW5nZXNDb3VudCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0VGlsZSh4LCB5LCB0aGlzLmNyZWF0ZVJhbmRvbVRpbGUoeCwgeSkpO1xuICAgICAgICAgIGNoYW5nZXNDb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZXNDb3VudDtcbiAgfVxufVxuIl19