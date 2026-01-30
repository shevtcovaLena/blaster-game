
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