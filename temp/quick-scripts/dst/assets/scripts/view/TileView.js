
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