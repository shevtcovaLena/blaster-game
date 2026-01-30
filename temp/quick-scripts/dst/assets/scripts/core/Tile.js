
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/core/Tile.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29yZVxcVGlsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFFQTs7R0FFRztBQUNILElBQVksYUFNWDtBQU5ELFdBQVksYUFBYTtJQUN2Qiw4QkFBYSxDQUFBO0lBQ2Isa0NBQWlCLENBQUE7SUFDakIsd0NBQXVCLENBQUE7SUFDdkIsOEJBQWEsQ0FBQTtJQUNiLG9DQUFtQixDQUFBO0FBQ3JCLENBQUMsRUFOVyxhQUFhLEdBQWIscUJBQWEsS0FBYixxQkFBYSxRQU14QjtBQUVEOztHQUVHO0FBQ0g7SUFDRSxjQUNTLEtBQWdCLEVBQ2hCLEtBQWEsRUFDYixLQUFhLEVBQ2IsRUFBVSxFQUNWLFNBQTZDO1FBQTdDLDBCQUFBLEVBQUEsWUFBMkIsYUFBYSxDQUFDLElBQUk7UUFKN0MsVUFBSyxHQUFMLEtBQUssQ0FBVztRQUNoQixVQUFLLEdBQUwsS0FBSyxDQUFRO1FBQ2IsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLE9BQUUsR0FBRixFQUFFLENBQVE7UUFDVixjQUFTLEdBQVQsU0FBUyxDQUFvQztJQUNuRCxDQUFDO0lBRUosc0JBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLFNBQVMsS0FBSyxhQUFhLENBQUMsSUFBSSxDQUFDO0lBQy9DLENBQUM7SUFFRCwyQkFBWSxHQUFaLFVBQWEsS0FBVztRQUN0QixJQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlDLElBQU0sRUFBRSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDOUMsT0FBTyxDQUFDLEVBQUUsS0FBSyxDQUFDLElBQUksRUFBRSxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRSxLQUFLLENBQUMsSUFBSSxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUM7SUFDMUQsQ0FBQztJQUVELHVCQUFRLEdBQVI7UUFDRSxJQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxDQUFDLGFBQVcsSUFBSSxDQUFDLFNBQVMsTUFBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDdEUsT0FBTyxVQUFRLElBQUksQ0FBQyxFQUFFLFVBQUssSUFBSSxDQUFDLEtBQUssWUFBTyxJQUFJLENBQUMsS0FBSyxTQUFJLElBQUksQ0FBQyxLQUFLLFNBQUksVUFBWSxDQUFDO0lBQ3ZGLENBQUM7SUFDSCxXQUFDO0FBQUQsQ0F2QkEsQUF1QkMsSUFBQTtBQXZCWSxvQkFBSSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFRpbGVDb2xvciB9IGZyb20gXCIuL1RpbGVDb2xvclwiO1xuXG4vKipcbiAqINCi0LjQv9GLINGB0YPQv9C10YAt0YLQsNC50LvQvtCyXG4gKi9cbmV4cG9ydCBlbnVtIFN1cGVyVGlsZVR5cGUge1xuICBOT05FID0gXCJub25lXCIsXG4gIFJPV19CTEFTVCA9IFwicm93XCIsXG4gIENPTFVNTl9CTEFTVCA9IFwiY29sdW1uXCIsXG4gIEJPTUIgPSBcImJvbWJcIixcbiAgTUVHQV9CTEFTVCA9IFwibWVnYVwiLFxufVxuXG4vKipcbiAqINCc0L7QtNC10LvRjCDRgtCw0LnQu9CwIC0g0YfQuNGB0YLRi9C1INC00LDQvdC90YvQtSDQsdC10Lcg0LLQuNC30YPQsNC70LjQt9Cw0YbQuNC4XG4gKi9cbmV4cG9ydCBjbGFzcyBUaWxlIHtcbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIGNvbG9yOiBUaWxlQ29sb3IsXG4gICAgcHVibGljIGdyaWRYOiBudW1iZXIsXG4gICAgcHVibGljIGdyaWRZOiBudW1iZXIsXG4gICAgcHVibGljIGlkOiBudW1iZXIsXG4gICAgcHVibGljIHN1cGVyVHlwZTogU3VwZXJUaWxlVHlwZSA9IFN1cGVyVGlsZVR5cGUuTk9ORSxcbiAgKSB7fVxuXG4gIGlzU3VwZXIoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuc3VwZXJUeXBlICE9PSBTdXBlclRpbGVUeXBlLk5PTkU7XG4gIH1cblxuICBpc0FkamFjZW50VG8ob3RoZXI6IFRpbGUpOiBib29sZWFuIHtcbiAgICBjb25zdCBkeCA9IE1hdGguYWJzKHRoaXMuZ3JpZFggLSBvdGhlci5ncmlkWCk7XG4gICAgY29uc3QgZHkgPSBNYXRoLmFicyh0aGlzLmdyaWRZIC0gb3RoZXIuZ3JpZFkpO1xuICAgIHJldHVybiAoZHggPT09IDEgJiYgZHkgPT09IDApIHx8IChkeCA9PT0gMCAmJiBkeSA9PT0gMSk7XG4gIH1cblxuICB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIGNvbnN0IHN1cGVyTGFiZWwgPSB0aGlzLmlzU3VwZXIoKSA/IGAgW1NVUEVSOiR7dGhpcy5zdXBlclR5cGV9XWAgOiBcIlwiO1xuICAgIHJldHVybiBgVGlsZVske3RoaXMuaWR9XSgke3RoaXMuY29sb3J9IGF0ICR7dGhpcy5ncmlkWH0sJHt0aGlzLmdyaWRZfSkke3N1cGVyTGFiZWx9YDtcbiAgfVxufVxuIl19