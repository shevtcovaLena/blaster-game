"use strict";
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