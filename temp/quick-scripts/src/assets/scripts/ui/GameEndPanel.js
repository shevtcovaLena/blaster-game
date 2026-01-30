"use strict";
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