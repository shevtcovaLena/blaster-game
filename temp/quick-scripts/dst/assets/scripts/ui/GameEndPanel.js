
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