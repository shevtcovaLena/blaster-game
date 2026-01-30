
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/core/TileColor.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29yZVxcVGlsZUNvbG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBOzs7R0FHRztBQUNILElBQVksU0FNWDtBQU5ELFdBQVksU0FBUztJQUNqQix3QkFBVyxDQUFBO0lBQ1gsMEJBQWEsQ0FBQTtJQUNiLDRCQUFlLENBQUE7SUFDZiw4QkFBaUIsQ0FBQTtJQUNqQiw4QkFBaUIsQ0FBQTtBQUNyQixDQUFDLEVBTlcsU0FBUyxHQUFULGlCQUFTLEtBQVQsaUJBQVMsUUFNcEI7QUFFRDs7R0FFRztBQUNVLFFBQUEsVUFBVSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLENBQUMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqINCf0LXRgNC10YfQuNGB0LvQtdC90LjQtSDRhtCy0LXRgtC+0LIg0YLQsNC50LvQvtCyXG4gKiDQmNGB0L/QvtC70YzQt9GD0LXQvCBlbnVtINC00LvRjyDRgtC40L/QvtCx0LXQt9C+0L/QsNGB0L3QvtGB0YLQuFxuICovXG5leHBvcnQgZW51bSBUaWxlQ29sb3Ige1xuICAgIFJFRCA9ICdyZWQnLFxuICAgIEJMVUUgPSAnYmx1ZScsXG4gICAgR1JFRU4gPSAnZ3JlZW4nLFxuICAgIFlFTExPVyA9ICd5ZWxsb3cnLFxuICAgIFBVUlBMRSA9ICdwdXJwbGUnXG59XG5cbi8qKlxuICog0JrQvtC90YHRgtCw0L3RgtCwINC00LvRjyDRg9C00L7QsdC90L7Qs9C+INC/0L7Qu9GD0YfQtdC90LjRjyDQstGB0LXRhSDRhtCy0LXRgtC+0LJcbiAqL1xuZXhwb3J0IGNvbnN0IEFMTF9DT0xPUlMgPSBPYmplY3QudmFsdWVzKFRpbGVDb2xvcik7XG4iXX0=