"use strict";
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