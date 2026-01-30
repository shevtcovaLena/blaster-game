
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/core/GameRules.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29yZVxcR2FtZVJ1bGVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUF1QztBQUV2Qzs7R0FFRztBQUNIO0lBQUE7SUFrRUEsQ0FBQztJQTNDQzs7T0FFRztJQUNJLHdCQUFjLEdBQXJCLFVBQXNCLFNBQWlCO1FBQ3JDLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxjQUFjLEVBQUU7WUFDbkMsT0FBTyxDQUFDLENBQUM7U0FDVjtRQUNELE9BQU8sU0FBUyxHQUFHLFNBQVMsR0FBRyxDQUFDLENBQUM7SUFDbkMsQ0FBQztJQUVEOztPQUVHO0lBQ0ksc0JBQVksR0FBbkIsVUFBb0IsU0FBaUI7UUFDbkMsT0FBTyxTQUFTLElBQUksSUFBSSxDQUFDLGNBQWMsQ0FBQztJQUMxQyxDQUFDO0lBRUQ7O09BRUc7SUFDSSwwQkFBZ0IsR0FBdkIsVUFBd0IsU0FBaUI7UUFDdkMsSUFBSSxTQUFTLElBQUksSUFBSSxDQUFDLG9CQUFvQixFQUFFO1lBQzFDLE9BQU8sb0JBQWEsQ0FBQyxVQUFVLENBQUM7U0FDakM7UUFDRCxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsY0FBYyxFQUFFO1lBQ3BDLE9BQU8sb0JBQWEsQ0FBQyxJQUFJLENBQUM7U0FDM0I7UUFDRCxJQUFJLFNBQVMsSUFBSSxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDNUMsT0FBTyxvQkFBYSxDQUFDLFlBQVksQ0FBQztTQUNuQztRQUNELElBQUksU0FBUyxJQUFJLElBQUksQ0FBQyxtQkFBbUIsRUFBRTtZQUN6QyxPQUFPLG9CQUFhLENBQUMsU0FBUyxDQUFDO1NBQ2hDO1FBRUQsT0FBTyxvQkFBYSxDQUFDLElBQUksQ0FBQztJQUM1QixDQUFDO0lBRUQ7O09BRUc7SUFDSSwrQkFBcUIsR0FBNUIsVUFBNkIsU0FBaUI7UUFDNUMsT0FBTyxTQUFTLElBQUksSUFBSSxDQUFDLG9CQUFvQixDQUFDO0lBQ2hELENBQUM7SUFoRWUsbUJBQVMsR0FBRyxDQUFDLENBQUM7SUFDZCxtQkFBUyxHQUFHLENBQUMsQ0FBQztJQUVkLG1CQUFTLEdBQUcsR0FBRyxDQUFDO0lBQ2hCLHNCQUFZLEdBQUcsQ0FBQyxDQUFDO0lBQ2pCLDRCQUFrQixHQUFHLEVBQUUsQ0FBQztJQUN4QiwyQkFBaUIsR0FBRyxFQUFFLENBQUM7SUFDdkIsOEJBQW9CLEdBQUcsRUFBRSxDQUFDO0lBQzFCLDhCQUFvQixHQUFHLEVBQUUsQ0FBQztJQUMxQixzQkFBWSxHQUFHLENBQUMsQ0FBQztJQUVqQixzQkFBWSxHQUFHLElBQUksQ0FBQztJQUNwQixtQkFBUyxHQUFHLEVBQUUsQ0FBQztJQUVmLHdCQUFjLEdBQUcsQ0FBQyxDQUFDO0lBRW5CLDhCQUFvQixHQUFHLENBQUMsQ0FBQztJQUN6Qiw2QkFBbUIsR0FBRyxDQUFDLENBQUM7SUFDeEIsZ0NBQXNCLEdBQUcsQ0FBQyxDQUFDO0lBQzNCLHdCQUFjLEdBQUcsQ0FBQyxDQUFDO0lBQ25CLDhCQUFvQixHQUFHLENBQUMsQ0FBQztJQTZDM0MsZ0JBQUM7Q0FsRUQsQUFrRUMsSUFBQTtBQWxFWSw4QkFBUyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFN1cGVyVGlsZVR5cGUgfSBmcm9tIFwiLi9UaWxlXCI7XG5cbi8qKlxuICog0J/RgNCw0LLQuNC70LAg0LjQs9GA0YsgLSDQutC+0L3RgdGC0LDQvdGC0Ysg0Lgg0YTQvtGA0LzRg9C70YtcbiAqL1xuZXhwb3J0IGNsYXNzIEdhbWVSdWxlcyB7XG4gIHN0YXRpYyByZWFkb25seSBHUklEX0NPTFMgPSA5O1xuICBzdGF0aWMgcmVhZG9ubHkgR1JJRF9ST1dTID0gOTtcblxuICBzdGF0aWMgcmVhZG9ubHkgVElMRV9TSVpFID0gMTAwO1xuICBzdGF0aWMgcmVhZG9ubHkgVElMRV9TUEFDSU5HID0gMDtcbiAgc3RhdGljIHJlYWRvbmx5IEZJRUxEX1BBRERJTkdfU0lERSA9IDQxO1xuICBzdGF0aWMgcmVhZG9ubHkgRklFTERfUEFERElOR19UT1AgPSA3MDtcbiAgc3RhdGljIHJlYWRvbmx5IEZJRUxEX1BBRERJTkdfQk9UVE9NID0gNTg7XG4gIHN0YXRpYyByZWFkb25seSBUSUxFX1ZJU1VBTF9PRkZTRVRfWSA9IDEyO1xuICBzdGF0aWMgcmVhZG9ubHkgTUFYX1NIVUZGTEVTID0gMztcblxuICBzdGF0aWMgcmVhZG9ubHkgVEFSR0VUX1NDT1JFID0gMTAwMDtcbiAgc3RhdGljIHJlYWRvbmx5IE1BWF9NT1ZFUyA9IDIwO1xuXG4gIHN0YXRpYyByZWFkb25seSBNSU5fR1JPVVBfU0laRSA9IDI7XG5cbiAgc3RhdGljIHJlYWRvbmx5IFNVUEVSX1RJTEVfTUlOX0dST1VQID0gNTtcbiAgc3RhdGljIHJlYWRvbmx5IFJPV19CTEFTVF9USFJFU0hPTEQgPSA1O1xuICBzdGF0aWMgcmVhZG9ubHkgQ09MVU1OX0JMQVNUX1RIUkVTSE9MRCA9IDY7XG4gIHN0YXRpYyByZWFkb25seSBCT01CX1RIUkVTSE9MRCA9IDc7XG4gIHN0YXRpYyByZWFkb25seSBNRUdBX0JMQVNUX1RIUkVTSE9MRCA9IDk7XG5cbiAgLyoqXG4gICAqINCk0L7RgNC80YPQu9CwINC90LDRh9C40YHQu9C10L3QuNGPINC+0YfQutC+0LIg0LfQsCDQs9GA0YPQv9C/0YNcbiAgICovXG4gIHN0YXRpYyBjYWxjdWxhdGVTY29yZShncm91cFNpemU6IG51bWJlcik6IG51bWJlciB7XG4gICAgaWYgKGdyb3VwU2l6ZSA8IHRoaXMuTUlOX0dST1VQX1NJWkUpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICByZXR1cm4gZ3JvdXBTaXplICogZ3JvdXBTaXplICogMjtcbiAgfVxuXG4gIC8qKlxuICAgKiDQn9GA0L7QstC10YDQutCwINCy0L7Qt9C80L7QttC90L7RgdGC0Lgg0LLQt9GA0YvQstCwINCz0YDRg9C/0L/Ri1xuICAgKi9cbiAgc3RhdGljIGlzVmFsaWRHcm91cChncm91cFNpemU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBncm91cFNpemUgPj0gdGhpcy5NSU5fR1JPVVBfU0laRTtcbiAgfVxuXG4gIC8qKlxuICAgKiDQntC/0YDQtdC00LXQu9C40YLRjCDRgtC40L8g0YHRg9C/0LXRgC3RgtCw0LnQu9CwINC/0L4g0YDQsNC30LzQtdGA0YMg0LPRgNGD0L/Qv9GLXG4gICAqL1xuICBzdGF0aWMgZ2V0U3VwZXJUaWxlVHlwZShncm91cFNpemU6IG51bWJlcik6IFN1cGVyVGlsZVR5cGUge1xuICAgIGlmIChncm91cFNpemUgPj0gdGhpcy5NRUdBX0JMQVNUX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuIFN1cGVyVGlsZVR5cGUuTUVHQV9CTEFTVDtcbiAgICB9XG4gICAgaWYgKGdyb3VwU2l6ZSA+PSB0aGlzLkJPTUJfVEhSRVNIT0xEKSB7XG4gICAgICByZXR1cm4gU3VwZXJUaWxlVHlwZS5CT01CO1xuICAgIH1cbiAgICBpZiAoZ3JvdXBTaXplID49IHRoaXMuQ09MVU1OX0JMQVNUX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuIFN1cGVyVGlsZVR5cGUuQ09MVU1OX0JMQVNUO1xuICAgIH1cbiAgICBpZiAoZ3JvdXBTaXplID49IHRoaXMuUk9XX0JMQVNUX1RIUkVTSE9MRCkge1xuICAgICAgcmV0dXJuIFN1cGVyVGlsZVR5cGUuUk9XX0JMQVNUO1xuICAgIH1cblxuICAgIHJldHVybiBTdXBlclRpbGVUeXBlLk5PTkU7XG4gIH1cblxuICAvKipcbiAgICog0J/RgNC+0LLQtdGA0LrQsCDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLQuCDRgdC+0LfQtNCw0L3QuNGPINGB0YPQv9C10YAt0YLQsNC50LvQsFxuICAgKi9cbiAgc3RhdGljIHNob3VsZENyZWF0ZVN1cGVyVGlsZShncm91cFNpemU6IG51bWJlcik6IGJvb2xlYW4ge1xuICAgIHJldHVybiBncm91cFNpemUgPj0gdGhpcy5TVVBFUl9USUxFX01JTl9HUk9VUDtcbiAgfVxufVxuIl19