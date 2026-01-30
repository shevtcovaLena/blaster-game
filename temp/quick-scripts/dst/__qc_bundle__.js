
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/controllers/GameController');
require('./assets/scripts/core/Board');
require('./assets/scripts/core/GameRules');
require('./assets/scripts/core/GameState');
require('./assets/scripts/core/Tile');
require('./assets/scripts/core/TileColor');
require('./assets/scripts/ui/BusterButton');
require('./assets/scripts/ui/GameEndPanel');
require('./assets/scripts/view/BoardView');
require('./assets/scripts/view/BoosterPanel');
require('./assets/scripts/view/TileView');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/GameEndPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1aa5atl8HNOW5h7eJA0UkbC', 'GameEndPanel');
// scripts/ui/GameEndPanel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameEndType = void 0;
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameEndType;
(function (GameEndType) {
    GameEndType["WIN"] = "win";
    GameEndType["LOSE"] = "lose";
})(GameEndType = exports.GameEndType || (exports.GameEndType = {}));
var GameEndPanel = /** @class */ (function (_super) {
    __extends(GameEndPanel, _super);
    function GameEndPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.resultLabel = null;
        _this.restartButton = null;
        _this.onRestartCallback = null;
        return _this;
    }
    GameEndPanel.prototype.onLoad = function () {
        this.node.opacity = 0;
        this.node.active = false;
        this.restartButton.node.on("click", this.onRestartClicked, this);
    };
    GameEndPanel.prototype.show = function (type, onRestart) {
        this.onRestartCallback = onRestart;
        this.node.active = true;
        if (type === GameEndType.WIN) {
            this.resultLabel.string = "ТЫ ВЫИГРАЛ!\n🎉";
        }
        else {
            this.resultLabel.string = "ПРОИГРЫШ";
        }
        this.playShowAnimation();
    };
    GameEndPanel.prototype.hide = function () {
        this.node.active = false;
        this.node.opacity = 0;
    };
    GameEndPanel.prototype.playShowAnimation = function () {
        this.resultLabel.node.scale = 0.5;
        this.resultLabel.node.opacity = 0;
        this.restartButton.node.scale = 0.8;
        this.restartButton.node.opacity = 0;
        this.node.opacity = 255;
        cc.tween(this.resultLabel.node)
            .to(0.4, { scale: 1.0, opacity: 255 }, { easing: "backOut" })
            .start();
        cc.tween(this.restartButton.node)
            .delay(0.2)
            .to(0.3, { scale: 1.0, opacity: 255 }, { easing: "backOut" })
            .start();
    };
    GameEndPanel.prototype.onRestartClicked = function () {
        var _this = this;
        cc.tween(this.node)
            .to(0.2, { opacity: 0 })
            .call(function () {
            _this.hide();
            if (_this.onRestartCallback) {
                _this.onRestartCallback();
            }
        })
            .start();
    };
    __decorate([
        property(cc.Label)
    ], GameEndPanel.prototype, "resultLabel", void 0);
    __decorate([
        property(cc.Button)
    ], GameEndPanel.prototype, "restartButton", void 0);
    GameEndPanel = __decorate([
        ccclass
    ], GameEndPanel);
    return GameEndPanel;
}(cc.Component));
exports.default = GameEndPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlcXEdhbWVFbmRQYW5lbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFFNUMsSUFBWSxXQUdYO0FBSEQsV0FBWSxXQUFXO0lBQ3JCLDBCQUFXLENBQUE7SUFDWCw0QkFBYSxDQUFBO0FBQ2YsQ0FBQyxFQUhXLFdBQVcsR0FBWCxtQkFBVyxLQUFYLG1CQUFXLFFBR3RCO0FBR0Q7SUFBMEMsZ0NBQVk7SUFBdEQ7UUFBQSxxRUE4REM7UUE1REMsaUJBQVcsR0FBYSxJQUFJLENBQUM7UUFHN0IsbUJBQWEsR0FBYyxJQUFJLENBQUM7UUFFeEIsdUJBQWlCLEdBQWUsSUFBSSxDQUFDOztJQXVEL0MsQ0FBQztJQXJEQyw2QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3RCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUV6QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsQ0FBQztJQUNuRSxDQUFDO0lBRUQsMkJBQUksR0FBSixVQUFLLElBQWlCLEVBQUUsU0FBcUI7UUFDM0MsSUFBSSxDQUFDLGlCQUFpQixHQUFHLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7UUFFeEIsSUFBSSxJQUFJLEtBQUssV0FBVyxDQUFDLEdBQUcsRUFBRTtZQUM1QixJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sR0FBRyxpQkFBaUIsQ0FBQztTQUM3QzthQUFNO1lBQ0wsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLEdBQUcsVUFBVSxDQUFDO1NBQ3RDO1FBRUQsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDM0IsQ0FBQztJQUVELDJCQUFJLEdBQUo7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO0lBQ3hCLENBQUM7SUFFTyx3Q0FBaUIsR0FBekI7UUFDRSxJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ2xDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDbEMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNwQyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxPQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUV4QixFQUFFLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDO2FBQzVCLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQzthQUM1RCxLQUFLLEVBQUUsQ0FBQztRQUVYLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUM7YUFDOUIsS0FBSyxDQUFDLEdBQUcsQ0FBQzthQUNWLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxLQUFLLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUsQ0FBQzthQUM1RCxLQUFLLEVBQUUsQ0FBQztJQUNiLENBQUM7SUFFTyx1Q0FBZ0IsR0FBeEI7UUFBQSxpQkFVQztRQVRDLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQzthQUNoQixFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDO2FBQ3ZCLElBQUksQ0FBQztZQUNKLEtBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztZQUNaLElBQUksS0FBSSxDQUFDLGlCQUFpQixFQUFFO2dCQUMxQixLQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzthQUMxQjtRQUNILENBQUMsQ0FBQzthQUNELEtBQUssRUFBRSxDQUFDO0lBQ2IsQ0FBQztJQTNERDtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDO3FEQUNVO0lBRzdCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7dURBQ1k7SUFMYixZQUFZO1FBRGhDLE9BQU87T0FDYSxZQUFZLENBOERoQztJQUFELG1CQUFDO0NBOURELEFBOERDLENBOUR5QyxFQUFFLENBQUMsU0FBUyxHQThEckQ7a0JBOURvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcblxuZXhwb3J0IGVudW0gR2FtZUVuZFR5cGUge1xuICBXSU4gPSBcIndpblwiLFxuICBMT1NFID0gXCJsb3NlXCIsXG59XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lRW5kUGFuZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHJlc3VsdExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkJ1dHRvbilcbiAgcmVzdGFydEJ1dHRvbjogY2MuQnV0dG9uID0gbnVsbDtcblxuICBwcml2YXRlIG9uUmVzdGFydENhbGxiYWNrOiAoKSA9PiB2b2lkID0gbnVsbDtcblxuICBvbkxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcblxuICAgIHRoaXMucmVzdGFydEJ1dHRvbi5ub2RlLm9uKFwiY2xpY2tcIiwgdGhpcy5vblJlc3RhcnRDbGlja2VkLCB0aGlzKTtcbiAgfVxuXG4gIHNob3codHlwZTogR2FtZUVuZFR5cGUsIG9uUmVzdGFydDogKCkgPT4gdm9pZCk6IHZvaWQge1xuICAgIHRoaXMub25SZXN0YXJ0Q2FsbGJhY2sgPSBvblJlc3RhcnQ7XG4gICAgdGhpcy5ub2RlLmFjdGl2ZSA9IHRydWU7XG5cbiAgICBpZiAodHlwZSA9PT0gR2FtZUVuZFR5cGUuV0lOKSB7XG4gICAgICB0aGlzLnJlc3VsdExhYmVsLnN0cmluZyA9IFwi0KLQqyDQktCr0JjQk9Cg0JDQmyFcXG7wn46JXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVzdWx0TGFiZWwuc3RyaW5nID0gXCLQn9Cg0J7QmNCT0KDQq9CoXCI7XG4gICAgfVxuXG4gICAgdGhpcy5wbGF5U2hvd0FuaW1hdGlvbigpO1xuICB9XG5cbiAgaGlkZSgpOiB2b2lkIHtcbiAgICB0aGlzLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgdGhpcy5ub2RlLm9wYWNpdHkgPSAwO1xuICB9XG5cbiAgcHJpdmF0ZSBwbGF5U2hvd0FuaW1hdGlvbigpOiB2b2lkIHtcbiAgICB0aGlzLnJlc3VsdExhYmVsLm5vZGUuc2NhbGUgPSAwLjU7XG4gICAgdGhpcy5yZXN1bHRMYWJlbC5ub2RlLm9wYWNpdHkgPSAwO1xuICAgIHRoaXMucmVzdGFydEJ1dHRvbi5ub2RlLnNjYWxlID0gMC44O1xuICAgIHRoaXMucmVzdGFydEJ1dHRvbi5ub2RlLm9wYWNpdHkgPSAwO1xuICAgIHRoaXMubm9kZS5vcGFjaXR5ID0gMjU1O1xuXG4gICAgY2MudHdlZW4odGhpcy5yZXN1bHRMYWJlbC5ub2RlKVxuICAgICAgLnRvKDAuNCwgeyBzY2FsZTogMS4wLCBvcGFjaXR5OiAyNTUgfSwgeyBlYXNpbmc6IFwiYmFja091dFwiIH0pXG4gICAgICAuc3RhcnQoKTtcblxuICAgIGNjLnR3ZWVuKHRoaXMucmVzdGFydEJ1dHRvbi5ub2RlKVxuICAgICAgLmRlbGF5KDAuMilcbiAgICAgIC50bygwLjMsIHsgc2NhbGU6IDEuMCwgb3BhY2l0eTogMjU1IH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KVxuICAgICAgLnN0YXJ0KCk7XG4gIH1cblxuICBwcml2YXRlIG9uUmVzdGFydENsaWNrZWQoKTogdm9pZCB7XG4gICAgY2MudHdlZW4odGhpcy5ub2RlKVxuICAgICAgLnRvKDAuMiwgeyBvcGFjaXR5OiAwIH0pXG4gICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgIHRoaXMuaGlkZSgpO1xuICAgICAgICBpZiAodGhpcy5vblJlc3RhcnRDYWxsYmFjaykge1xuICAgICAgICAgIHRoaXMub25SZXN0YXJ0Q2FsbGJhY2soKTtcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICAgIC5zdGFydCgpO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/view/TileView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '13eeeq9xZFIeqoyiMv1hf4p', 'TileView');
// scripts/view/TileView.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Tile_1 = require("../core/Tile");
var TileColor_1 = require("../core/TileColor");
/**
 * Визуальный компонент тайла
 */
