"use strict";
cc._RF.push(module, '2cef4zMrNZLUqATAYF5DCnO', 'Tile');
// scripts/core/Tile.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tile = exports.SuperTileType = void 0;
/**
 * Типы супер-тайлов
 */
var SuperTileType;
(function (SuperTileType) {
    SuperTileType["NONE"] = "none";
    SuperTileType["ROW_BLAST"] = "row";
    SuperTileType["COLUMN_BLAST"] = "column";
    SuperTileType["BOMB"] = "bomb";
    SuperTileType["MEGA_BLAST"] = "mega";
})(SuperTileType = exports.SuperTileType || (exports.SuperTileType = {}));
/**
 * Модель тайла - чистые данные без визуализации
 */
var Tile = /** @class */ (function () {
    function Tile(color, gridX, gridY, id, superType) {
        if (superType === void 0) { superType = SuperTileType.NONE; }
        this.color = color;
        this.gridX = gridX;
        this.gridY = gridY;
        this.id = id;
        this.superType = superType;
    }
    Tile.prototype.isSuper = function () {
        return this.superType !== SuperTileType.NONE;
    };
    Tile.prototype.isAdjacentTo = function (other) {
        var dx = Math.abs(this.gridX - other.gridX);
        var dy = Math.abs(this.gridY - other.gridY);
        return (dx === 1 && dy === 0) || (dx === 0 && dy === 1);
    };
    Tile.prototype.toString = function () {
        var superLabel = this.isSuper() ? " [SUPER:" + this.superType + "]" : "";
        return "Tile[" + this.id + "](" + this.color + " at " + this.gridX + "," + this.gridY + ")" + superLabel;
    };
    return Tile;
}());
exports.Tile = Tile;

cc._RF.pop();