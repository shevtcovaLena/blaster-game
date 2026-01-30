"use strict";
cc._RF.push(module, '29066LBzIRPL4kbxd052RJj', 'TileColor');
// scripts/core/TileColor.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ALL_COLORS = exports.TileColor = void 0;
/**
 * Перечисление цветов тайлов
 * Используем enum для типобезопасности
 */
var TileColor;
(function (TileColor) {
    TileColor["RED"] = "red";
    TileColor["BLUE"] = "blue";
    TileColor["GREEN"] = "green";
    TileColor["YELLOW"] = "yellow";
    TileColor["PURPLE"] = "purple";
})(TileColor = exports.TileColor || (exports.TileColor = {}));
/**
 * Константа для удобного получения всех цветов
 */
exports.ALL_COLORS = Object.values(TileColor);

cc._RF.pop();