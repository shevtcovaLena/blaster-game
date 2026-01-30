
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