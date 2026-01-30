"use strict";
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