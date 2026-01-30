"use strict";
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