var TileView = /** @class */ (function (_super) {
    __extends(TileView, _super);
    function TileView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.sprite = null;
        _this.tileTextures = [];
        _this.superTileTextures = [];
        _this.tile = null;
        return _this;
    }
    TileView.prototype.setTile = function (tile) {
        this.tile = tile;
        this.updateVisual();
    };
    TileView.prototype.getTile = function () {
        return this.tile;
    };
    TileView.prototype.updateVisual = function () {
        var _a, _b;
        if (!this.tile || !this.sprite)
            return;
        if (this.tile.isSuper()) {
            this.setSuperTileVisual();
            return;
        }
        var colorIndexMap = (_a = {},
            _a[TileColor_1.TileColor.RED] = 0,
            _a[TileColor_1.TileColor.BLUE] = 1,
            _a[TileColor_1.TileColor.GREEN] = 2,
            _a[TileColor_1.TileColor.YELLOW] = 3,
            _a[TileColor_1.TileColor.PURPLE] = 4,
            _a);
        var index = colorIndexMap[this.tile.color];
        if (this.tileTextures.length > 0 && this.tileTextures[index]) {
            this.sprite.spriteFrame = this.tileTextures[index];
            this.sprite.node.color = cc.Color.WHITE;
        }
        else {
            var colorMap = (_b = {},
                _b[TileColor_1.TileColor.RED] = cc.Color.RED,
                _b[TileColor_1.TileColor.BLUE] = cc.Color.BLUE,
                _b[TileColor_1.TileColor.GREEN] = cc.Color.GREEN,
                _b[TileColor_1.TileColor.YELLOW] = cc.Color.YELLOW,
                _b[TileColor_1.TileColor.PURPLE] = new cc.Color(150, 50, 200),
                _b);
            this.sprite.node.color = colorMap[this.tile.color] || cc.Color.WHITE;
        }
    };
    TileView.prototype.setSuperTileVisual = function () {
        var _a;
        var superIndexMap = (_a = {},
            _a[Tile_1.SuperTileType.ROW_BLAST] = 0,
            _a[Tile_1.SuperTileType.COLUMN_BLAST] = 1,
            _a[Tile_1.SuperTileType.BOMB] = 2,
            _a[Tile_1.SuperTileType.MEGA_BLAST] = 3,
            _a);
        var index = superIndexMap[this.tile.superType];
        if (this.superTileTextures.length > 0 && this.superTileTextures[index]) {
            this.sprite.spriteFrame = this.superTileTextures[index];
            this.sprite.node.color = cc.Color.WHITE;
        }
        else {
            this.updateVisual();
            this.sprite.node.color = cc.Color.WHITE;
            this.sprite.node.opacity = 255;
            this.addSuperTileEffect();
        }
    };
    TileView.prototype.addSuperTileEffect = function () {
        cc.tween(this.node)
            .repeatForever(cc
            .tween()
            .to(0.5, { scale: 1.1 }, { easing: "sineInOut" })
            .to(0.5, { scale: 1.0 }, { easing: "sineInOut" }))
            .start();
    };
    TileView.prototype.setPosition = function (x, y) {
        this.node.setPosition(x, y);
    };
    TileView.prototype.playDestroyAnimation = function (callback) {
        var _this = this;
        cc.tween(this.node)
            .to(0.2, { scale: 0, opacity: 0 })
            .call(function () {
            _this.node.destroy();
            if (callback)
                callback();
        })
            .start();
    };
    TileView.prototype.playFallAnimation = function (targetX, targetY, duration, callback) {
        cc.tween(this.node)
            .to(duration, { position: cc.v3(targetX, targetY, 0) }, { easing: "bounceOut" })
            .call(function () {
            if (callback)
                callback();
        })
            .start();
    };
    __decorate([
        property(cc.Sprite)
    ], TileView.prototype, "sprite", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], TileView.prototype, "tileTextures", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], TileView.prototype, "superTileTextures", void 0);
    TileView = __decorate([
        ccclass
    ], TileView);
    return TileView;
}(cc.Component));
exports.default = TileView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcVGlsZVZpZXcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMscUNBQW1EO0FBQ25ELCtDQUE4QztBQUU5Qzs7R0FFRztBQUVIO0lBQXNDLDRCQUFZO0lBQWxEO1FBQUEscUVBcUhDO1FBbkhDLFlBQU0sR0FBYyxJQUFJLENBQUM7UUFHekIsa0JBQVksR0FBcUIsRUFBRSxDQUFDO1FBR3BDLHVCQUFpQixHQUFxQixFQUFFLENBQUM7UUFFakMsVUFBSSxHQUFTLElBQUksQ0FBQzs7SUEyRzVCLENBQUM7SUF6R0MsMEJBQU8sR0FBUCxVQUFRLElBQVU7UUFDaEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7UUFDakIsSUFBSSxDQUFDLFlBQVksRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFFRCwwQkFBTyxHQUFQO1FBQ0UsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO0lBQ25CLENBQUM7SUFFTywrQkFBWSxHQUFwQjs7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNO1lBQUUsT0FBTztRQUV2QyxJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxFQUFFLEVBQUU7WUFDdkIsSUFBSSxDQUFDLGtCQUFrQixFQUFFLENBQUM7WUFDMUIsT0FBTztTQUNSO1FBRUQsSUFBTSxhQUFhO1lBQ2pCLEdBQUMscUJBQVMsQ0FBQyxHQUFHLElBQUcsQ0FBQztZQUNsQixHQUFDLHFCQUFTLENBQUMsSUFBSSxJQUFHLENBQUM7WUFDbkIsR0FBQyxxQkFBUyxDQUFDLEtBQUssSUFBRyxDQUFDO1lBQ3BCLEdBQUMscUJBQVMsQ0FBQyxNQUFNLElBQUcsQ0FBQztZQUNyQixHQUFDLHFC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UztJQUdwQztRQURDLFFBQVEsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxXQUFXLENBQUMsQ0FBQzt1REFDYztJQVJ0QixRQUFRO1FBRDVCLE9BQU87T0FDYSxRQUFRLENBcUg1QjtJQUFELGVBQUM7Q0FySEQsQUFxSEMsQ0FySHFDLEVBQUUsQ0FBQyxTQUFTLEdBcUhqRDtrQkFySG9CLFFBQVEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IHsgU3VwZXJUaWxlVHlwZSwgVGlsZSB9IGZyb20gXCIuLi9jb3JlL1RpbGVcIjtcbmltcG9ydCB7IFRpbGVDb2xvciB9IGZyb20gXCIuLi9jb3JlL1RpbGVDb2xvclwiO1xuXG4vKipcbiAqINCS0LjQt9GD0LDQu9GM0L3Ri9C5INC60L7QvNC/0L7QvdC10L3RgiDRgtCw0LnQu9CwXG4gKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUaWxlVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIHNwcml0ZTogY2MuU3ByaXRlID0gbnVsbDtcblxuICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgdGlsZVRleHR1cmVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gIHN1cGVyVGlsZVRleHR1cmVzOiBjYy5TcHJpdGVGcmFtZVtdID0gW107XG5cbiAgcHJpdmF0ZSB0aWxlOiBUaWxlID0gbnVsbDtcblxuICBzZXRUaWxlKHRpbGU6IFRpbGUpOiB2b2lkIHtcbiAgICB0aGlzLnRpbGUgPSB0aWxlO1xuICAgIHRoaXMudXBkYXRlVmlzdWFsKCk7XG4gIH1cblxuICBnZXRUaWxlKCk6IFRpbGUge1xuICAgIHJldHVybiB0aGlzLnRpbGU7XG4gIH1cblxuICBwcml2YXRlIHVwZGF0ZVZpc3VhbCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMudGlsZSB8fCAhdGhpcy5zcHJpdGUpIHJldHVybjtcblxuICAgIGlmICh0aGlzLnRpbGUuaXNTdXBlcigpKSB7XG4gICAgICB0aGlzLnNldFN1cGVyVGlsZVZpc3VhbCgpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNvbG9ySW5kZXhNYXAgPSB7XG4gICAgICBbVGlsZUNvbG9yLlJFRF06IDAsXG4gICAgICBbVGlsZUNvbG9yLkJMVUVdOiAxLFxuICAgICAgW1RpbGVDb2xvci5HUkVFTl06IDIsXG4gICAgICBbVGlsZUNvbG9yLllFTExPV106IDMsXG4gICAgICBbVGlsZUNvbG9yLlBVUlBMRV06IDQsXG4gICAgfTtcblxuICAgIGNvbnN0IGluZGV4ID0gY29sb3JJbmRleE1hcFt0aGlzLnRpbGUuY29sb3JdO1xuXG4gICAgaWYgKHRoaXMudGlsZVRleHR1cmVzLmxlbmd0aCA+IDAgJiYgdGhpcy50aWxlVGV4dHVyZXNbaW5kZXhdKSB7XG4gICAgICB0aGlzLnNwcml0ZS5zcHJpdGVGcmFtZSA9IHRoaXMudGlsZVRleHR1cmVzW2luZGV4XTtcbiAgICAgIHRoaXMuc3ByaXRlLm5vZGUuY29sb3IgPSBjYy5Db2xvci5XSElURTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgY29sb3JNYXAgPSB7XG4gICAgICAgIFtUaWxlQ29sb3IuUkVEXTogY2MuQ29sb3IuUkVELFxuICAgICAgICBbVGlsZUNvbG9yLkJMVUVdOiBjYy5Db2xvci5CTFVFLFxuICAgICAgICBbVGlsZUNvbG9yLkdSRUVOXTogY2MuQ29sb3IuR1JFRU4sXG4gICAgICAgIFtUaWxlQ29sb3IuWUVMTE9XXTogY2MuQ29sb3IuWUVMTE9XLFxuICAgICAgICBbVGlsZUNvbG9yLlBVUlBMRV06IG5ldyBjYy5Db2xvcigxNTAsIDUwLCAyMDApLFxuICAgICAgfTtcbiAgICAgIHRoaXMuc3ByaXRlLm5vZGUuY29sb3IgPSBjb2xvck1hcFt0aGlzLnRpbGUuY29sb3JdIHx8IGNjLkNvbG9yLldISVRFO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgc2V0U3VwZXJUaWxlVmlzdWFsKCk6IHZvaWQge1xuICAgIGNvbnN0IHN1cGVySW5kZXhNYXAgPSB7XG4gICAgICBbU3VwZXJUaWxlVHlwZS5ST1dfQkxBU1RdOiAwLFxuICAgICAgW1N1cGVyVGlsZVR5cGUuQ09MVU1OX0JMQVNUXTogMSxcbiAgICAgIFtTdXBlclRpbGVUeXBlLkJPTUJdOiAyLFxuICAgICAgW1N1cGVyVGlsZVR5cGUuTUVHQV9CTEFTVF06IDMsXG4gICAgfTtcblxuICAgIGNvbnN0IGluZGV4ID0gc3VwZXJJbmRleE1hcFt0aGlzLnRpbGUuc3VwZXJUeXBlXTtcblxuICAgIGlmICh0aGlzLnN1cGVyVGlsZVRleHR1cmVzLmxlbmd0aCA+IDAgJiYgdGhpcy5zdXBlclRpbGVUZXh0dXJlc1tpbmRleF0pIHtcbiAgICAgIHRoaXMuc3ByaXRlLnNwcml0ZUZyYW1lID0gdGhpcy5zdXBlclRpbGVUZXh0dXJlc1tpbmRleF07XG4gICAgICB0aGlzLnNwcml0ZS5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMudXBkYXRlVmlzdWFsKCk7XG4gICAgICB0aGlzLnNwcml0ZS5ub2RlLmNvbG9yID0gY2MuQ29sb3IuV0hJVEU7XG4gICAgICB0aGlzLnNwcml0ZS5ub2RlLm9wYWNpdHkgPSAyNTU7XG4gICAgICB0aGlzLmFkZFN1cGVyVGlsZUVmZmVjdCgpO1xuICAgIH1cbiAgfVxuXG4gIHByaXZhdGUgYWRkU3VwZXJUaWxlRWZmZWN0KCk6IHZvaWQge1xuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgIC5yZXBlYXRGb3JldmVyKFxuICAgICAgICBjY1xuICAgICAgICAgIC50d2VlbigpXG4gICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMS4xIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXG4gICAgICAgICAgLnRvKDAuNSwgeyBzY2FsZTogMS4wIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pLFxuICAgICAgKVxuICAgICAgLnN0YXJ0KCk7XG4gIH1cblxuICBzZXRQb3NpdGlvbih4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWQge1xuICAgIHRoaXMubm9kZS5zZXRQb3NpdGlvbih4LCB5KTtcbiAgfVxuXG4gIHBsYXlEZXN0cm95QW5pbWF0aW9uKGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgIC50bygwLjIsIHsgc2NhbGU6IDAsIG9wYWNpdHk6IDAgfSlcbiAgICAgIC5jYWxsKCgpID0+IHtcbiAgICAgICAgdGhpcy5ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgfSlcbiAgICAgIC5zdGFydCgpO1xuICB9XG5cbiAgcGxheUZhbGxBbmltYXRpb24oXG4gICAgdGFyZ2V0WDogbnVtYmVyLFxuICAgIHRhcmdldFk6IG51bWJlcixcbiAgICBkdXJhdGlvbjogbnVtYmVyLFxuICAgIGNhbGxiYWNrPzogRnVuY3Rpb24sXG4gICk6IHZvaWQge1xuICAgIGNjLnR3ZWVuKHRoaXMubm9kZSlcbiAgICAgIC50byhcbiAgICAgICAgZHVyYXRpb24sXG4gICAgICAgIHsgcG9zaXRpb246IGNjLnYzKHRhcmdldFgsIHRhcmdldFksIDApIH0sXG4gICAgICAgIHsgZWFzaW5nOiBcImJvdW5jZU91dFwiIH0sXG4gICAgICApXG4gICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICAgIH0pXG4gICAgICAuc3RhcnQoKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29yZVxcQm9hcmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0JBQThCO0FBQzlCLHlDQUFvRDtBQUVwRDs7O0dBR0c7QUFDSDtJQUlFLGVBQ2tCLElBQVksRUFDWixJQUFZO1FBRFosU0FBSSxHQUFKLElBQUksQ0FBUTtRQUNaLFNBQUksR0FBSixJQUFJLENBQVE7UUFKdEIsa0JBQWEsR0FBVyxDQUFDLENBQUM7UUFNaEMsSUFBSSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7SUFDakIsQ0FBQztJQUVEOztPQUVHO0lBQ0gsd0JBQVEsR0FBUjtRQUNFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1lBQ2xCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7YUFDL0M7U0FDRjtJQUNILENBQUM7SUFFRDs7T0FFRztJQUNLLGdDQUFnQixHQUF4QixVQUF5QixDQUFTLEVBQUUsQ0FBUztRQUMzQyxJQUFNLFdBQVcsR0FDZixzQkFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLHNCQUFVLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQztRQUM1RCxPQUFPLElBQUksV0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQyxDQUFDO0lBQzNELENBQUM7SUFFRDs7T0FFRztJQUNILHVCQUFPLEdBQVAsVUFBUSxDQUFTLEVBQUUsQ0FBUztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUN0RCxPQUFPLElBQUksQ0FBQztTQUNiO1FBQ0QsT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3pCLENBQUM7SUFFRDs7T0FFRztJQUNILHVCQUFPLEdBQVAsVUFBUSxDQUFTLEVBQUUsQ0FBUyxFQUFFLElBQWlCO1FBQzdDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ3RELElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBQ3ZCLElBQUksSUFBSSxFQUFFO2dCQUNSLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxLQUFLLEdBQUcsQ0FBQyxDQUFDO2FBQ2hCO1NBQ0Y7SUFDSCxDQUFDO0lBRUQ7Ozs7O09BS0c7SUFDSCxrQ0FBa0IsR0FBbEIsVUFBbUIsTUFBYyxFQUFFLE1BQWM7UUFDL0MsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLEVBQUUsTUFBTSxDQUFDLENBQUM7UUFFL0MsSUFBSSxDQUFDLFNBQVMsRUFBRTtZQUNkLE9BQU8sRUFBRSxDQUFDO1NBQ1g7UUFFRCxJQUFNLFdBQVcsR0FBRyxTQUFTLENBQUMsS0FBSyxDQUFDO1FBQ3BDLElBQU0sTUFBTSxHQUFXLEVBQUUsQ0FBQztRQUMxQixJQUFNLE9BQU8sR0FBZ0IsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUN2QyxJQUFNLEtBQUssR0FBVyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBRWxDLE9BQU8sQ0FBQyxHQUFHLENBQUksTUFBTSxTQUFJLE1BQVEsQ0FBQyxDQUFDO1FBRW5DLE9BQU8sS0FBSyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDdkIsSUFBTSxPQUFPLEdBQUcsS0FBSyxDQUFDLEtBQUssRUFBRyxDQUFDO1lBQy9CLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7WUFFckIsSUFBTSxTQUFTLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUVsRSxLQUF1QixVQUFTLEVBQVQsdUJBQVMsRUFBVCx1QkFBUyxFQUFULElBQVMsRUFBRTtnQkFBN0IsSUFBTSxRQUFRLGtCQUFBO2dCQUNqQixJQUFNLEdBQUcsR0FBTSxRQUFRLENBQUMsS0FBSyxTQUFJLFFBQVEsQ0FBQyxLQUFPLENBQUM7Z0JBRWxELElBQUksUUFBUSxDQUFDLEtBQUssS0FBSyxXQUFXLElBQUksQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO29CQUN2RCxPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO29CQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUN0QjthQUNGO1NBQ0Y7UUFFRCxPQUFPLE1BQU0sQ0FBQztJQUNoQixDQUFDO0lBRUQ7O09BRUc7SUFDSyw0QkFBWSxHQUFwQixVQUFxQixDQUFTLEVBQUUsQ0FBUztRQUN2QyxJQUFNLFNBQVMsR0FBVyxFQUFFLENBQUM7UUFDN0IsSUFBTSxVQUFVLEdBQUc7WUFDakIsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO1lBQ04sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDUCxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUNQLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUNQLENBQUM7UUFFRixLQUF1QixVQUFVLEVBQVYseUJBQVUsRUFBVix3QkFBVSxFQUFWLElBQVUsRUFBRTtZQUF4QixJQUFBLHFCQUFRLEVBQVAsRUFBRSxRQUFBLEVBQUUsRUFBRSxRQUFBO1lBQ2hCLElBQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUM7WUFDOUMsSUFBSSxRQUFRLEVBQUU7Z0JBQ1osU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUMxQjtTQUNGO1FBRUQsT0FBTyxTQUFTLENBQUM7SUFDbkIsQ0FBQztJQUVEOzs7T0FHRztJQUNJLGlDQUFpQixHQUF4QjtRQUNFLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFFaEMsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDVCxTQUFTO2lCQUNWO2dCQUVELElBQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7Z0JBRTVDLElBQUksS0FBSyxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQ3JCLE9BQU8sSUFBSSxDQUFDO2lCQUNiO2FBQ0Y7U0FDRjtRQUVELE9BQU8sS0FBSyxDQUFDO0lBQ2YsQ0FBQztJQUVEOztPQUVHO0lBQ0gsK0JBQWUsR0FBZixVQUNFLENBQVMsRUFDVCxDQUFTLEVBQ1QsU0FBeUMsRUFDekMsS0FBZ0I7UUFFaEIsSUFBTSxTQUFTLEdBQUcsSUFBSSxXQUFJLENBQUMsS0FBSyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGFBQWEsRUFBRSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ3pFLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxTQUFTLENBQUMsQ0FBQztRQUM5QixPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQ7O09BRUc7SUFDSCw2QkFBYSxHQUFiLFVBQWMsR0FBVztRQUN2QixJQUFNLEtBQUssR0FBVyxFQUFFLENBQUM7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUUsR0FBRyxDQUFDLENBQUM7WUFDbEMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQ0FBZ0IsR0FBaEIsVUFBaUIsR0FBVztRQUMxQixJQUFNLEtBQUssR0FBVyxFQUFFLENBQUM7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBTSxJQUFJLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbEMsSUFBSSxJQUFJLEVBQUU7Z0JBQ1IsS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQzthQUNsQjtTQUNGO1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQ7O09BRUc7SUFDSCxnQ0FBZ0IsR0FBaEIsVUFBaUIsT0FBZSxFQUFFLE9BQWUsRUFBRSxNQUFjO1FBQy9ELElBQU0sS0FBSyxHQUFXLEVBQUUsQ0FBQztRQUV6QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNsQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDbEMsSUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FDeEIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsT0FBTyxFQUFFLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sRUFBRSxDQUFDLENBQUMsQ0FDcEQsQ0FBQztnQkFFRixJQUFJLFFBQVEsSUFBSSxNQUFNLEVBQUU7b0JBQ3RCLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO29CQUNoQyxJQUFJLElBQUksRUFBRTt3QkFDUixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO3FCQUNsQjtpQkFDRjthQUNGO1NBQ0Y7UUFFRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7T0FFRztJQUNILDJCQUFXLEdBQVg7UUFDRSxJQUFNLEtBQUssR0FBVyxFQUFFLENBQUM7UUFDekIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLElBQU0sSUFBSSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO2dCQUNoQyxJQUFJLElBQUksRUFBRTtvQkFDUixLQUFLLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNsQjthQUNGO1NBQ0Y7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRDs7T0FFRztJQUNILHVCQUFPLEdBQVA7O1FBQ0UsSUFBTSxRQUFRLEdBQVcsRUFBRSxDQUFDO1FBQzVCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDaEMsSUFBSSxJQUFJLEVBQUU7b0JBQ1IsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDckI7YUFDRjtTQUNGO1FBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQzVDLElBQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDOUMsS0FBNkIsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQXRELFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBQSxFQUFFLFFBQVEsQ0FBQyxDQUFDLENBQUMsUUFBQSxDQUErQjtTQUN6RDtRQUVELElBQUksS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNkLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ2xDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsUUFBUSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUMsQ0FBQzthQUN2QztTQUNGO0lBQ0gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsMkJBQVcsR0FBWCxVQUFZLEtBQWE7UUFDdkIsS0FBbUIsVUFBSyxFQUFMLGVBQUssRUFBTCxtQkFBSyxFQUFMLElBQUssRUFBRTtZQUFyQixJQUFNLElBQUksY0FBQTtZQUNiLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO1NBQzVDO0lBQ0gsQ0FBQztJQUVEOzs7T0FHRztJQUNILDRCQUFZLEdBQVo7UUFDRSxJQUFJLFlBQVksR0FBRyxDQUFDLENBQUM7UUFFckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7WUFDbEMsSUFBTSxNQUFNLEdBQVcsRUFBRSxDQUFDO1lBRTFCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFNLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUM3QixJQUFJLElBQUksRUFBRTtvQkFDUixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUNuQjthQUNGO1lBRUQsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxFQUFFLEVBQUU7Z0JBQ2xDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO2FBQ3hCO1lBRUQsSUFBSSxXQUFXLEdBQUcsQ0FBQyxDQUFDO1lBQ3BCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNsQyxJQUFJLFdBQVcsR0FBRyxNQUFNLENBQUMsTUFBTSxFQUFFO29CQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7b0JBQ3hDLFdBQVcsRUFBRSxDQUFDO29CQUNkLFlBQVksRUFBRSxDQUFDO2lCQUNoQjtxQkFBTTtvQkFDTCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsSUFBSSxDQUFDLGdCQUFnQixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNoRCxZQUFZLEVBQUUsQ0FBQztpQkFDaEI7YUFDRjtTQUNGO1FBRUQsT0FBTyxZQUFZLENBQUM7SUFDdEIsQ0FBQztJQUNILFlBQUM7QUFBRCxDQXRTQSxBQXNTQyxJQUFBO0FBdFNZLHNCQUFLIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuL1RpbGVcIjtcbmltcG9ydCB7IFRpbGVDb2xvciwgQUxMX0NPTE9SUyB9IGZyb20gXCIuL1RpbGVDb2xvclwiO1xuXG4vKipcbiAqINCc0L7QtNC10LvRjCDQuNCz0YDQvtCy0L7Qs9C+INC/0L7Qu9GPIC0g0LTQstGD0LzQtdGA0L3QsNGPINGB0LXRgtC60LAg0YLQsNC50LvQvtCyXG4gKiDQntGC0LLQtdGH0LDQtdGCINC30LAg0LPQtdC90LXRgNCw0YbQuNGOLCDQv9C+0LjRgdC6INCz0YDRg9C/0L8sINGD0LTQsNC70LXQvdC40LUg0Lgg0LPRgNCw0LLQuNGC0LDRhtC40Y5cbiAqL1xuZXhwb3J0IGNsYXNzIEJvYXJkIHtcbiAgcHJpdmF0ZSBncmlkOiAoVGlsZSB8IG51bGwpW11bXTtcbiAgcHJpdmF0ZSB0aWxlSWRDb3VudGVyOiBudW1iZXIgPSAwO1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBjb2xzOiBudW1iZXIsXG4gICAgcHVibGljIHJlYWRvbmx5IHJvd3M6IG51bWJlcixcbiAgKSB7XG4gICAgdGhpcy5ncmlkID0gW107XG4gIH1cblxuICAvKipcbiAgICog0JPQtdC90LXRgNC40YDRg9C10YIg0YHQu9GD0YfQsNC50L3QvtC1INC/0L7Qu9C1LCDQt9Cw0L/QvtC70L3Rj9GPINCy0YHQtSDRj9GH0LXQudC60Lgg0YLQsNC50LvQsNC80LhcbiAgICovXG4gIGdlbmVyYXRlKCk6IHZvaWQge1xuICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5jb2xzOyB4KyspIHtcbiAgICAgIHRoaXMuZ3JpZFt4XSA9IFtdO1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3M7IHkrKykge1xuICAgICAgICB0aGlzLmdyaWRbeF1beV0gPSB0aGlzLmNyZWF0ZVJhbmRvbVRpbGUoeCwgeSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqINCh0L7Qt9C00LDRkdGCINGC0LDQudC7INGB0LvRg9GH0LDQudC90L7Qs9C+INGG0LLQtdGC0LBcbiAgICovXG4gIHByaXZhdGUgY3JlYXRlUmFuZG9tVGlsZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IFRpbGUge1xuICAgIGNvbnN0IHJhbmRvbUNvbG9yID1cbiAgICAgIEFMTF9DT0xPUlNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogQUxMX0NPTE9SUy5sZW5ndGgpXTtcbiAgICByZXR1cm4gbmV3IFRpbGUocmFuZG9tQ29sb3IsIHgsIHksIHRoaXMudGlsZUlkQ291bnRlcisrKTtcbiAgfVxuXG4gIC8qKlxuICAgKiDQn9C+0LvRg9GH0LjRgtGMINGC0LDQudC7INC/0L4g0LrQvtC+0YDQtNC40L3QsNGC0LDQvFxuICAgKi9cbiAgZ2V0VGlsZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IFRpbGUgfCBudWxsIHtcbiAgICBpZiAoeCA8IDAgfHwgeCA+PSB0aGlzLmNvbHMgfHwgeSA8IDAgfHwgeSA+PSB0aGlzLnJvd3MpIHtcbiAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5ncmlkW3hdW3ldO1xuICB9XG5cbiAgLyoqXG4gICAqINCj0YHRgtCw0L3QvtCy0LjRgtGMINGC0LDQudC7INCyINGP0YfQtdC50LrRg1xuICAgKi9cbiAgc2V0VGlsZSh4OiBudW1iZXIsIHk6IG51bWJlciwgdGlsZTogVGlsZSB8IG51bGwpOiB2b2lkIHtcbiAgICBpZiAoeCA+PSAwICYmIHggPCB0aGlzLmNvbHMgJiYgeSA+PSAwICYmIHkgPCB0aGlzLnJvd3MpIHtcbiAgICAgIHRoaXMuZ3JpZFt4XVt5XSA9IHRpbGU7XG4gICAgICBpZiAodGlsZSkge1xuICAgICAgICB0aWxlLmdyaWRYID0geDtcbiAgICAgICAgdGlsZS5ncmlkWSA9IHk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgLyoqXG4gICAqINCd0LDRhdC+0LTQuNGCINCz0YDRg9C/0L/RgyDRgdCy0Y/Qt9Cw0L3QvdGL0YUg0YLQsNC50LvQvtCyINGC0L7Qs9C+INC20LUg0YbQstC10YLQsCAoQkZTKVxuICAgKiBAcGFyYW0gc3RhcnRYINC60L7QvtGA0LTQuNC90LDRgtCwIFgg0L3QsNGH0LDQu9GM0L3QvtCz0L4g0YLQsNC50LvQsFxuICAgKiBAcGFyYW0gc3RhcnRZINC60L7QvtGA0LTQuNC90LDRgtCwIFkg0L3QsNGH0LDQu9GM0L3QvtCz0L4g0YLQsNC50LvQsFxuICAgKiBAcmV0dXJucyDQvNCw0YHRgdC40LIg0LLRgdC10YUg0YHQstGP0LfQsNC90L3Ri9GFINGC0LDQudC70L7QslxuICAgKi9cbiAgZmluZENvbm5lY3RlZEdyb3VwKHN0YXJ0WDogbnVtYmVyLCBzdGFydFk6IG51bWJlcik6IFRpbGVbXSB7XG4gICAgY29uc3Qgc3RhcnRUaWxlID0gdGhpcy5nZXRUaWxlKHN0YXJ0WCwgc3RhcnRZKTtcblxuICAgIGlmICghc3RhcnRUaWxlKSB7XG4gICAgICByZXR1cm4gW107XG4gICAgfVxuXG4gICAgY29uc3QgdGFyZ2V0Q29sb3IgPSBzdGFydFRpbGUuY29sb3I7XG4gICAgY29uc3QgcmVzdWx0OiBUaWxlW10gPSBbXTtcbiAgICBjb25zdCB2aXNpdGVkOiBTZXQ8c3RyaW5nPiA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBxdWV1ZTogVGlsZVtdID0gW3N0YXJ0VGlsZV07XG5cbiAgICB2aXNpdGVkLmFkZChgJHtzdGFydFh9LCR7c3RhcnRZfWApO1xuXG4gICAgd2hpbGUgKHF1ZXVlLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IGN1cnJlbnQgPSBxdWV1ZS5zaGlmdCgpITtcbiAgICAgIHJlc3VsdC5wdXNoKGN1cnJlbnQpO1xuXG4gICAgICBjb25zdCBuZWlnaGJvcnMgPSB0aGlzLmdldE5laWdoYm9ycyhjdXJyZW50LmdyaWRYLCBjdXJyZW50LmdyaWRZKTtcblxuICAgICAgZm9yIChjb25zdCBuZWlnaGJvciBvZiBuZWlnaGJvcnMpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gYCR7bmVpZ2hib3IuZ3JpZFh9LCR7bmVpZ2hib3IuZ3JpZFl9YDtcblxuICAgICAgICBpZiAobmVpZ2hib3IuY29sb3IgPT09IHRhcmdldENvbG9yICYmICF2aXNpdGVkLmhhcyhrZXkpKSB7XG4gICAgICAgICAgdmlzaXRlZC5hZGQoa2V5KTtcbiAgICAgICAgICBxdWV1ZS5wdXNoKG5laWdoYm9yKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXN1bHQ7XG4gIH1cblxuICAvKipcbiAgICog0J/QvtC70YPRh9C40YLRjCDRgdC+0YHQtdC00LXQuSDRgtCw0LnQu9CwICjQstCy0LXRgNGFLCDQstC90LjQtywg0LLQu9C10LLQviwg0LLQv9GA0LDQstC+KVxuICAgKi9cbiAgcHJpdmF0ZSBnZXROZWlnaGJvcnMoeDogbnVtYmVyLCB5OiBudW1iZXIpOiBUaWxlW10ge1xuICAgIGNvbnN0IG5laWdoYm9yczogVGlsZVtdID0gW107XG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFtcbiAgICAgIFswLCAxXSxcbiAgICAgIFswLCAtMV0sXG4gICAgICBbLTEsIDBdLFxuICAgICAgWzEsIDBdLFxuICAgIF07XG5cbiAgICBmb3IgKGNvbnN0IFtkeCwgZHldIG9mIGRpcmVjdGlvbnMpIHtcbiAgICAgIGNvbnN0IG5laWdoYm9yID0gdGhpcy5nZXRUaWxlKHggKyBkeCwgeSArIGR5KTtcbiAgICAgIGlmIChuZWlnaGJvcikge1xuICAgICAgICBuZWlnaGJvcnMucHVzaChuZWlnaGJvcik7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5laWdoYm9ycztcbiAgfVxuXG4gIC8qKlxuICAgKiDQn9GA0L7QstC10YDQutCwINC90LDQu9C40YfQuNGPINC00L7RgdGC0YPQv9C90YvRhSDRhdC+0LTQvtCyXG4gICAqIEByZXR1cm5zIHRydWUg0LXRgdC70Lgg0LXRgdGC0Ywg0YXQvtGC0Y8g0LHRiyDQvtC00L3QsCDQs9GA0YPQv9C/0LAg0LjQtyAyKyDRgtCw0LnQu9C+0LJcbiAgICovXG4gIHB1YmxpYyBoYXNBdmFpbGFibGVNb3ZlcygpOiBib29sZWFuIHtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sczsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93czsgeSsrKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XG5cbiAgICAgICAgaWYgKCF0aWxlKSB7XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxuICAgICAgICBjb25zdCBncm91cCA9IHRoaXMuZmluZENvbm5lY3RlZEdyb3VwKHgsIHkpO1xuXG4gICAgICAgIGlmIChncm91cC5sZW5ndGggPj0gMikge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgLyoqXG4gICAqINCh0L7Qt9C00LDRgtGMINGB0YPQv9C10YAt0YLQsNC50Lsg0L3QsCDRg9C60LDQt9Cw0L3QvdC+0Lkg0L/QvtC30LjRhtC40LhcbiAgICovXG4gIGNyZWF0ZVN1cGVyVGlsZShcbiAgICB4OiBudW1iZXIsXG4gICAgeTogbnVtYmVyLFxuICAgIHN1cGVyVHlwZTogaW1wb3J0KFwiLi9UaWxlXCIpLlN1cGVyVGlsZVR5cGUsXG4gICAgY29sb3I6IFRpbGVDb2xvcixcbiAgKTogVGlsZSB7XG4gICAgY29uc3Qgc3VwZXJUaWxlID0gbmV3IFRpbGUoY29sb3IsIHgsIHksIHRoaXMudGlsZUlkQ291bnRlcisrLCBzdXBlclR5cGUpO1xuICAgIHRoaXMuc2V0VGlsZSh4LCB5LCBzdXBlclRpbGUpO1xuICAgIHJldHVybiBzdXBlclRpbGU7XG4gIH1cblxuICAvKipcbiAgICog0J/QvtC70YPRh9C40YLRjCDQstGB0LUg0YLQsNC50LvRiyDQsiDRgdGC0YDQvtC60LVcbiAgICovXG4gIGdldFRpbGVzSW5Sb3cocm93OiBudW1iZXIpOiBUaWxlW10ge1xuICAgIGNvbnN0IHRpbGVzOiBUaWxlW10gPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sczsgeCsrKSB7XG4gICAgICBjb25zdCB0aWxlID0gdGhpcy5nZXRUaWxlKHgsIHJvdyk7XG4gICAgICBpZiAodGlsZSkge1xuICAgICAgICB0aWxlcy5wdXNoKHRpbGUpO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGlsZXM7XG4gIH1cblxuICAvKipcbiAgICog0J/QvtC70YPRh9C40YLRjCDQstGB0LUg0YLQsNC50LvRiyDQsiDRgdGC0L7Qu9Cx0YbQtVxuICAgKi9cbiAgZ2V0VGlsZXNJbkNvbHVtbihjb2w6IG51bWJlcik6IFRpbGVbXSB7XG4gICAgY29uc3QgdGlsZXM6IFRpbGVbXSA9IFtdO1xuICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5yb3dzOyB5KyspIHtcbiAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmdldFRpbGUoY29sLCB5KTtcbiAgICAgIGlmICh0aWxlKSB7XG4gICAgICAgIHRpbGVzLnB1c2godGlsZSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aWxlcztcbiAgfVxuXG4gIC8qKlxuICAgKiDQn9C+0LvRg9GH0LjRgtGMINGC0LDQudC70Ysg0LIg0YDQsNC00LjRg9GB0LUg0L7RgiDRgtC+0YfQutC4XG4gICAqL1xuICBnZXRUaWxlc0luUmFkaXVzKGNlbnRlclg6IG51bWJlciwgY2VudGVyWTogbnVtYmVyLCByYWRpdXM6IG51bWJlcik6IFRpbGVbXSB7XG4gICAgY29uc3QgdGlsZXM6IFRpbGVbXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHM7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3M7IHkrKykge1xuICAgICAgICBjb25zdCBkaXN0YW5jZSA9IE1hdGguc3FydChcbiAgICAgICAgICBNYXRoLnBvdyh4IC0gY2VudGVyWCwgMikgKyBNYXRoLnBvdyh5IC0gY2VudGVyWSwgMiksXG4gICAgICAgICk7XG5cbiAgICAgICAgaWYgKGRpc3RhbmNlIDw9IHJhZGl1cykge1xuICAgICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XG4gICAgICAgICAgaWYgKHRpbGUpIHtcbiAgICAgICAgICAgIHRpbGVzLnB1c2godGlsZSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHRpbGVzO1xuICB9XG5cbiAgLyoqXG4gICAqINCf0L7Qu9GD0YfQuNGC0Ywg0LLRgdC1INGC0LDQudC70Ysg0L3QsCDQtNC+0YHQutC1XG4gICAqL1xuICBnZXRBbGxUaWxlcygpOiBUaWxlW10ge1xuICAgIGNvbnN0IHRpbGVzOiBUaWxlW10gPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sczsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93czsgeSsrKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XG4gICAgICAgIGlmICh0aWxlKSB7XG4gICAgICAgICAgdGlsZXMucHVzaCh0aWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdGlsZXM7XG4gIH1cblxuICAvKipcbiAgICog0J/QtdGA0LXQvNC10YjQsNGC0Ywg0LTQvtGB0LrRgyAo0LDQu9Cz0L7RgNC40YLQvCBGaXNoZXItWWF0ZXMpXG4gICAqL1xuICBzaHVmZmxlKCk6IHZvaWQge1xuICAgIGNvbnN0IGFsbFRpbGVzOiBUaWxlW10gPSBbXTtcbiAgICBmb3IgKGxldCB4ID0gMDsgeCA8IHRoaXMuY29sczsgeCsrKSB7XG4gICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IHRoaXMucm93czsgeSsrKSB7XG4gICAgICAgIGNvbnN0IHRpbGUgPSB0aGlzLmdldFRpbGUoeCwgeSk7XG4gICAgICAgIGlmICh0aWxlKSB7XG4gICAgICAgICAgYWxsVGlsZXMucHVzaCh0aWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IGkgPSBhbGxUaWxlcy5sZW5ndGggLSAxOyBpID4gMDsgaS0tKSB7XG4gICAgICBjb25zdCBqID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKGkgKyAxKSk7XG4gICAgICBbYWxsVGlsZXNbaV0sIGFsbFRpbGVzW2pdXSA9IFthbGxUaWxlc1tqXSwgYWxsVGlsZXNbaV1dO1xuICAgIH1cblxuICAgIGxldCBpbmRleCA9IDA7XG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHM7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3M7IHkrKykge1xuICAgICAgICB0aGlzLnNldFRpbGUoeCwgeSwgYWxsVGlsZXNbaW5kZXgrK10pO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDQo9C00LDQu9GP0LXRgiDRgtCw0LnQu9GLINC40Lcg0YHQtdGC0LrQuFxuICAgKi9cbiAgcmVtb3ZlVGlsZXModGlsZXM6IFRpbGVbXSk6IHZvaWQge1xuICAgIGZvciAoY29uc3QgdGlsZSBvZiB0aWxlcykge1xuICAgICAgdGhpcy5zZXRUaWxlKHRpbGUuZ3JpZFgsIHRpbGUuZ3JpZFksIG51bGwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDQn9GA0LjQvNC10L3Rj9C10YIg0LPRgNCw0LLQuNGC0LDRhtC40Y46INGC0LDQudC70Ysg0L/QsNC00LDRjtGCINCy0L3QuNC3LCDQv9GD0YHRgtC+0YLRiyDQt9Cw0L/QvtC70L3Rj9GO0YLRgdGPINC90L7QstGL0LzQuCDRgdCy0LXRgNGF0YNcbiAgICogQHJldHVybnMg0LrQvtC70LjRh9C10YHRgtCy0L4g0YHQtNCy0LjQvdGD0YLRi9GFL9GB0L7Qt9C00LDQvdC90YvRhSDRgtCw0LnQu9C+0LJcbiAgICovXG4gIGFwcGx5R3Jhdml0eSgpOiBudW1iZXIge1xuICAgIGxldCBjaGFuZ2VzQ291bnQgPSAwO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmNvbHM7IHgrKykge1xuICAgICAgY29uc3QgY29sdW1uOiBUaWxlW10gPSBbXTtcblxuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLnJvd3M7IHkrKykge1xuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy5ncmlkW3hdW3ldO1xuICAgICAgICBpZiAodGlsZSkge1xuICAgICAgICAgIGNvbHVtbi5wdXNoKHRpbGUpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5yb3dzOyB5KyspIHtcbiAgICAgICAgdGhpcy5ncmlkW3hdW3ldID0gbnVsbDtcbiAgICAgIH1cblxuICAgICAgbGV0IGNvbHVtbkluZGV4ID0gMDtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5yb3dzOyB5KyspIHtcbiAgICAgICAgaWYgKGNvbHVtbkluZGV4IDwgY29sdW1uLmxlbmd0aCkge1xuICAgICAgICAgIHRoaXMuc2V0VGlsZSh4LCB5LCBjb2x1bW5bY29sdW1uSW5kZXhdKTtcbiAgICAgICAgICBjb2x1bW5JbmRleCsrO1xuICAgICAgICAgIGNoYW5nZXNDb3VudCsrO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRoaXMuc2V0VGlsZSh4LCB5LCB0aGlzLmNyZWF0ZVJhbmRvbVRpbGUoeCwgeSkpO1xuICAgICAgICAgIGNoYW5nZXNDb3VudCsrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIGNoYW5nZXNDb3VudDtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controllers/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '338a3xaV/9A45ZDJX3iod4J', 'GameController');
// scripts/controllers/GameController.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Board_1 = require("../core/Board");
var GameState_1 = require("../core/GameState");
var GameRules_1 = require("../core/GameRules");
var BoardView_1 = require("../view/BoardView");
var GameEndPanel_1 = require("../ui/GameEndPanel");
var Tile_1 = require("../core/Tile");
/**
 * Главный контроллер игры
 * Связывает модель (Board, GameState) с отображением (BoardView)
 */
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boardView = null;
        _this.scoreLabel = null;
        _this.movesLabel = null;
        _this.gameEndPanelNode = null;
        _this.gameEndPanel = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
        this.board = new Board_1.Board(GameRules_1.GameRules.GRID_COLS, GameRules_1.GameRules.GRID_ROWS);
        this.gameState = new GameState_1.GameState();
        this.board.generate();
        this.boardView.init(this.board, this.onTileClicked.bind(this));
        this.updateUI();
    };
    GameController.prototype.start = function () {
        if (this.gameEndPanelNode) {
            this.gameEndPanel = this.gameEndPanelNode.getComponent(GameEndPanel_1.default);
        }
    };
    /**
     * Обработчик клика по тайлу
     */
    GameController.prototype.onTileClicked = function (x, y) {
        var _this = this;
        if (!this.gameState.isPlaying()) {
            return;
        }
        var clickedTile = this.board.getTile(x, y);
        if (!clickedTile)
            return;
        if (clickedTile.isSuper()) {
            this.activateSuperTile(clickedTile);
            return;
        }
        var group = this.board.findConnectedGroup(x, y);
        if (!GameRules_1.GameRules.isValidGroup(group.length)) {
            return;
        }
        var shouldCreateSuper = GameRules_1.GameRules.shouldCreateSuperTile(group.length);
        var superType = GameRules_1.GameRules.getSuperTileType(group.length);
        var clickColor = clickedTile.color;
        var clickX = x;
        var clickY = y;
        this.boardView.animateRemoval(group, function () {
            _this.board.removeTiles(group);
            if (shouldCreateSuper && superType !== Tile_1.SuperTileType.NONE) {
                var superTile = _this.board.createSuperTile(clickX, clickY, superType, clickColor);
                _this.boardView.createSuperTileWithAppearAnimation(superTile);
            }
            _this.scheduleOnce(function () {
                var oldPositions = _this.saveOldPositions();
                _this.board.applyGravity();
                _this.boardView.animateGravityWithPositions(oldPositions, function () {
                    _this.gameState.addScore(group.length);
                    _this.gameState.useMove();
                    _this.gameState.checkEndConditions(_this.board);
                    _this.updateUI();
                    _this.checkShuffleOrGameEnd();
                });
            }, 0.3);
        });
    };
    /**
     * Активировать эффект супер-тайла с цепной реакцией
     */
    GameController.prototype.activateSuperTile = function (superTile) {
        var _this = this;
        var tilesToRemove = this.getTilesForSuperEffect(superTile);
        if (tilesToRemove.length === 0)
            return;
        var triggeredSuperTiles = tilesToRemove.filter(function (tile) { return tile.isSuper() && tile.id !== superTile.id; });
        this.boardView.animateRemoval(tilesToRemove, function () {
            _this.board.removeTiles(tilesToRemove);
            if (triggeredSuperTiles.length > 0) {
                _this.scheduleOnce(function () {
                    var secondWaveTiles = _this.collectSecondWaveTiles(triggeredSuperTiles);
                    if (secondWaveTiles.length > 0) {
                        _this.boardView.animateRemoval(secondWaveTiles, function () {
                            _this.board.removeTiles(secondWaveTiles);
                            _this.applyGravityAndFinish(tilesToRemove.length + secondWaveTiles.length);
                        });
                    }
                    else {
                        _this.applyGravityAndFinish(tilesToRemove.length);
                    }
                }, 0.1);
            }
            else {
                _this.applyGravityAndFinish(tilesToRemove.length);
            }
        });
    };
    /**
     * Собрать тайлы для второй волны цепной реакции
     */
    GameController.prototype.collectSecondWaveTiles = function (triggeredSuperTiles) {
        var _this = this;
        var secondWaveTiles = new Set();
        triggeredSuperTiles.forEach(function (secondarySuperTile) {
            var secondaryTiles = _this.getTilesForSuperEffect(secondarySuperTile);
            secondaryTiles.forEach(function (tile) {
                var tileOnBoard = _this.board.getTile(tile.gridX, tile.gridY);
                if (tileOnBoard && tileOnBoard.id === tile.id) {
                    secondWaveTiles.add(tileOnBoard);
                }
            });
        });
        return Array.from(secondWaveTiles);
    };
    /**
     * Получить тайлы для удаления в зависимости от типа супер-тайла
     */
    GameController.prototype.getTilesForSuperEffect = function (superTile) {
        var radius = Math.floor(GameRules_1.GameRules.GRID_COLS / 4);
        switch (superTile.superType) {
            case Tile_1.SuperTileType.ROW_BLAST:
                return this.board.getTilesInRow(superTile.gridY);
            case Tile_1.SuperTileType.COLUMN_BLAST:
                return this.board.getTilesInColumn(superTile.gridX);
            case Tile_1.SuperTileType.BOMB:
                return this.board.getTilesInRadius(superTile.gridX, superTile.gridY, radius);
            case Tile_1.SuperTileType.MEGA_BLAST:
                return this.board.getAllTiles();
            default:
                return [];
        }
    };
    /**
     * Применить гравитацию и завершить ход
     */
    GameController.prototype.applyGravityAndFinish = function (totalScore) {
        var _this = this;
        var oldPositions = this.saveOldPositions();
        this.board.applyGravity();
        this.boardView.animateGravityWithPositions(oldPositions, function () {
            _this.gameState.addScore(totalScore);
            _this.gameState.useMove();
            _this.gameState.checkEndConditions(_this.board);
            _this.updateUI();
            _this.checkShuffleOrGameEnd();
        });
    };
    /**
     * Сохранить текущие позиции всех тайлов
     */
    GameController.prototype.saveOldPositions = function () {
        var positions = new Map();
        for (var x = 0; x < this.board.cols; x++) {
            for (var y = 0; y < this.board.rows; y++) {
                var tile = this.board.getTile(x, y);
                if (tile) {
                    positions.set(tile.id, { x: tile.gridX, y: tile.gridY });
                }
            }
        }
        return positions;
    };
    /**
     * Обновить UI (счётчики очков и ходов)
     */
    GameController.prototype.updateUI = function () {
        if (this.scoreLabel) {
            this.scoreLabel.string = this.gameState.score + "/" + GameRules_1.GameRules.TARGET_SCORE;
        }
        if (this.movesLabel) {
            this.movesLabel.string = "" + this.gameState.movesLeft;
        }
    };
    /**
     * Проверка необходимости перемешивания или окончания игры
     */
    GameController.prototype.checkShuffleOrGameEnd = function () {
        var status = this.gameState.status;
        if (status === GameState_1.GameStatus.WIN) {
            this.showGameEndScreen(GameEndPanel_1.GameEndType.WIN);
            return;
        }
        if (status === GameState_1.GameStatus.LOSE) {
            this.showGameEndScreen(GameEndPanel_1.GameEndType.LOSE);
            return;
        }
        if (!this.board.hasAvailableMoves()) {
            if (this.gameState.shufflesLeft > 0) {
                this.performShuffle();
            }
            else {
                this.showGameEndScreen(GameEndPanel_1.GameEndType.LOSE);
            }
        }
    };
    /**
     * Выполнить перемешивание поля
     */
    GameController.prototype.performShuffle = function () {
        var _this = this;
        this.gameState.useShuffle();
        var oldPositions = this.saveOldPositions();
        this.board.shuffle();
        this.boardView.animateGravityWithPositions(oldPositions, function () {
            if (!_this.board.hasAvailableMoves()) {
                _this.checkShuffleOrGameEnd();
            }
        });
    };
    /**
     * Показать экран окончания игры
     */
    GameController.prototype.showGameEndScreen = function (type) {
        var _this = this;
        this.boardView.animateAllTilesRemoval(function () {
            _this.gameEndPanel.show(type, _this.restartGame.bind(_this));
        });
    };
    /**
     * Перезапустить игру
     */
    GameController.prototype.restartGame = function () {
        this.gameState.reset();
        this.board.generate();
        this.boardView.renderBoard();
        this.updateUI();
    };
    __decorate([
        property(BoardView_1.default)
    ], GameController.prototype, "boardView", void 0);
    __decorate([
        property(cc.Label)
    ], GameController.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameController.prototype, "movesLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "gameEndPanelNode", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.default = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29udHJvbGxlcnNcXEdhbWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLHVDQUFzQztBQUN0QywrQ0FBMEQ7QUFDMUQsK0NBQThDO0FBQzlDLCtDQUEwQztBQUMxQyxtREFBK0Q7QUFDL0QscUNBQW1EO0FBRW5EOzs7R0FHRztBQUVIO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBc1JDO1FBcFJDLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBRXpCLGtCQUFZLEdBQWlCLElBQUksQ0FBQzs7SUF5UTVDLENBQUM7SUFyUUMsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBRWpDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNFLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFD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QUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0REFDZTtJQVhkLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FzUmxDO0lBQUQscUJBQUM7Q0F0UkQsQUFzUkMsQ0F0UjJDLEVBQUUsQ0FBQyxTQUFTLEdBc1J2RDtrQkF0Um9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi4vY29yZS9Cb2FyZFwiO1xuaW1wb3J0IHsgR2FtZVN0YXRlLCBHYW1lU3RhdHVzIH0gZnJvbSBcIi4uL2NvcmUvR2FtZVN0YXRlXCI7XG5pbXBvcnQgeyBHYW1lUnVsZXMgfSBmcm9tIFwiLi4vY29yZS9HYW1lUnVsZXNcIjtcbmltcG9ydCBCb2FyZFZpZXcgZnJvbSBcIi4uL3ZpZXcvQm9hcmRWaWV3XCI7XG5pbXBvcnQgR2FtZUVuZFBhbmVsLCB7IEdhbWVFbmRUeXBlIH0gZnJvbSBcIi4uL3VpL0dhbWVFbmRQYW5lbFwiO1xuaW1wb3J0IHsgU3VwZXJUaWxlVHlwZSwgVGlsZSB9IGZyb20gXCIuLi9jb3JlL1RpbGVcIjtcblxuLyoqXG4gKiDQk9C70LDQstC90YvQuSDQutC+0L3RgtGA0L7Qu9C70LXRgCDQuNCz0YDRi1xuICog0KHQstGP0LfRi9Cy0LDQtdGCINC80L7QtNC10LvRjCAoQm9hcmQsIEdhbWVTdGF0ZSkg0YEg0L7RgtC+0LHRgNCw0LbQtdC90LjQtdC8IChCb2FyZFZpZXcpXG4gKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShCb2FyZFZpZXcpXG4gIGJvYXJkVmlldzogQm9hcmRWaWV3ID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIG1vdmVzTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZ2FtZUVuZFBhbmVsTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBnYW1lRW5kUGFuZWw6IEdhbWVFbmRQYW5lbCA9IG51bGw7XG4gIHByaXZhdGUgYm9hcmQ6IEJvYXJkO1xuICBwcml2YXRlIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKEdhbWVSdWxlcy5HUklEX0NPTFMsIEdhbWVSdWxlcy5HUklEX1JPV1MpO1xuICAgIHRoaXMuZ2FtZVN0YXRlID0gbmV3IEdhbWVTdGF0ZSgpO1xuXG4gICAgdGhpcy5ib2FyZC5nZW5lcmF0ZSgpO1xuICAgIHRoaXMuYm9hcmRWaWV3LmluaXQodGhpcy5ib2FyZCwgdGhpcy5vblRpbGVDbGlja2VkLmJpbmQodGhpcykpO1xuICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGlmICh0aGlzLmdhbWVFbmRQYW5lbE5vZGUpIHtcbiAgICAgIHRoaXMuZ2FtZUVuZFBhbmVsID0gdGhpcy5nYW1lRW5kUGFuZWxOb2RlLmdldENvbXBvbmVudChHYW1lRW5kUGFuZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDQntCx0YDQsNCx0L7RgtGH0LjQuiDQutC70LjQutCwINC/0L4g0YLQsNC50LvRg1xuICAgKi9cbiAgcHJpdmF0ZSBvblRpbGVDbGlja2VkKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmdhbWVTdGF0ZS5pc1BsYXlpbmcoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNsaWNrZWRUaWxlID0gdGhpcy5ib2FyZC5nZXRUaWxlKHgsIHkpO1xuICAgIGlmICghY2xpY2tlZFRpbGUpIHJldHVybjtcblxuICAgIGlmIChjbGlja2VkVGlsZS5pc1N1cGVyKCkpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVTdXBlclRpbGUoY2xpY2tlZFRpbGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGdyb3VwID0gdGhpcy5ib2FyZC5maW5kQ29ubmVjdGVkR3JvdXAoeCwgeSk7XG5cbiAgICBpZiAoIUdhbWVSdWxlcy5pc1ZhbGlkR3JvdXAoZ3JvdXAubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3VsZENyZWF0ZVN1cGVyID0gR2FtZVJ1bGVzLnNob3VsZENyZWF0ZVN1cGVyVGlsZShncm91cC5sZW5ndGgpO1xuICAgIGNvbnN0IHN1cGVyVHlwZSA9IEdhbWVSdWxlcy5nZXRTdXBlclRpbGVUeXBlKGdyb3VwLmxlbmd0aCk7XG4gICAgY29uc3QgY2xpY2tDb2xvciA9IGNsaWNrZWRUaWxlLmNvbG9yO1xuICAgIGNvbnN0IGNsaWNrWCA9IHg7XG4gICAgY29uc3QgY2xpY2tZID0geTtcblxuICAgIHRoaXMuYm9hcmRWaWV3LmFuaW1hdGVSZW1vdmFsKGdyb3VwLCAoKSA9PiB7XG4gICAgICB0aGlzLmJvYXJkLnJlbW92ZVRpbGVzKGdyb3VwKTtcblxuICAgICAgaWYgKHNob3VsZENyZWF0ZVN1cGVyICYmIHN1cGVyVHlwZSAhPT0gU3VwZXJUaWxlVHlwZS5OT05FKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVGlsZSA9IHRoaXMuYm9hcmQuY3JlYXRlU3VwZXJUaWxlKFxuICAgICAgICAgIGNsaWNrWCxcbiAgICAgICAgICBjbGlja1ksXG4gICAgICAgICAgc3VwZXJUeXBlLFxuICAgICAgICAgIGNsaWNrQ29sb3IsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYm9hcmRWaWV3LmNyZWF0ZVN1cGVyVGlsZVdpdGhBcHBlYXJBbmltYXRpb24oc3VwZXJUaWxlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICBjb25zdCBvbGRQb3NpdGlvbnMgPSB0aGlzLnNhdmVPbGRQb3NpdGlvbnMoKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hcHBseUdyYXZpdHkoKTtcblxuICAgICAgICB0aGlzLmJvYXJkVmlldy5hbmltYXRlR3Jhdml0eVdpdGhQb3NpdGlvbnMob2xkUG9zaXRpb25zLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5nYW1lU3RhdGUuYWRkU2NvcmUoZ3JvdXAubGVuZ3RoKTtcbiAgICAgICAgICB0aGlzLmdhbWVTdGF0ZS51c2VNb3ZlKCk7XG4gICAgICAgICAgdGhpcy5nYW1lU3RhdGUuY2hlY2tFbmRDb25kaXRpb25zKHRoaXMuYm9hcmQpO1xuICAgICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgICB0aGlzLmNoZWNrU2h1ZmZsZU9yR2FtZUVuZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDAuMyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog0JDQutGC0LjQstC40YDQvtCy0LDRgtGMINGN0YTRhNC10LrRgiDRgdGD0L/QtdGALdGC0LDQudC70LAg0YEg0YbQtdC/0L3QvtC5INGA0LXQsNC60YbQuNC10LlcbiAgICovXG4gIHByaXZhdGUgYWN0aXZhdGVTdXBlclRpbGUoc3VwZXJUaWxlOiBUaWxlKTogdm9pZCB7XG4gICAgY29uc3QgdGlsZXNUb1JlbW92ZSA9IHRoaXMuZ2V0VGlsZXNGb3JTdXBlckVmZmVjdChzdXBlclRpbGUpO1xuXG4gICAgaWYgKHRpbGVzVG9SZW1vdmUubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBjb25zdCB0cmlnZ2VyZWRTdXBlclRpbGVzID0gdGlsZXNUb1JlbW92ZS5maWx0ZXIoXG4gICAgICAodGlsZSkgPT4gdGlsZS5pc1N1cGVyKCkgJiYgdGlsZS5pZCAhPT0gc3VwZXJUaWxlLmlkLFxuICAgICk7XG5cbiAgICB0aGlzLmJvYXJkVmlldy5hbmltYXRlUmVtb3ZhbCh0aWxlc1RvUmVtb3ZlLCAoKSA9PiB7XG4gICAgICB0aGlzLmJvYXJkLnJlbW92ZVRpbGVzKHRpbGVzVG9SZW1vdmUpO1xuXG4gICAgICBpZiAodHJpZ2dlcmVkU3VwZXJUaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBzZWNvbmRXYXZlVGlsZXMgPSB0aGlzLmNvbGxlY3RTZWNvbmRXYXZlVGlsZXMoXG4gICAgICAgICAgICB0cmlnZ2VyZWRTdXBlclRpbGVzLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoc2Vjb25kV2F2ZVRpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRWaWV3LmFuaW1hdGVSZW1vdmFsKHNlY29uZFdhdmVUaWxlcywgKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmJvYXJkLnJlbW92ZVRpbGVzKHNlY29uZFdhdmVUaWxlcyk7XG4gICAgICAgICAgICAgIHRoaXMuYXBwbHlHcmF2aXR5QW5kRmluaXNoKFxuICAgICAgICAgICAgICAgIHRpbGVzVG9SZW1vdmUubGVuZ3RoICsgc2Vjb25kV2F2ZVRpbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwcGx5R3Jhdml0eUFuZEZpbmlzaCh0aWxlc1RvUmVtb3ZlLmxlbmd0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwLjEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hcHBseUdyYXZpdHlBbmRGaW5pc2godGlsZXNUb1JlbW92ZS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqINCh0L7QsdGA0LDRgtGMINGC0LDQudC70Ysg0LTQu9GPINCy0YLQvtGA0L7QuSDQstC+0LvQvdGLINGG0LXQv9C90L7QuSDRgNC10LDQutGG0LjQuFxuICAgKi9cbiAgcHJpdmF0ZSBjb2xsZWN0U2Vjb25kV2F2ZVRpbGVzKHRyaWdnZXJlZFN1cGVyVGlsZXM6IFRpbGVbXSk6IFRpbGVbXSB7XG4gICAgY29uc3Qgc2Vjb25kV2F2ZVRpbGVzID0gbmV3IFNldDxUaWxlPigpO1xuXG4gICAgdHJpZ2dlcmVkU3VwZXJUaWxlcy5mb3JFYWNoKChzZWNvbmRhcnlTdXBlclRpbGU6IFRpbGUpID0+IHtcbiAgICAgIGNvbnN0IHNlY29uZGFyeVRpbGVzID0gdGhpcy5nZXRUaWxlc0ZvclN1cGVyRWZmZWN0KHNlY29uZGFyeVN1cGVyVGlsZSk7XG4gICAgICBzZWNvbmRhcnlUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbGVPbkJvYXJkID0gdGhpcy5ib2FyZC5nZXRUaWxlKHRpbGUuZ3JpZFgsIHRpbGUuZ3JpZFkpO1xuICAgICAgICBpZiAodGlsZU9uQm9hcmQgJiYgdGlsZU9uQm9hcmQuaWQgPT09IHRpbGUuaWQpIHtcbiAgICAgICAgICBzZWNvbmRXYXZlVGlsZXMuYWRkKHRpbGVPbkJvYXJkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShzZWNvbmRXYXZlVGlsZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqINCf0L7Qu9GD0YfQuNGC0Ywg0YLQsNC50LvRiyDQtNC70Y8g0YPQtNCw0LvQtdC90LjRjyDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0YLQuNC/0LAg0YHRg9C/0LXRgC3RgtCw0LnQu9CwXG4gICAqL1xuICBwcml2YXRlIGdldFRpbGVzRm9yU3VwZXJFZmZlY3Qoc3VwZXJUaWxlOiBUaWxlKTogVGlsZVtdIHtcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLmZsb29yKEdhbWVSdWxlcy5HUklEX0NPTFMgLyA0KTtcblxuICAgIHN3aXRjaCAoc3VwZXJUaWxlLnN1cGVyVHlwZSkge1xuICAgICAgY2FzZSBTdXBlclRpbGVUeXBlLlJPV19CTEFTVDpcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0VGlsZXNJblJvdyhzdXBlclRpbGUuZ3JpZFkpO1xuXG4gICAgICBjYXNlIFN1cGVyVGlsZVR5cGUuQ09MVU1OX0JMQVNUOlxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXRUaWxlc0luQ29sdW1uKHN1cGVyVGlsZS5ncmlkWCk7XG5cbiAgICAgIGNhc2UgU3VwZXJUaWxlVHlwZS5CT01COlxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXRUaWxlc0luUmFkaXVzKFxuICAgICAgICAgIHN1cGVyVGlsZS5ncmlkWCxcbiAgICAgICAgICBzdXBlclRpbGUuZ3JpZFksXG4gICAgICAgICAgcmFkaXVzLFxuICAgICAgICApO1xuXG4gICAgICBjYXNlIFN1cGVyVGlsZVR5cGUuTUVHQV9CTEFTVDpcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0QWxsVGlsZXMoKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDQn9GA0LjQvNC10L3QuNGC0Ywg0LPRgNCw0LLQuNGC0LDRhtC40Y4g0Lgg0LfQsNCy0LXRgNGI0LjRgtGMINGF0L7QtFxuICAgKi9cbiAgcHJpdmF0ZSBhcHBseUdyYXZpdHlBbmRGaW5pc2godG90YWxTY29yZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgb2xkUG9zaXRpb25zID0gdGhpcy5zYXZlT2xkUG9zaXRpb25zKCk7XG4gICAgdGhpcy5ib2FyZC5hcHBseUdyYXZpdHkoKTtcblxuICAgIHRoaXMuYm9hcmRWaWV3LmFuaW1hdGVHcmF2aXR5V2l0aFBvc2l0aW9ucyhvbGRQb3NpdGlvbnMsICgpID0+IHtcbiAgICAgIHRoaXMuZ2FtZVN0YXRlLmFkZFNjb3JlKHRvdGFsU2NvcmUpO1xuICAgICAgdGhpcy5nYW1lU3RhdGUudXNlTW92ZSgpO1xuICAgICAgdGhpcy5nYW1lU3RhdGUuY2hlY2tFbmRDb25kaXRpb25zKHRoaXMuYm9hcmQpO1xuICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgdGhpcy5jaGVja1NodWZmbGVPckdhbWVFbmQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDQodC+0YXRgNCw0L3QuNGC0Ywg0YLQtdC60YPRidC40LUg0L/QvtC30LjRhtC40Lgg0LLRgdC10YUg0YLQsNC50LvQvtCyXG4gICAqL1xuICBwcml2YXRlIHNhdmVPbGRQb3NpdGlvbnMoKTogTWFwPG51bWJlciwgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9PiB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gbmV3IE1hcCgpO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvYXJkLmNvbHM7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmJvYXJkLnJvd3M7IHkrKykge1xuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy5ib2FyZC5nZXRUaWxlKHgsIHkpO1xuICAgICAgICBpZiAodGlsZSkge1xuICAgICAgICAgIHBvc2l0aW9ucy5zZXQodGlsZS5pZCwgeyB4OiB0aWxlLmdyaWRYLCB5OiB0aWxlLmdyaWRZIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiDQntCx0L3QvtCy0LjRgtGMIFVJICjRgdGH0ZHRgtGH0LjQutC4INC+0YfQutC+0LIg0Lgg0YXQvtC00L7QsilcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlVUkoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2NvcmVMYWJlbCkge1xuICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGAke3RoaXMuZ2FtZVN0YXRlLnNjb3JlfS8ke0dhbWVSdWxlcy5UQVJHRVRfU0NPUkV9YDtcbiAgICB9XG4gICAgaWYgKHRoaXMubW92ZXNMYWJlbCkge1xuICAgICAgdGhpcy5tb3Zlc0xhYmVsLnN0cmluZyA9IGAke3RoaXMuZ2FtZVN0YXRlLm1vdmVzTGVmdH1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDQn9GA0L7QstC10YDQutCwINC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4INC/0LXRgNC10LzQtdGI0LjQstCw0L3QuNGPINC40LvQuCDQvtC60L7QvdGH0LDQvdC40Y8g0LjQs9GA0YtcbiAgICovXG4gIHByaXZhdGUgY2hlY2tTaHVmZmxlT3JHYW1lRW5kKCk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMuZ2FtZVN0YXRlLnN0YXR1cztcblxuICAgIGlmIChzdGF0dXMgPT09IEdhbWVTdGF0dXMuV0lOKSB7XG4gICAgICB0aGlzLnNob3dHYW1lRW5kU2NyZWVuKEdhbWVFbmRUeXBlLldJTik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gR2FtZVN0YXR1cy5MT1NFKSB7XG4gICAgICB0aGlzLnNob3dHYW1lRW5kU2NyZWVuKEdhbWVFbmRUeXBlLkxPU0UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5ib2FyZC5oYXNBdmFpbGFibGVNb3ZlcygpKSB7XG4gICAgICBpZiAodGhpcy5nYW1lU3RhdGUuc2h1ZmZsZXNMZWZ0ID4gMCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1TaHVmZmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3dHYW1lRW5kU2NyZWVuKEdhbWVFbmRUeXBlLkxPU0UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDQktGL0L/QvtC70L3QuNGC0Ywg0L/QtdGA0LXQvNC10YjQuNCy0LDQvdC40LUg0L/QvtC70Y9cbiAgICovXG4gIHByaXZhdGUgcGVyZm9ybVNodWZmbGUoKTogdm9pZCB7XG4gICAgdGhpcy5nYW1lU3RhdGUudXNlU2h1ZmZsZSgpO1xuXG4gICAgY29uc3Qgb2xkUG9zaXRpb25zID0gdGhpcy5zYXZlT2xkUG9zaXRpb25zKCk7XG4gICAgdGhpcy5ib2FyZC5zaHVmZmxlKCk7XG5cbiAgICB0aGlzLmJvYXJkVmlldy5hbmltYXRlR3Jhdml0eVdpdGhQb3NpdGlvbnMob2xkUG9zaXRpb25zLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuYm9hcmQuaGFzQXZhaWxhYmxlTW92ZXMoKSkge1xuICAgICAgICB0aGlzLmNoZWNrU2h1ZmZsZU9yR2FtZUVuZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqINCf0L7QutCw0LfQsNGC0Ywg0Y3QutGA0LDQvSDQvtC60L7QvdGH0LDQvdC40Y8g0LjQs9GA0YtcbiAgICovXG4gIHByaXZhdGUgc2hvd0dhbWVFbmRTY3JlZW4odHlwZTogR2FtZUVuZFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLmJvYXJkVmlldy5hbmltYXRlQWxsVGlsZXNSZW1vdmFsKCgpID0+IHtcbiAgICAgIHRoaXMuZ2FtZUVuZFBhbmVsLnNob3codHlwZSwgdGhpcy5yZXN0YXJ0R2FtZS5iaW5kKHRoaXMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDQn9C10YDQtdC30LDQv9GD0YHRgtC40YLRjCDQuNCz0YDRg1xuICAgKi9cbiAgcHJpdmF0ZSByZXN0YXJ0R2FtZSgpOiB2b2lkIHtcbiAgICB0aGlzLmdhbWVTdGF0ZS5yZXNldCgpO1xuICAgIHRoaXMuYm9hcmQuZ2VuZXJhdGUoKTtcbiAgICB0aGlzLmJvYXJkVmlldy5yZW5kZXJCb2FyZCgpO1xuICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/view/BoosterPanel.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a263bHBqc1DiIeqkTQriS3e', 'BoosterPanel');
// scripts/view/BoosterPanel.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var BusterButton_1 = require("../ui/BusterButton");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoosterPanel = /** @class */ (function (_super) {
    __extends(BoosterPanel, _super);
    function BoosterPanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boosterButtonPrefab = null;
        _this.boosterContainer = null;
        _this.bombIcon = null;
        _this.teleportIcon = null;
        _this.boosterButtons = new Map();
        return _this;
    }
    BoosterPanel.prototype.onLoad = function () {
        this.createBoosters();
    };
    BoosterPanel.prototype.createBoosters = function () {
        var _this = this;
        var boosters = [
            { type: "bomb", icon: this.bombIcon, count: 3 },
            { type: "teleport", icon: this.teleportIcon, count: 5 },
        ];
        var spacing = 320;
        var totalWidth = (boosters.length - 1) * spacing;
        var startX = -totalWidth / 2;
        boosters.forEach(function (data, index) {
            var btnNode = cc.instantiate(_this.boosterButtonPrefab);
            btnNode.parent = _this.boosterContainer;
            btnNode.x = startX + index * spacing;
            btnNode.y = 0;
            var boosterBtn = btnNode.getComponent(BusterButton_1.default);
            if (!boosterBtn) {
                return;
            }
            boosterBtn.init(data.type, data.icon, data.count);
            _this.boosterButtons.set(data.type, boosterBtn);
            btnNode.on("booster-clicked", _this.onBoosterClicked, _this);
        });
    };
    BoosterPanel.prototype.onBoosterClicked = function (type) {
        var boosterBtn = this.boosterButtons.get(type);
        if (!boosterBtn)
            return;
        var currentCount = parseInt(boosterBtn.countLabel.string);
        if (currentCount <= 0) {
            return;
        }
        boosterBtn.updateCount(currentCount - 1);
    };
    __decorate([
        property(cc.Prefab)
    ], BoosterPanel.prototype, "boosterButtonPrefab", void 0);
    __decorate([
        property(cc.Node)
    ], BoosterPanel.prototype, "boosterContainer", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], BoosterPanel.prototype, "bombIcon", void 0);
    __decorate([
        property(cc.SpriteFrame)
    ], BoosterPanel.prototype, "teleportIcon", void 0);
    BoosterPanel = __decorate([
        ccclass
    ], BoosterPanel);
    return BoosterPanel;
}(cc.Component));
exports.default = BoosterPanel;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcQm9vc3RlclBhbmVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG1EQUErQztBQUV6QyxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEwQyxnQ0FBWTtJQUF0RDtRQUFBLHFFQXlEQztRQXZEQyx5QkFBbUIsR0FBYyxJQUFJLENBQUM7UUFHdEMsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBR2pDLGNBQVEsR0FBbUIsSUFBSSxDQUFDO1FBR2hDLGtCQUFZLEdBQW1CLElBQUksQ0FBQztRQUU1QixvQkFBYyxHQUErQixJQUFJLEdBQUcsRUFBRSxDQUFDOztJQTRDakUsQ0FBQztJQTFDQyw2QkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTyxxQ0FBYyxHQUF0QjtRQUFBLGlCQXlCQztRQXhCQyxJQUFNLFFBQVEsR0FBRztZQUNmLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFFBQVEsRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1lBQy9DLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxJQUFJLEVBQUUsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLEVBQUUsQ0FBQyxFQUFFO1NBQ3hELENBQUM7UUFFRixJQUFNLE9BQU8sR0FBRyxHQUFHLENBQUM7UUFDcEIsSUFBTSxVQUFVLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxHQUFHLE9BQU8sQ0FBQztRQUNuRCxJQUFNLE1BQU0sR0FBRyxDQUFDLFVBQVUsR0FBRyxDQUFDLENBQUM7UUFFL0IsUUFBUSxDQUFDLE9BQU8sQ0FBQyxVQUFDLElBQUksRUFBRSxLQUFLO1lBQzNCLElBQU0sT0FBTyxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsS0FBSSxDQUFDLG1CQUFtQixDQUFDLENBQUM7WUFDekQsT0FBTyxDQUFDLE1BQU0sR0FBRyxLQUFJLENBQUMsZ0JBQWdCLENBQUM7WUFDdkMsT0FBTyxDQUFDLENBQUMsR0FBRyxNQUFNLEdBQUcsS0FBSyxHQUFHLE9BQU8sQ0FBQztZQUNyQyxPQUFPLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUVkLElBQU0sVUFBVSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsc0JBQWEsQ0FBQyxDQUFDO1lBQ3ZELElBQUksQ0FBQyxVQUFVLEVBQUU7Z0JBQ2YsT0FBTzthQUNSO1lBRUQsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ2xELEtBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxJQUFJLEVBQUUsVUFBVSxDQUFDLENBQUM7WUFDL0MsT0FBTyxDQUFDLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxLQUFJLENBQUMsZ0JBQWdCLEVBQUUsS0FBSSxDQUFDLENBQUM7UUFDN0QsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBRU8sdUNBQWdCLEdBQXhCLFVBQXlCLElBQVk7UUFDbkMsSUFBTSxVQUFVLEdBQUcsSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDakQsSUFBSSxDQUFDLFVBQVU7WUFBRSxPQUFPO1FBRXhCLElBQU0sWUFBWSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUksWUFBWSxJQUFJLENBQUMsRUFBRTtZQUNyQixPQUFPO1NBQ1I7UUFFRCxVQUFVLENBQUMsV0FBVyxDQUFDLFlBQVksR0FBRyxDQUFDLENBQUMsQ0FBQztJQUMzQyxDQUFDO0lBdEREO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7NkRBQ2tCO0lBR3RDO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUM7MERBQ2U7SUFHakM7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLFdBQVcsQ0FBQztrREFDTztJQUdoQztRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDO3NEQUNXO0lBWGpCLFlBQVk7UUFEaEMsT0FBTztPQUNhLFlBQVksQ0F5RGhDO0lBQUQsbUJBQUM7Q0F6REQsQUF5REMsQ0F6RHlDLEVBQUUsQ0FBQyxTQUFTLEdBeURyRDtrQkF6RG9CLFlBQVkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQm9vc3RlckJ1dHRvbiBmcm9tIFwiLi4vdWkvQnVzdGVyQnV0dG9uXCI7XG5cbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG5cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBCb29zdGVyUGFuZWwgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICBib29zdGVyQnV0dG9uUHJlZmFiOiBjYy5QcmVmYWIgPSBudWxsO1xuXG4gIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICBib29zdGVyQ29udGFpbmVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuU3ByaXRlRnJhbWUpXG4gIGJvbWJJY29uOiBjYy5TcHJpdGVGcmFtZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLlNwcml0ZUZyYW1lKVxuICB0ZWxlcG9ydEljb246IGNjLlNwcml0ZUZyYW1lID0gbnVsbDtcblxuICBwcml2YXRlIGJvb3N0ZXJCdXR0b25zOiBNYXA8c3RyaW5nLCBCb29zdGVyQnV0dG9uPiA9IG5ldyBNYXAoKTtcblxuICBvbkxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVCb29zdGVycygpO1xuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVCb29zdGVycygpOiB2b2lkIHtcbiAgICBjb25zdCBib29zdGVycyA9IFtcbiAgICAgIHsgdHlwZTogXCJib21iXCIsIGljb246IHRoaXMuYm9tYkljb24sIGNvdW50OiAzIH0sXG4gICAgICB7IHR5cGU6IFwidGVsZXBvcnRcIiwgaWNvbjogdGhpcy50ZWxlcG9ydEljb24sIGNvdW50OiA1IH0sXG4gICAgXTtcblxuICAgIGNvbnN0IHNwYWNpbmcgPSAzMjA7XG4gICAgY29uc3QgdG90YWxXaWR0aCA9IChib29zdGVycy5sZW5ndGggLSAxKSAqIHNwYWNpbmc7XG4gICAgY29uc3Qgc3RhcnRYID0gLXRvdGFsV2lkdGggLyAyO1xuXG4gICAgYm9vc3RlcnMuZm9yRWFjaCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgIGNvbnN0IGJ0bk5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmJvb3N0ZXJCdXR0b25QcmVmYWIpO1xuICAgICAgYnRuTm9kZS5wYXJlbnQgPSB0aGlzLmJvb3N0ZXJDb250YWluZXI7XG4gICAgICBidG5Ob2RlLnggPSBzdGFydFggKyBpbmRleCAqIHNwYWNpbmc7XG4gICAgICBidG5Ob2RlLnkgPSAwO1xuXG4gICAgICBjb25zdCBib29zdGVyQnRuID0gYnRuTm9kZS5nZXRDb21wb25lbnQoQm9vc3RlckJ1dHRvbik7XG4gICAgICBpZiAoIWJvb3N0ZXJCdG4pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBib29zdGVyQnRuLmluaXQoZGF0YS50eXBlLCBkYXRhLmljb24sIGRhdGEuY291bnQpO1xuICAgICAgdGhpcy5ib29zdGVyQnV0dG9ucy5zZXQoZGF0YS50eXBlLCBib29zdGVyQnRuKTtcbiAgICAgIGJ0bk5vZGUub24oXCJib29zdGVyLWNsaWNrZWRcIiwgdGhpcy5vbkJvb3N0ZXJDbGlja2VkLCB0aGlzKTtcbiAgICB9KTtcbiAgfVxuXG4gIHByaXZhdGUgb25Cb29zdGVyQ2xpY2tlZCh0eXBlOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBib29zdGVyQnRuID0gdGhpcy5ib29zdGVyQnV0dG9ucy5nZXQodHlwZSk7XG4gICAgaWYgKCFib29zdGVyQnRuKSByZXR1cm47XG5cbiAgICBjb25zdCBjdXJyZW50Q291bnQgPSBwYXJzZUludChib29zdGVyQnRuLmNvdW50TGFiZWwuc3RyaW5nKTtcbiAgICBpZiAoY3VycmVudENvdW50IDw9IDApIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBib29zdGVyQnRuLnVwZGF0ZUNvdW50KGN1cnJlbnRDb3VudCAtIDEpO1xuICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/ui/BusterButton.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3bafaJQ7BNLIbl5SsemeUHo', 'BusterButton');
// scripts/ui/BusterButton.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var BoosterButton = /** @class */ (function (_super) {
    __extends(BoosterButton, _super);
    function BoosterButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.icon = null;
        _this.countLabel = null;
        _this.boosterType = "";
        return _this;
    }
    BoosterButton.prototype.init = function (type, iconSprite, count) {
        this.boosterType = type;
        this.updateCount(count);
        if (iconSprite) {
            this.icon.spriteFrame = iconSprite;
        }
        this.node.on(cc.Node.EventType.TOUCH_START, this.onClick, this);
    };
    BoosterButton.prototype.onClick = function () {
        this.node.emit("booster-clicked", this.boosterType);
    };
    BoosterButton.prototype.updateCount = function (count) {
        this.countLabel.string = count.toString();
        this.node.opacity = count > 0 ? 255 : 128;
    };
    BoosterButton.prototype.getType = function () {
        return this.boosterType;
    };
    __decorate([
        property(cc.Sprite)
    ], BoosterButton.prototype, "icon", void 0);
    __decorate([
        property(cc.Label)
    ], BoosterButton.prototype, "countLabel", void 0);
    BoosterButton = __decorate([
        ccclass
    ], BoosterButton);
    return BoosterButton;
}(cc.Component));
exports.default = BoosterButton;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdWlcXEJ1c3RlckJ1dHRvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXdCLEVBQUUsQ0FBQyxVQUFVLEVBQW5DLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBa0IsQ0FBQztBQUc1QztJQUEyQyxpQ0FBWTtJQUF2RDtRQUFBLHFFQWdDQztRQTlCQyxVQUFJLEdBQWMsSUFBSSxDQUFDO1FBR3ZCLGdCQUFVLEdBQWEsSUFBSSxDQUFDO1FBRXBCLGlCQUFXLEdBQVcsRUFBRSxDQUFDOztJQXlCbkMsQ0FBQztJQXZCQyw0QkFBSSxHQUFKLFVBQUssSUFBWSxFQUFFLFVBQTBCLEVBQUUsS0FBYTtRQUMxRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQztRQUN4QixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBRXhCLElBQUksVUFBVSxFQUFFO1lBQ2QsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsVUFBVSxDQUFDO1NBQ3BDO1FBRUQsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDbEUsQ0FBQztJQUVPLCtCQUFPLEdBQWY7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELG1DQUFXLEdBQVgsVUFBWSxLQUFhO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUMxQyxJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQztJQUM1QyxDQUFDO0lBRUQsK0JBQU8sR0FBUDtRQUNFLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQztJQUMxQixDQUFDO0lBN0JEO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7K0NBQ0c7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQztxREFDUztJQUxULGFBQWE7UUFEakMsT0FBTztPQUNhLGFBQWEsQ0FnQ2pDO0lBQUQsb0JBQUM7Q0FoQ0QsQUFnQ0MsQ0FoQzBDLEVBQUUsQ0FBQyxTQUFTLEdBZ0N0RDtrQkFoQ29CLGFBQWEiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuXG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQm9vc3RlckJ1dHRvbiBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5TcHJpdGUpXG4gIGljb246IGNjLlNwcml0ZSA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLkxhYmVsKVxuICBjb3VudExhYmVsOiBjYy5MYWJlbCA9IG51bGw7XG5cbiAgcHJpdmF0ZSBib29zdGVyVHlwZTogc3RyaW5nID0gXCJcIjtcblxuICBpbml0KHR5cGU6IHN0cmluZywgaWNvblNwcml0ZTogY2MuU3ByaXRlRnJhbWUsIGNvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmJvb3N0ZXJUeXBlID0gdHlwZTtcbiAgICB0aGlzLnVwZGF0ZUNvdW50KGNvdW50KTtcblxuICAgIGlmIChpY29uU3ByaXRlKSB7XG4gICAgICB0aGlzLmljb24uc3ByaXRlRnJhbWUgPSBpY29uU3ByaXRlO1xuICAgIH1cblxuICAgIHRoaXMubm9kZS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9TVEFSVCwgdGhpcy5vbkNsaWNrLCB0aGlzKTtcbiAgfVxuXG4gIHByaXZhdGUgb25DbGljaygpOiB2b2lkIHtcbiAgICB0aGlzLm5vZGUuZW1pdChcImJvb3N0ZXItY2xpY2tlZFwiLCB0aGlzLmJvb3N0ZXJUeXBlKTtcbiAgfVxuXG4gIHVwZGF0ZUNvdW50KGNvdW50OiBudW1iZXIpOiB2b2lkIHtcbiAgICB0aGlzLmNvdW50TGFiZWwuc3RyaW5nID0gY291bnQudG9TdHJpbmcoKTtcbiAgICB0aGlzLm5vZGUub3BhY2l0eSA9IGNvdW50ID4gMCA/IDI1NSA6IDEyODtcbiAgfVxuXG4gIGdldFR5cGUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5ib29zdGVyVHlwZTtcbiAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/view/BoardView.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '80ca4omctZJbpjXYX/EO3+K', 'BoardView');
// scripts/view/BoardView.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameRules_1 = require("../core/GameRules");
var TileView_1 = require("./TileView");
/**
 * Визуализация игрового поля
 */
