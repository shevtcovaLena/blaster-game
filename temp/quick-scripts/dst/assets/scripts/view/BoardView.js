
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