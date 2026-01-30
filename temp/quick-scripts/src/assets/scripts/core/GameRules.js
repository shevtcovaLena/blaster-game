"use strict";
cc._RF.push(module, '051e0V/wrpOcpxE/Tl0HYAP', 'GameRules');
// scripts/core/GameRules.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameRules = void 0;
var Tile_1 = require("./Tile");
/**
 * Правила игры - константы и формулы
 */
var GameRules = /** @class */ (function () {
    function GameRules() {
    }
    /**
     * Формула начисления очков за группу
     */
    GameRules.calculateScore = function (groupSize) {
        if (groupSize < this.MIN_GROUP_SIZE) {
            return 0;
        }
        return groupSize * groupSize * 2;
    };
    /**
     * Проверка возможности взрыва группы
     */
    GameRules.isValidGroup = function (groupSize) {
        return groupSize >= this.MIN_GROUP_SIZE;
    };
    /**
     * Определить тип супер-тайла по размеру группы
     */
    GameRules.getSuperTileType = function (groupSize) {
        if (groupSize >= this.MEGA_BLAST_THRESHOLD) {
            return Tile_1.SuperTileType.MEGA_BLAST;
        }
        if (groupSize >= this.BOMB_THRESHOLD) {
            return Tile_1.SuperTileType.BOMB;
        }
        if (groupSize >= this.COLUMN_BLAST_THRESHOLD) {
            return Tile_1.SuperTileType.COLUMN_BLAST;
        }
        if (groupSize >= this.ROW_BLAST_THRESHOLD) {
            return Tile_1.SuperTileType.ROW_BLAST;
        }
        return Tile_1.SuperTileType.NONE;
    };
    /**
     * Проверка необходимости создания супер-тайла
     */
    GameRules.shouldCreateSuperTile = function (groupSize) {
        return groupSize >= this.SUPER_TILE_MIN_GROUP;
    };
    GameRules.GRID_COLS = 9;
    GameRules.GRID_ROWS = 9;
    GameRules.TILE_SIZE = 100;
    GameRules.TILE_SPACING = 0;
    GameRules.FIELD_PADDING_SIDE = 41;
    GameRules.FIELD_PADDING_TOP = 70;
    GameRules.FIELD_PADDING_BOTTOM = 58;
    GameRules.TILE_VISUAL_OFFSET_Y = 12;
    GameRules.MAX_SHUFFLES = 3;
    GameRules.TARGET_SCORE = 1000;
    GameRules.MAX_MOVES = 20;
    GameRules.MIN_GROUP_SIZE = 2;
    GameRules.SUPER_TILE_MIN_GROUP = 5;
    GameRules.ROW_BLAST_THRESHOLD = 5;
    GameRules.COLUMN_BLAST_THRESHOLD = 6;
    GameRules.BOMB_THRESHOLD = 7;
    GameRules.MEGA_BLAST_THRESHOLD = 9;
    return GameRules;
}());
exports.GameRules = GameRules;

cc._RF.pop();