var BoardView = /** @class */ (function (_super) {
    __extends(BoardView, _super);
    function BoardView() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.tilePrefab = null;
        _this.fieldBorder = null;
        _this.cellSize = 100;
        _this.spacing = 0;
        _this.board = null;
        _this.tileViews = new Map();
        _this.tilesContainer = null;
        _this.maskNode = null;
        return _this;
    }
    BoardView.prototype.onLoad = function () {
        this.createMaskContainer();
    };
    BoardView.prototype.createMaskContainer = function () {
        if (this.maskNode) {
            return;
        }
        this.maskNode = new cc.Node("MaskContainer");
        this.maskNode.parent = this.node;
        this.maskNode.anchorX = 0.5;
        this.maskNode.anchorY = 1;
        this.maskNode.setPosition(0, -62);
        var mask = this.maskNode.addComponent(cc.Mask);
        mask.type = cc.Mask.Type.RECT;
        this.tilesContainer = new cc.Node("TilesContainer");
        this.tilesContainer.parent = this.maskNode;
        this.tilesContainer.anchorX = 0.5;
        this.tilesContainer.anchorY = 1;
        this.tilesContainer.setPosition(0, 0);
    };
    BoardView.prototype.init = function (board, onTileClick) {
        this.board = board;
        this.onTileClickCallback = onTileClick;
        this.createMaskContainer();
        var totalSize = this.cellSize + this.spacing;
        var fieldWidth = this.board.cols * totalSize;
        var fieldHeight = this.board.rows * totalSize;
        this.node.width = fieldWidth;
        this.node.height = fieldHeight;
        var tileOverhang = 6;
        if (this.maskNode) {
            this.maskNode.width = fieldWidth;
            this.maskNode.height = fieldHeight + tileOverhang;
        }
        this.updateFieldBorderSize();
        this.renderBoard();
    };
    BoardView.prototype.updateFieldBorderSize = function () {
        if (!this.fieldBorder)
            return;
        var fieldSize = this.calculateFieldSize();
        var scale = this.fieldBorder.scale;
        this.fieldBorder.width = fieldSize.width / scale;
        this.fieldBorder.height = fieldSize.height / scale;
    };
    BoardView.prototype.calculateFieldSize = function () {
        var totalSize = this.cellSize + this.spacing;
        var width = this.board.cols * totalSize -
            this.spacing +
            GameRules_1.GameRules.FIELD_PADDING_SIDE * 2;
        var height = this.board.rows * totalSize -
            this.spacing +
            GameRules_1.GameRules.FIELD_PADDING_TOP +
            GameRules_1.GameRules.FIELD_PADDING_BOTTOM;
        return cc.size(width, height);
    };
    BoardView.prototype.renderBoard = function () {
        if (this.tilesContainer) {
            this.tilesContainer.removeAllChildren();
        }
        this.tileViews.clear();
        for (var x = 0; x < this.board.cols; x++) {
            for (var y = 0; y < this.board.rows; y++) {
                var tile = this.board.getTile(x, y);
                if (tile) {
                    this.createTileView(tile);
                }
            }
        }
    };
    BoardView.prototype.createTileView = function (tile) {
        var _this = this;
        var tileNode = cc.instantiate(this.tilePrefab);
        var tileView = tileNode.getComponent(TileView_1.default);
        tileView.setTile(tile);
        var pos = this.gridToWorldPosition(tile.gridX, tile.gridY);
        tileView.setPosition(pos.x, pos.y);
        tileNode.on(cc.Node.EventType.TOUCH_END, function () {
            _this.onTileClicked(tile.gridX, tile.gridY);
        }, this);
        if (this.tilesContainer) {
            this.tilesContainer.addChild(tileNode);
        }
        this.tileViews.set(tile.id, tileView);
        return tileView;
    };
    BoardView.prototype.onTileClicked = function (x, y) {
        if (this.onTileClickCallback) {
            this.onTileClickCallback(x, y);
        }
    };
    BoardView.prototype.gridToWorldPosition = function (gridX, gridY) {
        var totalSize = this.cellSize + this.spacing;
        var offsetX = -(this.board.cols * totalSize) / 2 + this.cellSize / 2;
        var gridHeight = this.board.rows * totalSize;
        var offsetY = -gridHeight / 2 + this.cellSize / 2;
        var extraOffsetY = -gridHeight / 2;
        return cc.v2(gridX * totalSize + offsetX, gridY * totalSize + offsetY + extraOffsetY);
    };
    BoardView.prototype.animateRemoval = function (tiles, callback) {
        var completed = 0;
        var total = tiles.length;
        for (var _i = 0, tiles_1 = tiles; _i < tiles_1.length; _i++) {
            var tile = tiles_1[_i];
            var tileView = this.tileViews.get(tile.id);
            if (tileView) {
                this.tileViews.delete(tile.id);
                tileView.playDestroyAnimation(function () {
                    completed++;
                    if (completed === total && callback) {
                        callback();
                    }
                });
            }
        }
        if (total === 0 && callback) {
            callback();
        }
    };
    BoardView.prototype.animateGravityWithPositions = function (oldPositions, callback) {
        var animations = [];
        for (var x = 0; x < this.board.cols; x++) {
            for (var y = 0; y < this.board.rows; y++) {
                var tile = this.board.getTile(x, y);
                if (tile && tile.isSuper() && !this.tileViews.has(tile.id)) {
                    this.createTileView(tile);
                }
            }
        }
        for (var x = 0; x < this.board.cols; x++) {
            for (var y = 0; y < this.board.rows; y++) {
                var tile = this.board.getTile(x, y);
                if (!tile)
                    continue;
                var oldPos = oldPositions.get(tile.id);
                var tileView = this.tileViews.get(tile.id);
                if (!oldPos && !tileView) {
                    animations.push(this.createNewTileWithAnimation(tile, x, y));
                }
                else if (tileView && oldPos && (oldPos.x !== x || oldPos.y !== y)) {
                    animations.push(this.animateExistingTile(tileView, x, y));
                }
            }
        }
        if (animations.length > 0) {
            Promise.all(animations).then(function () {
                if (callback)
                    callback();
            });
        }
        else {
            if (callback)
                callback();
        }
    };
    BoardView.prototype.createNewTileWithAnimation = function (tile, gridX, gridY) {
        var _this = this;
        return new Promise(function (resolve) {
            var tileView = _this.createTileView(tile);
            var startY = _this.board.rows + (_this.board.rows - gridY) * 0.3;
            var startPos = _this.gridToWorldPosition(gridX, startY);
            var targetPos = _this.gridToWorldPosition(gridX, gridY);
            tileView.node.setPosition(cc.v3(startPos.x, startPos.y, 0));
            tileView.node.opacity = 255;
            var delay = gridX * 0.05;
            var duration = 0.4 + gridY * 0.05;
            cc.tween(tileView.node)
                .delay(delay)
                .to(duration, {
                position: cc.v3(targetPos.x, targetPos.y, 0),
            }, { easing: "bounceOut" })
                .call(function () { return resolve(); })
                .start();
        });
    };
    BoardView.prototype.createSuperTileWithAppearAnimation = function (superTile) {
        var tileView = this.createTileView(superTile);
        tileView.node.scale = 0;
        tileView.node.opacity = 255;
        cc.tween(tileView.node)
            .to(0.3, { scale: 1.2 }, { easing: "backOut" })
            .to(0.1, { scale: 1.0 }, { easing: "sineInOut" })
            .start();
    };
    BoardView.prototype.animateExistingTile = function (tileView, gridX, gridY) {
        var _this = this;
        return new Promise(function (resolve) {
            var targetPos = _this.gridToWorldPosition(gridX, gridY);
            cc.tween(tileView.node)
                .to(0.1, {
                position: cc.v3(targetPos.x, targetPos.y, 0),
            }, { easing: "quadIn" })
                .call(function () { return resolve(); })
                .start();
        });
    };
    BoardView.prototype.animateAllTilesRemoval = function (callback) {
        var _this = this;
        var allTileViews = Array.from(this.tileViews.values());
        if (allTileViews.length === 0) {
            if (callback)
                callback();
            return;
        }
        var completed = 0;
        var total = allTileViews.length;
        allTileViews.forEach(function (tileView, index) {
            var delay = index * 0.01;
            _this.scheduleOnce(function () {
                tileView.playDestroyAnimation(function () {
                    completed++;
                    if (completed === total && callback) {
                        callback();
                    }
                });
            }, delay);
        });
        this.tileViews.clear();
    };
    BoardView.prototype.getTileView = function (tileId) {
        return this.tileViews.get(tileId) || null;
    };
    __decorate([
        property(cc.Prefab)
    ], BoardView.prototype, "tilePrefab", void 0);
    __decorate([
        property(cc.Node)
    ], BoardView.prototype, "fieldBorder", void 0);
    __decorate([
        property(cc.Float)
    ], BoardView.prototype, "cellSize", void 0);
    __decorate([
        property(cc.Float)
    ], BoardView.prototype, "spacing", void 0);
    BoardView = __decorate([
        ccclass
    ], BoardView);
    return BoardView;
}(cc.Component));
exports.default = BoardView;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcdmlld1xcQm9hcmRWaWV3LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBRzVDLCtDQUE4QztBQUM5Qyx1Q0FBa0M7QUFFbEM7O0dBRUc7QUFFSDtJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQXlUQztRQXZUQyxnQkFBVSxHQUFjLElBQUksQ0FBQztRQUc3QixpQkFBVyxHQUFZLElBQUksQ0FBQztRQUc1QixjQUFRLEdBQVcsR0FBRyxDQUFDO1FBR3ZCLGFBQU8sR0FBVyxDQUFDLENBQUM7UUFFWixXQUFLLEdBQVUsSUFBSSxDQUFDO1FBQ3BCLGVBQVMsR0FBMEIsSUFBSSxHQUFHLEVBQUUsQ0FBQztRQUU3QyxvQkFBYyxHQUFZLElBQUksQ0FBQztRQUMvQixjQUFRLEdBQVksSUFBSSxDQUFDOztJQXdTbkMsQ0FBQztJQXRTQywwQkFBTSxHQUFOO1FBQ0UsSUFBSSxDQUFDLG1CQUFtQixFQUFFLENBQUM7SUFDN0IsQ0FBQztJQUVPLHVDQUFtQixHQUEzQjtRQUNFLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixPQUFPO1NBQ1I7UUFFRCxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxlQUFlLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsUUFBUSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ2pDLElBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUM1QixJQUFJLENBQUMsUUFBUSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDMUIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUM7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O2dCQUNILENBQUMsQ0FBQyxDQUFDO1lBQ0wsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ1osQ0FBQyxDQUFDLENBQUM7UUFFSCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFFTywrQkFBVyxHQUFuQixVQUFvQixNQUFjO1FBQ2hDLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxDQUFDO0lBQzVDLENBQUM7SUF0VEQ7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLE1BQU0sQ0FBQztpREFDUztJQUc3QjtRQURDLFFBQVEsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDO2tEQUNVO0lBRzVCO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxLQUFLLENBQUM7K0NBQ0k7SUFHdkI7UUFEQyxRQUFRLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQzs4Q0FDQztJQVhELFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0F5VDdCO0lBQUQsZ0JBQUM7Q0F6VEQsQUF5VEMsQ0F6VHNDLEVBQUUsQ0FBQyxTQUFTLEdBeVRsRDtrQkF6VG9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi4vY29yZS9Cb2FyZFwiO1xuaW1wb3J0IHsgVGlsZSB9IGZyb20gXCIuLi9jb3JlL1RpbGVcIjtcbmltcG9ydCB7IEdhbWVSdWxlcyB9IGZyb20gXCIuLi9jb3JlL0dhbWVSdWxlc1wiO1xuaW1wb3J0IFRpbGVWaWV3IGZyb20gXCIuL1RpbGVWaWV3XCI7XG5cbi8qKlxuICog0JLQuNC30YPQsNC70LjQt9Cw0YbQuNGPINC40LPRgNC+0LLQvtCz0L4g0L/QvtC70Y9cbiAqL1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEJvYXJkVmlldyBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gIHRpbGVQcmVmYWI6IGNjLlByZWZhYiA9IG51bGw7XG5cbiAgQHByb3BlcnR5KGNjLk5vZGUpXG4gIGZpZWxkQm9yZGVyOiBjYy5Ob2RlID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuRmxvYXQpXG4gIGNlbGxTaXplOiBudW1iZXIgPSAxMDA7XG5cbiAgQHByb3BlcnR5KGNjLkZsb2F0KVxuICBzcGFjaW5nOiBudW1iZXIgPSAwO1xuXG4gIHByaXZhdGUgYm9hcmQ6IEJvYXJkID0gbnVsbDtcbiAgcHJpdmF0ZSB0aWxlVmlld3M6IE1hcDxudW1iZXIsIFRpbGVWaWV3PiA9IG5ldyBNYXAoKTtcbiAgcHJpdmF0ZSBvblRpbGVDbGlja0NhbGxiYWNrOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQ7XG4gIHByaXZhdGUgdGlsZXNDb250YWluZXI6IGNjLk5vZGUgPSBudWxsO1xuICBwcml2YXRlIG1hc2tOb2RlOiBjYy5Ob2RlID0gbnVsbDtcblxuICBvbkxvYWQoKTogdm9pZCB7XG4gICAgdGhpcy5jcmVhdGVNYXNrQ29udGFpbmVyKCk7XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU1hc2tDb250YWluZXIoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMubWFza05vZGUpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLm1hc2tOb2RlID0gbmV3IGNjLk5vZGUoXCJNYXNrQ29udGFpbmVyXCIpO1xuICAgIHRoaXMubWFza05vZGUucGFyZW50ID0gdGhpcy5ub2RlO1xuICAgIHRoaXMubWFza05vZGUuYW5jaG9yWCA9IDAuNTtcbiAgICB0aGlzLm1hc2tOb2RlLmFuY2hvclkgPSAxO1xuICAgIHRoaXMubWFza05vZGUuc2V0UG9zaXRpb24oMCwgLTYyKTtcblxuICAgIGNvbnN0IG1hc2sgPSB0aGlzLm1hc2tOb2RlLmFkZENvbXBvbmVudChjYy5NYXNrKTtcbiAgICBtYXNrLnR5cGUgPSBjYy5NYXNrLlR5cGUuUkVDVDtcblxuICAgIHRoaXMudGlsZXNDb250YWluZXIgPSBuZXcgY2MuTm9kZShcIlRpbGVzQ29udGFpbmVyXCIpO1xuICAgIHRoaXMudGlsZXNDb250YWluZXIucGFyZW50ID0gdGhpcy5tYXNrTm9kZTtcbiAgICB0aGlzLnRpbGVzQ29udGFpbmVyLmFuY2hvclggPSAwLjU7XG4gICAgdGhpcy50aWxlc0NvbnRhaW5lci5hbmNob3JZID0gMTtcbiAgICB0aGlzLnRpbGVzQ29udGFpbmVyLnNldFBvc2l0aW9uKDAsIDApO1xuICB9XG5cbiAgaW5pdChib2FyZDogQm9hcmQsIG9uVGlsZUNsaWNrOiAoeDogbnVtYmVyLCB5OiBudW1iZXIpID0+IHZvaWQpOiB2b2lkIHtcbiAgICB0aGlzLmJvYXJkID0gYm9hcmQ7XG4gICAgdGhpcy5vblRpbGVDbGlja0NhbGxiYWNrID0gb25UaWxlQ2xpY2s7XG5cbiAgICB0aGlzLmNyZWF0ZU1hc2tDb250YWluZXIoKTtcblxuICAgIGNvbnN0IHRvdGFsU2l6ZSA9IHRoaXMuY2VsbFNpemUgKyB0aGlzLnNwYWNpbmc7XG4gICAgY29uc3QgZmllbGRXaWR0aCA9IHRoaXMuYm9hcmQuY29scyAqIHRvdGFsU2l6ZTtcbiAgICBjb25zdCBmaWVsZEhlaWdodCA9IHRoaXMuYm9hcmQucm93cyAqIHRvdGFsU2l6ZTtcblxuICAgIHRoaXMubm9kZS53aWR0aCA9IGZpZWxkV2lkdGg7XG4gICAgdGhpcy5ub2RlLmhlaWdodCA9IGZpZWxkSGVpZ2h0O1xuXG4gICAgY29uc3QgdGlsZU92ZXJoYW5nID0gNjtcbiAgICBpZiAodGhpcy5tYXNrTm9kZSkge1xuICAgICAgdGhpcy5tYXNrTm9kZS53aWR0aCA9IGZpZWxkV2lkdGg7XG4gICAgICB0aGlzLm1hc2tOb2RlLmhlaWdodCA9IGZpZWxkSGVpZ2h0ICsgdGlsZU92ZXJoYW5nO1xuICAgIH1cblxuICAgIHRoaXMudXBkYXRlRmllbGRCb3JkZXJTaXplKCk7XG4gICAgdGhpcy5yZW5kZXJCb2FyZCgpO1xuICB9XG5cbiAgcHJpdmF0ZSB1cGRhdGVGaWVsZEJvcmRlclNpemUoKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmZpZWxkQm9yZGVyKSByZXR1cm47XG5cbiAgICBjb25zdCBmaWVsZFNpemUgPSB0aGlzLmNhbGN1bGF0ZUZpZWxkU2l6ZSgpO1xuICAgIGNvbnN0IHNjYWxlID0gdGhpcy5maWVsZEJvcmRlci5zY2FsZTtcbiAgICB0aGlzLmZpZWxkQm9yZGVyLndpZHRoID0gZmllbGRTaXplLndpZHRoIC8gc2NhbGU7XG4gICAgdGhpcy5maWVsZEJvcmRlci5oZWlnaHQgPSBmaWVsZFNpemUuaGVpZ2h0IC8gc2NhbGU7XG4gIH1cblxuICBwcml2YXRlIGNhbGN1bGF0ZUZpZWxkU2l6ZSgpOiBjYy5TaXplIHtcbiAgICBjb25zdCB0b3RhbFNpemUgPSB0aGlzLmNlbGxTaXplICsgdGhpcy5zcGFjaW5nO1xuXG4gICAgY29uc3Qgd2lkdGggPVxuICAgICAgdGhpcy5ib2FyZC5jb2xzICogdG90YWxTaXplIC1cbiAgICAgIHRoaXMuc3BhY2luZyArXG4gICAgICBHYW1lUnVsZXMuRklFTERfUEFERElOR19TSURFICogMjtcblxuICAgIGNvbnN0IGhlaWdodCA9XG4gICAgICB0aGlzLmJvYXJkLnJvd3MgKiB0b3RhbFNpemUgLVxuICAgICAgdGhpcy5zcGFjaW5nICtcbiAgICAgIEdhbWVSdWxlcy5GSUVMRF9QQURESU5HX1RPUCArXG4gICAgICBHYW1lUnVsZXMuRklFTERfUEFERElOR19CT1RUT007XG5cbiAgICByZXR1cm4gY2Muc2l6ZSh3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIHJlbmRlckJvYXJkKCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnRpbGVzQ29udGFpbmVyKSB7XG4gICAgICB0aGlzLnRpbGVzQ29udGFpbmVyLnJlbW92ZUFsbENoaWxkcmVuKCk7XG4gICAgfVxuXG4gICAgdGhpcy50aWxlVmlld3MuY2xlYXIoKTtcblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5ib2FyZC5jb2xzOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ib2FyZC5yb3dzOyB5KyspIHtcbiAgICAgICAgY29uc3QgdGlsZSA9IHRoaXMuYm9hcmQuZ2V0VGlsZSh4LCB5KTtcbiAgICAgICAgaWYgKHRpbGUpIHtcbiAgICAgICAgICB0aGlzLmNyZWF0ZVRpbGVWaWV3KHRpbGUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBjcmVhdGVUaWxlVmlldyh0aWxlOiBUaWxlKTogVGlsZVZpZXcge1xuICAgIGNvbnN0IHRpbGVOb2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy50aWxlUHJlZmFiKTtcbiAgICBjb25zdCB0aWxlVmlldyA9IHRpbGVOb2RlLmdldENvbXBvbmVudChUaWxlVmlldyk7XG5cbiAgICB0aWxlVmlldy5zZXRUaWxlKHRpbGUpO1xuICAgIGNvbnN0IHBvcyA9IHRoaXMuZ3JpZFRvV29ybGRQb3NpdGlvbih0aWxlLmdyaWRYLCB0aWxlLmdyaWRZKTtcbiAgICB0aWxlVmlldy5zZXRQb3NpdGlvbihwb3MueCwgcG9zLnkpO1xuXG4gICAgdGlsZU5vZGUub24oXG4gICAgICBjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsXG4gICAgICAoKSA9PiB7XG4gICAgICAgIHRoaXMub25UaWxlQ2xpY2tlZCh0aWxlLmdyaWRYLCB0aWxlLmdyaWRZKTtcbiAgICAgIH0sXG4gICAgICB0aGlzLFxuICAgICk7XG5cbiAgICBpZiAodGhpcy50aWxlc0NvbnRhaW5lcikge1xuICAgICAgdGhpcy50aWxlc0NvbnRhaW5lci5hZGRDaGlsZCh0aWxlTm9kZSk7XG4gICAgfVxuXG4gICAgdGhpcy50aWxlVmlld3Muc2V0KHRpbGUuaWQsIHRpbGVWaWV3KTtcbiAgICByZXR1cm4gdGlsZVZpZXc7XG4gIH1cblxuICBwcml2YXRlIG9uVGlsZUNsaWNrZWQoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5vblRpbGVDbGlja0NhbGxiYWNrKSB7XG4gICAgICB0aGlzLm9uVGlsZUNsaWNrQ2FsbGJhY2soeCwgeSk7XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBncmlkVG9Xb3JsZFBvc2l0aW9uKGdyaWRYOiBudW1iZXIsIGdyaWRZOiBudW1iZXIpOiBjYy5WZWMyIHtcbiAgICBjb25zdCB0b3RhbFNpemUgPSB0aGlzLmNlbGxTaXplICsgdGhpcy5zcGFjaW5nO1xuICAgIGNvbnN0IG9mZnNldFggPSAtKHRoaXMuYm9hcmQuY29scyAqIHRvdGFsU2l6ZSkgLyAyICsgdGhpcy5jZWxsU2l6ZSAvIDI7XG5cbiAgICBjb25zdCBncmlkSGVpZ2h0ID0gdGhpcy5ib2FyZC5yb3dzICogdG90YWxTaXplO1xuICAgIGNvbnN0IG9mZnNldFkgPSAtZ3JpZEhlaWdodCAvIDIgKyB0aGlzLmNlbGxTaXplIC8gMjtcbiAgICBjb25zdCBleHRyYU9mZnNldFkgPSAtZ3JpZEhlaWdodCAvIDI7XG5cbiAgICByZXR1cm4gY2MudjIoXG4gICAgICBncmlkWCAqIHRvdGFsU2l6ZSArIG9mZnNldFgsXG4gICAgICBncmlkWSAqIHRvdGFsU2l6ZSArIG9mZnNldFkgKyBleHRyYU9mZnNldFksXG4gICAgKTtcbiAgfVxuXG4gIGFuaW1hdGVSZW1vdmFsKHRpbGVzOiBUaWxlW10sIGNhbGxiYWNrOiBGdW5jdGlvbik6IHZvaWQge1xuICAgIGxldCBjb21wbGV0ZWQgPSAwO1xuICAgIGNvbnN0IHRvdGFsID0gdGlsZXMubGVuZ3RoO1xuXG4gICAgZm9yIChjb25zdCB0aWxlIG9mIHRpbGVzKSB7XG4gICAgICBjb25zdCB0aWxlVmlldyA9IHRoaXMudGlsZVZpZXdzLmdldCh0aWxlLmlkKTtcblxuICAgICAgaWYgKHRpbGVWaWV3KSB7XG4gICAgICAgIHRoaXMudGlsZVZpZXdzLmRlbGV0ZSh0aWxlLmlkKTtcblxuICAgICAgICB0aWxlVmlldy5wbGF5RGVzdHJveUFuaW1hdGlvbigoKSA9PiB7XG4gICAgICAgICAgY29tcGxldGVkKys7XG4gICAgICAgICAgaWYgKGNvbXBsZXRlZCA9PT0gdG90YWwgJiYgY2FsbGJhY2spIHtcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodG90YWwgPT09IDAgJiYgY2FsbGJhY2spIHtcbiAgICAgIGNhbGxiYWNrKCk7XG4gICAgfVxuICB9XG5cbiAgYW5pbWF0ZUdyYXZpdHlXaXRoUG9zaXRpb25zKFxuICAgIG9sZFBvc2l0aW9uczogTWFwPG51bWJlciwgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9PixcbiAgICBjYWxsYmFjazogRnVuY3Rpb24sXG4gICk6IHZvaWQge1xuICAgIGNvbnN0IGFuaW1hdGlvbnM6IFByb21pc2U8dm9pZD5bXSA9IFtdO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvYXJkLmNvbHM7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmJvYXJkLnJvd3M7IHkrKykge1xuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy5ib2FyZC5nZXRUaWxlKHgsIHkpO1xuICAgICAgICBpZiAodGlsZSAmJiB0aWxlLmlzU3VwZXIoKSAmJiAhdGhpcy50aWxlVmlld3MuaGFzKHRpbGUuaWQpKSB7XG4gICAgICAgICAgdGhpcy5jcmVhdGVUaWxlVmlldyh0aWxlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAobGV0IHggPSAwOyB4IDwgdGhpcy5ib2FyZC5jb2xzOyB4KyspIHtcbiAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgdGhpcy5ib2FyZC5yb3dzOyB5KyspIHtcbiAgICAgICAgY29uc3QgdGlsZSA9IHRoaXMuYm9hcmQuZ2V0VGlsZSh4LCB5KTtcbiAgICAgICAgaWYgKCF0aWxlKSBjb250aW51ZTtcblxuICAgICAgICBjb25zdCBvbGRQb3MgPSBvbGRQb3NpdGlvbnMuZ2V0KHRpbGUuaWQpO1xuICAgICAgICBjb25zdCB0aWxlVmlldyA9IHRoaXMudGlsZVZpZXdzLmdldCh0aWxlLmlkKTtcblxuICAgICAgICBpZiAoIW9sZFBvcyAmJiAhdGlsZVZpZXcpIHtcbiAgICAgICAgICBhbmltYXRpb25zLnB1c2godGhpcy5jcmVhdGVOZXdUaWxlV2l0aEFuaW1hdGlvbih0aWxlLCB4LCB5KSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGlsZVZpZXcgJiYgb2xkUG9zICYmIChvbGRQb3MueCAhPT0geCB8fCBvbGRQb3MueSAhPT0geSkpIHtcbiAgICAgICAgICBhbmltYXRpb25zLnB1c2godGhpcy5hbmltYXRlRXhpc3RpbmdUaWxlKHRpbGVWaWV3LCB4LCB5KSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAoYW5pbWF0aW9ucy5sZW5ndGggPiAwKSB7XG4gICAgICBQcm9taXNlLmFsbChhbmltYXRpb25zKS50aGVuKCgpID0+IHtcbiAgICAgICAgaWYgKGNhbGxiYWNrKSBjYWxsYmFjaygpO1xuICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGlmIChjYWxsYmFjaykgY2FsbGJhY2soKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGNyZWF0ZU5ld1RpbGVXaXRoQW5pbWF0aW9uKFxuICAgIHRpbGU6IFRpbGUsXG4gICAgZ3JpZFg6IG51bWJlcixcbiAgICBncmlkWTogbnVtYmVyLFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHRpbGVWaWV3ID0gdGhpcy5jcmVhdGVUaWxlVmlldyh0aWxlKTtcblxuICAgICAgY29uc3Qgc3RhcnRZID0gdGhpcy5ib2FyZC5yb3dzICsgKHRoaXMuYm9hcmQucm93cyAtIGdyaWRZKSAqIDAuMztcbiAgICAgIGNvbnN0IHN0YXJ0UG9zID0gdGhpcy5ncmlkVG9Xb3JsZFBvc2l0aW9uKGdyaWRYLCBzdGFydFkpO1xuICAgICAgY29uc3QgdGFyZ2V0UG9zID0gdGhpcy5ncmlkVG9Xb3JsZFBvc2l0aW9uKGdyaWRYLCBncmlkWSk7XG5cbiAgICAgIHRpbGVWaWV3Lm5vZGUuc2V0UG9zaXRpb24oY2MudjMoc3RhcnRQb3MueCwgc3RhcnRQb3MueSwgMCkpO1xuICAgICAgdGlsZVZpZXcubm9kZS5vcGFjaXR5ID0gMjU1O1xuXG4gICAgICBjb25zdCBkZWxheSA9IGdyaWRYICogMC4wNTtcbiAgICAgIGNvbnN0IGR1cmF0aW9uID0gMC40ICsgZ3JpZFkgKiAwLjA1O1xuXG4gICAgICBjYy50d2Vlbih0aWxlVmlldy5ub2RlKVxuICAgICAgICAuZGVsYXkoZGVsYXkpXG4gICAgICAgIC50byhcbiAgICAgICAgICBkdXJhdGlvbixcbiAgICAgICAgICB7XG4gICAgICAgICAgICBwb3NpdGlvbjogY2MudjModGFyZ2V0UG9zLngsIHRhcmdldFBvcy55LCAwKSxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHsgZWFzaW5nOiBcImJvdW5jZU91dFwiIH0sXG4gICAgICAgIClcbiAgICAgICAgLmNhbGwoKCkgPT4gcmVzb2x2ZSgpKVxuICAgICAgICAuc3RhcnQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIGNyZWF0ZVN1cGVyVGlsZVdpdGhBcHBlYXJBbmltYXRpb24oc3VwZXJUaWxlOiBUaWxlKTogdm9pZCB7XG4gICAgY29uc3QgdGlsZVZpZXcgPSB0aGlzLmNyZWF0ZVRpbGVWaWV3KHN1cGVyVGlsZSk7XG5cbiAgICB0aWxlVmlldy5ub2RlLnNjYWxlID0gMDtcbiAgICB0aWxlVmlldy5ub2RlLm9wYWNpdHkgPSAyNTU7XG5cbiAgICBjYy50d2Vlbih0aWxlVmlldy5ub2RlKVxuICAgICAgLnRvKDAuMywgeyBzY2FsZTogMS4yIH0sIHsgZWFzaW5nOiBcImJhY2tPdXRcIiB9KVxuICAgICAgLnRvKDAuMSwgeyBzY2FsZTogMS4wIH0sIHsgZWFzaW5nOiBcInNpbmVJbk91dFwiIH0pXG4gICAgICAuc3RhcnQoKTtcbiAgfVxuXG4gIHByaXZhdGUgYW5pbWF0ZUV4aXN0aW5nVGlsZShcbiAgICB0aWxlVmlldzogVGlsZVZpZXcsXG4gICAgZ3JpZFg6IG51bWJlcixcbiAgICBncmlkWTogbnVtYmVyLFxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcbiAgICAgIGNvbnN0IHRhcmdldFBvcyA9IHRoaXMuZ3JpZFRvV29ybGRQb3NpdGlvbihncmlkWCwgZ3JpZFkpO1xuXG4gICAgICBjYy50d2Vlbih0aWxlVmlldy5ub2RlKVxuICAgICAgICAudG8oXG4gICAgICAgICAgMC4xLFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIHBvc2l0aW9uOiBjYy52Myh0YXJnZXRQb3MueCwgdGFyZ2V0UG9zLnksIDApLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgeyBlYXNpbmc6IFwicXVhZEluXCIgfSxcbiAgICAgICAgKVxuICAgICAgICAuY2FsbCgoKSA9PiByZXNvbHZlKCkpXG4gICAgICAgIC5zdGFydCgpO1xuICAgIH0pO1xuICB9XG5cbiAgYW5pbWF0ZUFsbFRpbGVzUmVtb3ZhbChjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICBjb25zdCBhbGxUaWxlVmlld3MgPSBBcnJheS5mcm9tKHRoaXMudGlsZVZpZXdzLnZhbHVlcygpKTtcblxuICAgIGlmIChhbGxUaWxlVmlld3MubGVuZ3RoID09PSAwKSB7XG4gICAgICBpZiAoY2FsbGJhY2spIGNhbGxiYWNrKCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgbGV0IGNvbXBsZXRlZCA9IDA7XG4gICAgY29uc3QgdG90YWwgPSBhbGxUaWxlVmlld3MubGVuZ3RoO1xuXG4gICAgYWxsVGlsZVZpZXdzLmZvckVhY2goKHRpbGVWaWV3LCBpbmRleCkgPT4ge1xuICAgICAgY29uc3QgZGVsYXkgPSBpbmRleCAqIDAuMDE7XG5cbiAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgdGlsZVZpZXcucGxheURlc3Ryb3lBbmltYXRpb24oKCkgPT4ge1xuICAgICAgICAgIGNvbXBsZXRlZCsrO1xuICAgICAgICAgIGlmIChjb21wbGV0ZWQgPT09IHRvdGFsICYmIGNhbGxiYWNrKSB7XG4gICAgICAgICAgICBjYWxsYmFjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9LCBkZWxheSk7XG4gICAgfSk7XG5cbiAgICB0aGlzLnRpbGVWaWV3cy5jbGVhcigpO1xuICB9XG5cbiAgcHJpdmF0ZSBnZXRUaWxlVmlldyh0aWxlSWQ6IG51bWJlcik6IFRpbGVWaWV3IHwgbnVsbCB7XG4gICAgcmV0dXJuIHRoaXMudGlsZVZpZXdzLmdldCh0aWxlSWQpIHx8IG51bGw7XG4gIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------
