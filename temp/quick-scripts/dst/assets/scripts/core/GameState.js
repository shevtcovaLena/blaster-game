
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/core/GameState.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'bda90y7/05DdrhdJBUNKhZE', 'GameState');
// scripts/core/GameState.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = exports.GameStatus = void 0;
var GameRules_1 = require("./GameRules");
/**
 * Состояния игры
 */
var GameStatus;
(function (GameStatus) {
    GameStatus["PLAYING"] = "playing";
    GameStatus["WIN"] = "win";
    GameStatus["LOSE"] = "lose";
})(GameStatus = exports.GameStatus || (exports.GameStatus = {}));
/**
 * Состояние игры - очки, ходы, статус
 */
var GameState = /** @class */ (function () {
    function GameState() {
        this._score = 0;
        this._movesLeft = GameRules_1.GameRules.MAX_MOVES;
        this._status = GameStatus.PLAYING;
        this._shufflesLeft = GameRules_1.GameRules.MAX_SHUFFLES;
    }
    Object.defineProperty(GameState.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameState.prototype, "movesLeft", {
        get: function () {
            return this._movesLeft;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameState.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameState.prototype, "shufflesLeft", {
        get: function () {
            return this._shufflesLeft;
        },
        enumerable: false,
        configurable: true
    });
    GameState.prototype.isPlaying = function () {
        return this._status === GameStatus.PLAYING;
    };
    GameState.prototype.addScore = function (groupSize) {
        var points = GameRules_1.GameRules.calculateScore(groupSize);
        this._score += points;
    };
    GameState.prototype.useMove = function () {
        if (this._movesLeft > 0) {
            this._movesLeft--;
        }
    };
    GameState.prototype.useShuffle = function () {
        if (this._shufflesLeft > 0) {
            this._shufflesLeft--;
        }
    };
    /**
     * Проверить условия окончания игры
     */
    GameState.prototype.checkEndConditions = function (board) {
        if (this._status !== GameStatus.PLAYING) {
            return;
        }
        if (this._score >= GameRules_1.GameRules.TARGET_SCORE) {
            this._status = GameStatus.WIN;
            return;
        }
        if (this._movesLeft <= 0) {
            this._status = GameStatus.LOSE;
            return;
        }
        if (!board.hasAvailableMoves() && this._shufflesLeft <= 0) {
            this._status = GameStatus.LOSE;
        }
    };
    GameState.prototype.reset = function () {
        this._score = 0;
        this._movesLeft = GameRules_1.GameRules.MAX_MOVES;
        this._status = GameStatus.PLAYING;
        this._shufflesLeft = GameRules_1.GameRules.MAX_SHUFFLES;
    };
    return GameState;
}());
exports.GameState = GameState;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29yZVxcR2FtZVN0YXRlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHlDQUF3QztBQUd4Qzs7R0FFRztBQUNILElBQVksVUFJWDtBQUpELFdBQVksVUFBVTtJQUNwQixpQ0FBbUIsQ0FBQTtJQUNuQix5QkFBVyxDQUFBO0lBQ1gsMkJBQWEsQ0FBQTtBQUNmLENBQUMsRUFKVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQUlyQjtBQUVEOztHQUVHO0FBQ0g7SUFBQTtRQUNVLFdBQU0sR0FBVyxDQUFDLENBQUM7UUFDbkIsZUFBVSxHQUFXLHFCQUFTLENBQUMsU0FBUyxDQUFDO1FBQ3pDLFlBQU8sR0FBZSxVQUFVLENBQUMsT0FBTyxDQUFDO1FBQ3pDLGtCQUFhLEdBQVcscUJBQVMsQ0FBQyxZQUFZLENBQUM7SUFvRXpELENBQUM7SUFsRUMsc0JBQUksNEJBQUs7YUFBVDtZQUNFLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztRQUNyQixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLGdDQUFTO2FBQWI7WUFDRSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDekIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSw2QkFBTTthQUFWO1lBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1FBQ3RCLENBQUM7OztPQUFBO0lBRUQsc0JBQUksbUNBQVk7YUFBaEI7WUFDRSxPQUFPLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDNUIsQ0FBQzs7O09BQUE7SUFFRCw2QkFBUyxHQUFUO1FBQ0UsT0FBTyxJQUFJLENBQUMsT0FBTyxLQUFLLFVBQVUsQ0FBQyxPQUFPLENBQUM7SUFDN0MsQ0FBQztJQUVELDRCQUFRLEdBQVIsVUFBUyxTQUFpQjtRQUN4QixJQUFNLE1BQU0sR0FBRyxxQkFBUyxDQUFDLGNBQWMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNuRCxJQUFJLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQztJQUN4QixDQUFDO0lBRUQsMkJBQU8sR0FBUDtRQUNFLElBQUksSUFBSSxDQUFDLFVBQVUsR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO1NBQ25CO0lBQ0gsQ0FBQztJQUVELDhCQUFVLEdBQVY7UUFDRSxJQUFJLElBQUksQ0FBQyxhQUFhLEdBQUcsQ0FBQyxFQUFFO1lBQzFCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztTQUN0QjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNILHNDQUFrQixHQUFsQixVQUFtQixLQUFZO1FBQzdCLElBQUksSUFBSSxDQUFDLE9BQU8sS0FBSyxVQUFVLENBQUMsT0FBTyxFQUFFO1lBQ3ZDLE9BQU87U0FDUjtRQUVELElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxxQkFBUyxDQUFDLFlBQVksRUFBRTtZQUN6QyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxHQUFHLENBQUM7WUFDOUIsT0FBTztTQUNSO1FBRUQsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFJLENBQUMsRUFBRTtZQUN4QixJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxJQUFJLENBQUM7WUFDL0IsT0FBTztTQUNSO1FBRUQsSUFBSSxDQUFDLEtBQUssQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksQ0FBQyxFQUFFO1lBQ3pELElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLElBQUksQ0FBQztTQUNoQztJQUNILENBQUM7SUFFRCx5QkFBSyxHQUFMO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxDQUFDLENBQUM7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxxQkFBUyxDQUFDLFNBQVMsQ0FBQztRQUN0QyxJQUFJLENBQUMsT0FBTyxHQUFHLFVBQVUsQ0FBQyxPQUFPLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxxQkFBUyxDQUFDLFlBQVksQ0FBQztJQUM5QyxDQUFDO0lBQ0gsZ0JBQUM7QUFBRCxDQXhFQSxBQXdFQyxJQUFBO0FBeEVZLDhCQUFTIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgR2FtZVJ1bGVzIH0gZnJvbSBcIi4vR2FtZVJ1bGVzXCI7XG5pbXBvcnQgeyBCb2FyZCB9IGZyb20gXCIuL0JvYXJkXCI7XG5cbi8qKlxuICog0KHQvtGB0YLQvtGP0L3QuNGPINC40LPRgNGLXG4gKi9cbmV4cG9ydCBlbnVtIEdhbWVTdGF0dXMge1xuICBQTEFZSU5HID0gXCJwbGF5aW5nXCIsXG4gIFdJTiA9IFwid2luXCIsXG4gIExPU0UgPSBcImxvc2VcIixcbn1cblxuLyoqXG4gKiDQodC+0YHRgtC+0Y/QvdC40LUg0LjQs9GA0YsgLSDQvtGH0LrQuCwg0YXQvtC00YssINGB0YLQsNGC0YPRgVxuICovXG5leHBvcnQgY2xhc3MgR2FtZVN0YXRlIHtcbiAgcHJpdmF0ZSBfc2NvcmU6IG51bWJlciA9IDA7XG4gIHByaXZhdGUgX21vdmVzTGVmdDogbnVtYmVyID0gR2FtZVJ1bGVzLk1BWF9NT1ZFUztcbiAgcHJpdmF0ZSBfc3RhdHVzOiBHYW1lU3RhdHVzID0gR2FtZVN0YXR1cy5QTEFZSU5HO1xuICBwcml2YXRlIF9zaHVmZmxlc0xlZnQ6IG51bWJlciA9IEdhbWVSdWxlcy5NQVhfU0hVRkZMRVM7XG5cbiAgZ2V0IHNjb3JlKCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3Njb3JlO1xuICB9XG5cbiAgZ2V0IG1vdmVzTGVmdCgpOiBudW1iZXIge1xuICAgIHJldHVybiB0aGlzLl9tb3Zlc0xlZnQ7XG4gIH1cblxuICBnZXQgc3RhdHVzKCk6IEdhbWVTdGF0dXMge1xuICAgIHJldHVybiB0aGlzLl9zdGF0dXM7XG4gIH1cblxuICBnZXQgc2h1ZmZsZXNMZWZ0KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIHRoaXMuX3NodWZmbGVzTGVmdDtcbiAgfVxuXG4gIGlzUGxheWluZygpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5fc3RhdHVzID09PSBHYW1lU3RhdHVzLlBMQVlJTkc7XG4gIH1cblxuICBhZGRTY29yZShncm91cFNpemU6IG51bWJlcik6IHZvaWQge1xuICAgIGNvbnN0IHBvaW50cyA9IEdhbWVSdWxlcy5jYWxjdWxhdGVTY29yZShncm91cFNpemUpO1xuICAgIHRoaXMuX3Njb3JlICs9IHBvaW50cztcbiAgfVxuXG4gIHVzZU1vdmUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX21vdmVzTGVmdCA+IDApIHtcbiAgICAgIHRoaXMuX21vdmVzTGVmdC0tO1xuICAgIH1cbiAgfVxuXG4gIHVzZVNodWZmbGUoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3NodWZmbGVzTGVmdCA+IDApIHtcbiAgICAgIHRoaXMuX3NodWZmbGVzTGVmdC0tO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDQn9GA0L7QstC10YDQuNGC0Ywg0YPRgdC70L7QstC40Y8g0L7QutC+0L3Rh9Cw0L3QuNGPINC40LPRgNGLXG4gICAqL1xuICBjaGVja0VuZENvbmRpdGlvbnMoYm9hcmQ6IEJvYXJkKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuX3N0YXR1cyAhPT0gR2FtZVN0YXR1cy5QTEFZSU5HKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3Njb3JlID49IEdhbWVSdWxlcy5UQVJHRVRfU0NPUkUpIHtcbiAgICAgIHRoaXMuX3N0YXR1cyA9IEdhbWVTdGF0dXMuV0lOO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICh0aGlzLl9tb3Zlc0xlZnQgPD0gMCkge1xuICAgICAgdGhpcy5fc3RhdHVzID0gR2FtZVN0YXR1cy5MT1NFO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghYm9hcmQuaGFzQXZhaWxhYmxlTW92ZXMoKSAmJiB0aGlzLl9zaHVmZmxlc0xlZnQgPD0gMCkge1xuICAgICAgdGhpcy5fc3RhdHVzID0gR2FtZVN0YXR1cy5MT1NFO1xuICAgIH1cbiAgfVxuXG4gIHJlc2V0KCk6IHZvaWQge1xuICAgIHRoaXMuX3Njb3JlID0gMDtcbiAgICB0aGlzLl9tb3Zlc0xlZnQgPSBHYW1lUnVsZXMuTUFYX01PVkVTO1xuICAgIHRoaXMuX3N0YXR1cyA9IEdhbWVTdGF0dXMuUExBWUlORztcbiAgICB0aGlzLl9zaHVmZmxlc0xlZnQgPSBHYW1lUnVsZXMuTUFYX1NIVUZGTEVTO1xuICB9XG59XG4iXX0=