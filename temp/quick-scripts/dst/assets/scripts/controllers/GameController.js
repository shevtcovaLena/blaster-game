
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/controllers/GameController.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '338a3xaV/9A45ZDJX3iod4J', 'GameController');
// scripts/controllers/GameController.ts

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
var Board_1 = require("../core/Board");
var GameState_1 = require("../core/GameState");
var GameRules_1 = require("../core/GameRules");
var BoardView_1 = require("../view/BoardView");
var GameEndPanel_1 = require("../ui/GameEndPanel");
var Tile_1 = require("../core/Tile");
/**
 * Главный контроллер игры
 * Связывает модель (Board, GameState) с отображением (BoardView)
 */
var GameController = /** @class */ (function (_super) {
    __extends(GameController, _super);
    function GameController() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.boardView = null;
        _this.scoreLabel = null;
        _this.movesLabel = null;
        _this.gameEndPanelNode = null;
        _this.gameEndPanel = null;
        return _this;
    }
    GameController.prototype.onLoad = function () {
        this.board = new Board_1.Board(GameRules_1.GameRules.GRID_COLS, GameRules_1.GameRules.GRID_ROWS);
        this.gameState = new GameState_1.GameState();
        this.board.generate();
        this.boardView.init(this.board, this.onTileClicked.bind(this));
        this.updateUI();
    };
    GameController.prototype.start = function () {
        if (this.gameEndPanelNode) {
            this.gameEndPanel = this.gameEndPanelNode.getComponent(GameEndPanel_1.default);
        }
    };
    /**
     * Обработчик клика по тайлу
     */
    GameController.prototype.onTileClicked = function (x, y) {
        var _this = this;
        if (!this.gameState.isPlaying()) {
            return;
        }
        var clickedTile = this.board.getTile(x, y);
        if (!clickedTile)
            return;
        if (clickedTile.isSuper()) {
            this.activateSuperTile(clickedTile);
            return;
        }
        var group = this.board.findConnectedGroup(x, y);
        if (!GameRules_1.GameRules.isValidGroup(group.length)) {
            return;
        }
        var shouldCreateSuper = GameRules_1.GameRules.shouldCreateSuperTile(group.length);
        var superType = GameRules_1.GameRules.getSuperTileType(group.length);
        var clickColor = clickedTile.color;
        var clickX = x;
        var clickY = y;
        this.boardView.animateRemoval(group, function () {
            _this.board.removeTiles(group);
            if (shouldCreateSuper && superType !== Tile_1.SuperTileType.NONE) {
                var superTile = _this.board.createSuperTile(clickX, clickY, superType, clickColor);
                _this.boardView.createSuperTileWithAppearAnimation(superTile);
            }
            _this.scheduleOnce(function () {
                var oldPositions = _this.saveOldPositions();
                _this.board.applyGravity();
                _this.boardView.animateGravityWithPositions(oldPositions, function () {
                    _this.gameState.addScore(group.length);
                    _this.gameState.useMove();
                    _this.gameState.checkEndConditions(_this.board);
                    _this.updateUI();
                    _this.checkShuffleOrGameEnd();
                });
            }, 0.3);
        });
    };
    /**
     * Активировать эффект супер-тайла с цепной реакцией
     */
    GameController.prototype.activateSuperTile = function (superTile) {
        var _this = this;
        var tilesToRemove = this.getTilesForSuperEffect(superTile);
        if (tilesToRemove.length === 0)
            return;
        var triggeredSuperTiles = tilesToRemove.filter(function (tile) { return tile.isSuper() && tile.id !== superTile.id; });
        this.boardView.animateRemoval(tilesToRemove, function () {
            _this.board.removeTiles(tilesToRemove);
            if (triggeredSuperTiles.length > 0) {
                _this.scheduleOnce(function () {
                    var secondWaveTiles = _this.collectSecondWaveTiles(triggeredSuperTiles);
                    if (secondWaveTiles.length > 0) {
                        _this.boardView.animateRemoval(secondWaveTiles, function () {
                            _this.board.removeTiles(secondWaveTiles);
                            _this.applyGravityAndFinish(tilesToRemove.length + secondWaveTiles.length);
                        });
                    }
                    else {
                        _this.applyGravityAndFinish(tilesToRemove.length);
                    }
                }, 0.1);
            }
            else {
                _this.applyGravityAndFinish(tilesToRemove.length);
            }
        });
    };
    /**
     * Собрать тайлы для второй волны цепной реакции
     */
    GameController.prototype.collectSecondWaveTiles = function (triggeredSuperTiles) {
        var _this = this;
        var secondWaveTiles = new Set();
        triggeredSuperTiles.forEach(function (secondarySuperTile) {
            var secondaryTiles = _this.getTilesForSuperEffect(secondarySuperTile);
            secondaryTiles.forEach(function (tile) {
                var tileOnBoard = _this.board.getTile(tile.gridX, tile.gridY);
                if (tileOnBoard && tileOnBoard.id === tile.id) {
                    secondWaveTiles.add(tileOnBoard);
                }
            });
        });
        return Array.from(secondWaveTiles);
    };
    /**
     * Получить тайлы для удаления в зависимости от типа супер-тайла
     */
    GameController.prototype.getTilesForSuperEffect = function (superTile) {
        var radius = Math.floor(GameRules_1.GameRules.GRID_COLS / 4);
        switch (superTile.superType) {
            case Tile_1.SuperTileType.ROW_BLAST:
                return this.board.getTilesInRow(superTile.gridY);
            case Tile_1.SuperTileType.COLUMN_BLAST:
                return this.board.getTilesInColumn(superTile.gridX);
            case Tile_1.SuperTileType.BOMB:
                return this.board.getTilesInRadius(superTile.gridX, superTile.gridY, radius);
            case Tile_1.SuperTileType.MEGA_BLAST:
                return this.board.getAllTiles();
            default:
                return [];
        }
    };
    /**
     * Применить гравитацию и завершить ход
     */
    GameController.prototype.applyGravityAndFinish = function (totalScore) {
        var _this = this;
        var oldPositions = this.saveOldPositions();
        this.board.applyGravity();
        this.boardView.animateGravityWithPositions(oldPositions, function () {
            _this.gameState.addScore(totalScore);
            _this.gameState.useMove();
            _this.gameState.checkEndConditions(_this.board);
            _this.updateUI();
            _this.checkShuffleOrGameEnd();
        });
    };
    /**
     * Сохранить текущие позиции всех тайлов
     */
    GameController.prototype.saveOldPositions = function () {
        var positions = new Map();
        for (var x = 0; x < this.board.cols; x++) {
            for (var y = 0; y < this.board.rows; y++) {
                var tile = this.board.getTile(x, y);
                if (tile) {
                    positions.set(tile.id, { x: tile.gridX, y: tile.gridY });
                }
            }
        }
        return positions;
    };
    /**
     * Обновить UI (счётчики очков и ходов)
     */
    GameController.prototype.updateUI = function () {
        if (this.scoreLabel) {
            this.scoreLabel.string = this.gameState.score + "/" + GameRules_1.GameRules.TARGET_SCORE;
        }
        if (this.movesLabel) {
            this.movesLabel.string = "" + this.gameState.movesLeft;
        }
    };
    /**
     * Проверка необходимости перемешивания или окончания игры
     */
    GameController.prototype.checkShuffleOrGameEnd = function () {
        var status = this.gameState.status;
        if (status === GameState_1.GameStatus.WIN) {
            this.showGameEndScreen(GameEndPanel_1.GameEndType.WIN);
            return;
        }
        if (status === GameState_1.GameStatus.LOSE) {
            this.showGameEndScreen(GameEndPanel_1.GameEndType.LOSE);
            return;
        }
        if (!this.board.hasAvailableMoves()) {
            if (this.gameState.shufflesLeft > 0) {
                this.performShuffle();
            }
            else {
                this.showGameEndScreen(GameEndPanel_1.GameEndType.LOSE);
            }
        }
    };
    /**
     * Выполнить перемешивание поля
     */
    GameController.prototype.performShuffle = function () {
        var _this = this;
        this.gameState.useShuffle();
        var oldPositions = this.saveOldPositions();
        this.board.shuffle();
        this.boardView.animateGravityWithPositions(oldPositions, function () {
            if (!_this.board.hasAvailableMoves()) {
                _this.checkShuffleOrGameEnd();
            }
        });
    };
    /**
     * Показать экран окончания игры
     */
    GameController.prototype.showGameEndScreen = function (type) {
        var _this = this;
        this.boardView.animateAllTilesRemoval(function () {
            _this.gameEndPanel.show(type, _this.restartGame.bind(_this));
        });
    };
    /**
     * Перезапустить игру
     */
    GameController.prototype.restartGame = function () {
        this.gameState.reset();
        this.board.generate();
        this.boardView.renderBoard();
        this.updateUI();
    };
    __decorate([
        property(BoardView_1.default)
    ], GameController.prototype, "boardView", void 0);
    __decorate([
        property(cc.Label)
    ], GameController.prototype, "scoreLabel", void 0);
    __decorate([
        property(cc.Label)
    ], GameController.prototype, "movesLabel", void 0);
    __decorate([
        property(cc.Node)
    ], GameController.prototype, "gameEndPanelNode", void 0);
    GameController = __decorate([
        ccclass
    ], GameController);
    return GameController;
}(cc.Component));
exports.default = GameController;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcY29udHJvbGxlcnNcXEdhbWVDb250cm9sbGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFNLElBQUEsS0FBd0IsRUFBRSxDQUFDLFVBQVUsRUFBbkMsT0FBTyxhQUFBLEVBQUUsUUFBUSxjQUFrQixDQUFDO0FBQzVDLHVDQUFzQztBQUN0QywrQ0FBMEQ7QUFDMUQsK0NBQThDO0FBQzlDLCtDQUEwQztBQUMxQyxtREFBK0Q7QUFDL0QscUNBQW1EO0FBRW5EOzs7R0FHRztBQUVIO0lBQTRDLGtDQUFZO0lBQXhEO1FBQUEscUVBc1JDO1FBcFJDLGVBQVMsR0FBYyxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsZ0JBQVUsR0FBYSxJQUFJLENBQUM7UUFHNUIsc0JBQWdCLEdBQVksSUFBSSxDQUFDO1FBRXpCLGtCQUFZLEdBQWlCLElBQUksQ0FBQzs7SUF5UTVDLENBQUM7SUFyUUMsK0JBQU0sR0FBTjtRQUNFLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxhQUFLLENBQUMscUJBQVMsQ0FBQyxTQUFTLEVBQUUscUJBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUNqRSxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUkscUJBQVMsRUFBRSxDQUFDO1FBRWpDLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQy9ELElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUNsQixDQUFDO0lBRUQsOEJBQUssR0FBTDtRQUNFLElBQUksSUFBSSxDQUFDLGdCQUFnQixFQUFFO1lBQ3pCLElBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSxDQUFD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QUFRLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQzs0REFDZTtJQVhkLGNBQWM7UUFEbEMsT0FBTztPQUNhLGNBQWMsQ0FzUmxDO0lBQUQscUJBQUM7Q0F0UkQsQUFzUkMsQ0F0UjJDLEVBQUUsQ0FBQyxTQUFTLEdBc1J2RDtrQkF0Um9CLGNBQWMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7IGNjY2xhc3MsIHByb3BlcnR5IH0gPSBjYy5fZGVjb3JhdG9yO1xuaW1wb3J0IHsgQm9hcmQgfSBmcm9tIFwiLi4vY29yZS9Cb2FyZFwiO1xuaW1wb3J0IHsgR2FtZVN0YXRlLCBHYW1lU3RhdHVzIH0gZnJvbSBcIi4uL2NvcmUvR2FtZVN0YXRlXCI7XG5pbXBvcnQgeyBHYW1lUnVsZXMgfSBmcm9tIFwiLi4vY29yZS9HYW1lUnVsZXNcIjtcbmltcG9ydCBCb2FyZFZpZXcgZnJvbSBcIi4uL3ZpZXcvQm9hcmRWaWV3XCI7XG5pbXBvcnQgR2FtZUVuZFBhbmVsLCB7IEdhbWVFbmRUeXBlIH0gZnJvbSBcIi4uL3VpL0dhbWVFbmRQYW5lbFwiO1xuaW1wb3J0IHsgU3VwZXJUaWxlVHlwZSwgVGlsZSB9IGZyb20gXCIuLi9jb3JlL1RpbGVcIjtcblxuLyoqXG4gKiDQk9C70LDQstC90YvQuSDQutC+0L3RgtGA0L7Qu9C70LXRgCDQuNCz0YDRi1xuICog0KHQstGP0LfRi9Cy0LDQtdGCINC80L7QtNC10LvRjCAoQm9hcmQsIEdhbWVTdGF0ZSkg0YEg0L7RgtC+0LHRgNCw0LbQtdC90LjQtdC8IChCb2FyZFZpZXcpXG4gKi9cbkBjY2NsYXNzXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBHYW1lQ29udHJvbGxlciBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gIEBwcm9wZXJ0eShCb2FyZFZpZXcpXG4gIGJvYXJkVmlldzogQm9hcmRWaWV3ID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIHNjb3JlTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTGFiZWwpXG4gIG1vdmVzTGFiZWw6IGNjLkxhYmVsID0gbnVsbDtcblxuICBAcHJvcGVydHkoY2MuTm9kZSlcbiAgZ2FtZUVuZFBhbmVsTm9kZTogY2MuTm9kZSA9IG51bGw7XG5cbiAgcHJpdmF0ZSBnYW1lRW5kUGFuZWw6IEdhbWVFbmRQYW5lbCA9IG51bGw7XG4gIHByaXZhdGUgYm9hcmQ6IEJvYXJkO1xuICBwcml2YXRlIGdhbWVTdGF0ZTogR2FtZVN0YXRlO1xuXG4gIG9uTG9hZCgpIHtcbiAgICB0aGlzLmJvYXJkID0gbmV3IEJvYXJkKEdhbWVSdWxlcy5HUklEX0NPTFMsIEdhbWVSdWxlcy5HUklEX1JPV1MpO1xuICAgIHRoaXMuZ2FtZVN0YXRlID0gbmV3IEdhbWVTdGF0ZSgpO1xuXG4gICAgdGhpcy5ib2FyZC5nZW5lcmF0ZSgpO1xuICAgIHRoaXMuYm9hcmRWaWV3LmluaXQodGhpcy5ib2FyZCwgdGhpcy5vblRpbGVDbGlja2VkLmJpbmQodGhpcykpO1xuICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgfVxuXG4gIHN0YXJ0KCkge1xuICAgIGlmICh0aGlzLmdhbWVFbmRQYW5lbE5vZGUpIHtcbiAgICAgIHRoaXMuZ2FtZUVuZFBhbmVsID0gdGhpcy5nYW1lRW5kUGFuZWxOb2RlLmdldENvbXBvbmVudChHYW1lRW5kUGFuZWwpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDQntCx0YDQsNCx0L7RgtGH0LjQuiDQutC70LjQutCwINC/0L4g0YLQsNC50LvRg1xuICAgKi9cbiAgcHJpdmF0ZSBvblRpbGVDbGlja2VkKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZCB7XG4gICAgaWYgKCF0aGlzLmdhbWVTdGF0ZS5pc1BsYXlpbmcoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGNsaWNrZWRUaWxlID0gdGhpcy5ib2FyZC5nZXRUaWxlKHgsIHkpO1xuICAgIGlmICghY2xpY2tlZFRpbGUpIHJldHVybjtcblxuICAgIGlmIChjbGlja2VkVGlsZS5pc1N1cGVyKCkpIHtcbiAgICAgIHRoaXMuYWN0aXZhdGVTdXBlclRpbGUoY2xpY2tlZFRpbGUpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGdyb3VwID0gdGhpcy5ib2FyZC5maW5kQ29ubmVjdGVkR3JvdXAoeCwgeSk7XG5cbiAgICBpZiAoIUdhbWVSdWxlcy5pc1ZhbGlkR3JvdXAoZ3JvdXAubGVuZ3RoKSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHNob3VsZENyZWF0ZVN1cGVyID0gR2FtZVJ1bGVzLnNob3VsZENyZWF0ZVN1cGVyVGlsZShncm91cC5sZW5ndGgpO1xuICAgIGNvbnN0IHN1cGVyVHlwZSA9IEdhbWVSdWxlcy5nZXRTdXBlclRpbGVUeXBlKGdyb3VwLmxlbmd0aCk7XG4gICAgY29uc3QgY2xpY2tDb2xvciA9IGNsaWNrZWRUaWxlLmNvbG9yO1xuICAgIGNvbnN0IGNsaWNrWCA9IHg7XG4gICAgY29uc3QgY2xpY2tZID0geTtcblxuICAgIHRoaXMuYm9hcmRWaWV3LmFuaW1hdGVSZW1vdmFsKGdyb3VwLCAoKSA9PiB7XG4gICAgICB0aGlzLmJvYXJkLnJlbW92ZVRpbGVzKGdyb3VwKTtcblxuICAgICAgaWYgKHNob3VsZENyZWF0ZVN1cGVyICYmIHN1cGVyVHlwZSAhPT0gU3VwZXJUaWxlVHlwZS5OT05FKSB7XG4gICAgICAgIGNvbnN0IHN1cGVyVGlsZSA9IHRoaXMuYm9hcmQuY3JlYXRlU3VwZXJUaWxlKFxuICAgICAgICAgIGNsaWNrWCxcbiAgICAgICAgICBjbGlja1ksXG4gICAgICAgICAgc3VwZXJUeXBlLFxuICAgICAgICAgIGNsaWNrQ29sb3IsXG4gICAgICAgICk7XG4gICAgICAgIHRoaXMuYm9hcmRWaWV3LmNyZWF0ZVN1cGVyVGlsZVdpdGhBcHBlYXJBbmltYXRpb24oc3VwZXJUaWxlKTtcbiAgICAgIH1cblxuICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICBjb25zdCBvbGRQb3NpdGlvbnMgPSB0aGlzLnNhdmVPbGRQb3NpdGlvbnMoKTtcbiAgICAgICAgdGhpcy5ib2FyZC5hcHBseUdyYXZpdHkoKTtcblxuICAgICAgICB0aGlzLmJvYXJkVmlldy5hbmltYXRlR3Jhdml0eVdpdGhQb3NpdGlvbnMob2xkUG9zaXRpb25zLCAoKSA9PiB7XG4gICAgICAgICAgdGhpcy5nYW1lU3RhdGUuYWRkU2NvcmUoZ3JvdXAubGVuZ3RoKTtcbiAgICAgICAgICB0aGlzLmdhbWVTdGF0ZS51c2VNb3ZlKCk7XG4gICAgICAgICAgdGhpcy5nYW1lU3RhdGUuY2hlY2tFbmRDb25kaXRpb25zKHRoaXMuYm9hcmQpO1xuICAgICAgICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgICAgICAgICB0aGlzLmNoZWNrU2h1ZmZsZU9yR2FtZUVuZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0sIDAuMyk7XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICog0JDQutGC0LjQstC40YDQvtCy0LDRgtGMINGN0YTRhNC10LrRgiDRgdGD0L/QtdGALdGC0LDQudC70LAg0YEg0YbQtdC/0L3QvtC5INGA0LXQsNC60YbQuNC10LlcbiAgICovXG4gIHByaXZhdGUgYWN0aXZhdGVTdXBlclRpbGUoc3VwZXJUaWxlOiBUaWxlKTogdm9pZCB7XG4gICAgY29uc3QgdGlsZXNUb1JlbW92ZSA9IHRoaXMuZ2V0VGlsZXNGb3JTdXBlckVmZmVjdChzdXBlclRpbGUpO1xuXG4gICAgaWYgKHRpbGVzVG9SZW1vdmUubGVuZ3RoID09PSAwKSByZXR1cm47XG5cbiAgICBjb25zdCB0cmlnZ2VyZWRTdXBlclRpbGVzID0gdGlsZXNUb1JlbW92ZS5maWx0ZXIoXG4gICAgICAodGlsZSkgPT4gdGlsZS5pc1N1cGVyKCkgJiYgdGlsZS5pZCAhPT0gc3VwZXJUaWxlLmlkLFxuICAgICk7XG5cbiAgICB0aGlzLmJvYXJkVmlldy5hbmltYXRlUmVtb3ZhbCh0aWxlc1RvUmVtb3ZlLCAoKSA9PiB7XG4gICAgICB0aGlzLmJvYXJkLnJlbW92ZVRpbGVzKHRpbGVzVG9SZW1vdmUpO1xuXG4gICAgICBpZiAodHJpZ2dlcmVkU3VwZXJUaWxlcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICBjb25zdCBzZWNvbmRXYXZlVGlsZXMgPSB0aGlzLmNvbGxlY3RTZWNvbmRXYXZlVGlsZXMoXG4gICAgICAgICAgICB0cmlnZ2VyZWRTdXBlclRpbGVzLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICBpZiAoc2Vjb25kV2F2ZVRpbGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIHRoaXMuYm9hcmRWaWV3LmFuaW1hdGVSZW1vdmFsKHNlY29uZFdhdmVUaWxlcywgKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLmJvYXJkLnJlbW92ZVRpbGVzKHNlY29uZFdhdmVUaWxlcyk7XG4gICAgICAgICAgICAgIHRoaXMuYXBwbHlHcmF2aXR5QW5kRmluaXNoKFxuICAgICAgICAgICAgICAgIHRpbGVzVG9SZW1vdmUubGVuZ3RoICsgc2Vjb25kV2F2ZVRpbGVzLmxlbmd0aCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFwcGx5R3Jhdml0eUFuZEZpbmlzaCh0aWxlc1RvUmVtb3ZlLmxlbmd0aCk7XG4gICAgICAgICAgfVxuICAgICAgICB9LCAwLjEpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5hcHBseUdyYXZpdHlBbmRGaW5pc2godGlsZXNUb1JlbW92ZS5sZW5ndGgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqINCh0L7QsdGA0LDRgtGMINGC0LDQudC70Ysg0LTQu9GPINCy0YLQvtGA0L7QuSDQstC+0LvQvdGLINGG0LXQv9C90L7QuSDRgNC10LDQutGG0LjQuFxuICAgKi9cbiAgcHJpdmF0ZSBjb2xsZWN0U2Vjb25kV2F2ZVRpbGVzKHRyaWdnZXJlZFN1cGVyVGlsZXM6IFRpbGVbXSk6IFRpbGVbXSB7XG4gICAgY29uc3Qgc2Vjb25kV2F2ZVRpbGVzID0gbmV3IFNldDxUaWxlPigpO1xuXG4gICAgdHJpZ2dlcmVkU3VwZXJUaWxlcy5mb3JFYWNoKChzZWNvbmRhcnlTdXBlclRpbGU6IFRpbGUpID0+IHtcbiAgICAgIGNvbnN0IHNlY29uZGFyeVRpbGVzID0gdGhpcy5nZXRUaWxlc0ZvclN1cGVyRWZmZWN0KHNlY29uZGFyeVN1cGVyVGlsZSk7XG4gICAgICBzZWNvbmRhcnlUaWxlcy5mb3JFYWNoKCh0aWxlKSA9PiB7XG4gICAgICAgIGNvbnN0IHRpbGVPbkJvYXJkID0gdGhpcy5ib2FyZC5nZXRUaWxlKHRpbGUuZ3JpZFgsIHRpbGUuZ3JpZFkpO1xuICAgICAgICBpZiAodGlsZU9uQm9hcmQgJiYgdGlsZU9uQm9hcmQuaWQgPT09IHRpbGUuaWQpIHtcbiAgICAgICAgICBzZWNvbmRXYXZlVGlsZXMuYWRkKHRpbGVPbkJvYXJkKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gQXJyYXkuZnJvbShzZWNvbmRXYXZlVGlsZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqINCf0L7Qu9GD0YfQuNGC0Ywg0YLQsNC50LvRiyDQtNC70Y8g0YPQtNCw0LvQtdC90LjRjyDQsiDQt9Cw0LLQuNGB0LjQvNC+0YHRgtC4INC+0YIg0YLQuNC/0LAg0YHRg9C/0LXRgC3RgtCw0LnQu9CwXG4gICAqL1xuICBwcml2YXRlIGdldFRpbGVzRm9yU3VwZXJFZmZlY3Qoc3VwZXJUaWxlOiBUaWxlKTogVGlsZVtdIHtcbiAgICBjb25zdCByYWRpdXMgPSBNYXRoLmZsb29yKEdhbWVSdWxlcy5HUklEX0NPTFMgLyA0KTtcblxuICAgIHN3aXRjaCAoc3VwZXJUaWxlLnN1cGVyVHlwZSkge1xuICAgICAgY2FzZSBTdXBlclRpbGVUeXBlLlJPV19CTEFTVDpcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0VGlsZXNJblJvdyhzdXBlclRpbGUuZ3JpZFkpO1xuXG4gICAgICBjYXNlIFN1cGVyVGlsZVR5cGUuQ09MVU1OX0JMQVNUOlxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXRUaWxlc0luQ29sdW1uKHN1cGVyVGlsZS5ncmlkWCk7XG5cbiAgICAgIGNhc2UgU3VwZXJUaWxlVHlwZS5CT01COlxuICAgICAgICByZXR1cm4gdGhpcy5ib2FyZC5nZXRUaWxlc0luUmFkaXVzKFxuICAgICAgICAgIHN1cGVyVGlsZS5ncmlkWCxcbiAgICAgICAgICBzdXBlclRpbGUuZ3JpZFksXG4gICAgICAgICAgcmFkaXVzLFxuICAgICAgICApO1xuXG4gICAgICBjYXNlIFN1cGVyVGlsZVR5cGUuTUVHQV9CTEFTVDpcbiAgICAgICAgcmV0dXJuIHRoaXMuYm9hcmQuZ2V0QWxsVGlsZXMoKTtcblxuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIFtdO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDQn9GA0LjQvNC10L3QuNGC0Ywg0LPRgNCw0LLQuNGC0LDRhtC40Y4g0Lgg0LfQsNCy0LXRgNGI0LjRgtGMINGF0L7QtFxuICAgKi9cbiAgcHJpdmF0ZSBhcHBseUdyYXZpdHlBbmRGaW5pc2godG90YWxTY29yZTogbnVtYmVyKTogdm9pZCB7XG4gICAgY29uc3Qgb2xkUG9zaXRpb25zID0gdGhpcy5zYXZlT2xkUG9zaXRpb25zKCk7XG4gICAgdGhpcy5ib2FyZC5hcHBseUdyYXZpdHkoKTtcblxuICAgIHRoaXMuYm9hcmRWaWV3LmFuaW1hdGVHcmF2aXR5V2l0aFBvc2l0aW9ucyhvbGRQb3NpdGlvbnMsICgpID0+IHtcbiAgICAgIHRoaXMuZ2FtZVN0YXRlLmFkZFNjb3JlKHRvdGFsU2NvcmUpO1xuICAgICAgdGhpcy5nYW1lU3RhdGUudXNlTW92ZSgpO1xuICAgICAgdGhpcy5nYW1lU3RhdGUuY2hlY2tFbmRDb25kaXRpb25zKHRoaXMuYm9hcmQpO1xuICAgICAgdGhpcy51cGRhdGVVSSgpO1xuICAgICAgdGhpcy5jaGVja1NodWZmbGVPckdhbWVFbmQoKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDQodC+0YXRgNCw0L3QuNGC0Ywg0YLQtdC60YPRidC40LUg0L/QvtC30LjRhtC40Lgg0LLRgdC10YUg0YLQsNC50LvQvtCyXG4gICAqL1xuICBwcml2YXRlIHNhdmVPbGRQb3NpdGlvbnMoKTogTWFwPG51bWJlciwgeyB4OiBudW1iZXI7IHk6IG51bWJlciB9PiB7XG4gICAgY29uc3QgcG9zaXRpb25zID0gbmV3IE1hcCgpO1xuXG4gICAgZm9yIChsZXQgeCA9IDA7IHggPCB0aGlzLmJvYXJkLmNvbHM7IHgrKykge1xuICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCB0aGlzLmJvYXJkLnJvd3M7IHkrKykge1xuICAgICAgICBjb25zdCB0aWxlID0gdGhpcy5ib2FyZC5nZXRUaWxlKHgsIHkpO1xuICAgICAgICBpZiAodGlsZSkge1xuICAgICAgICAgIHBvc2l0aW9ucy5zZXQodGlsZS5pZCwgeyB4OiB0aWxlLmdyaWRYLCB5OiB0aWxlLmdyaWRZIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHBvc2l0aW9ucztcbiAgfVxuXG4gIC8qKlxuICAgKiDQntCx0L3QvtCy0LjRgtGMIFVJICjRgdGH0ZHRgtGH0LjQutC4INC+0YfQutC+0LIg0Lgg0YXQvtC00L7QsilcbiAgICovXG4gIHByaXZhdGUgdXBkYXRlVUkoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuc2NvcmVMYWJlbCkge1xuICAgICAgdGhpcy5zY29yZUxhYmVsLnN0cmluZyA9IGAke3RoaXMuZ2FtZVN0YXRlLnNjb3JlfS8ke0dhbWVSdWxlcy5UQVJHRVRfU0NPUkV9YDtcbiAgICB9XG4gICAgaWYgKHRoaXMubW92ZXNMYWJlbCkge1xuICAgICAgdGhpcy5tb3Zlc0xhYmVsLnN0cmluZyA9IGAke3RoaXMuZ2FtZVN0YXRlLm1vdmVzTGVmdH1gO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDQn9GA0L7QstC10YDQutCwINC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtC4INC/0LXRgNC10LzQtdGI0LjQstCw0L3QuNGPINC40LvQuCDQvtC60L7QvdGH0LDQvdC40Y8g0LjQs9GA0YtcbiAgICovXG4gIHByaXZhdGUgY2hlY2tTaHVmZmxlT3JHYW1lRW5kKCk6IHZvaWQge1xuICAgIGNvbnN0IHN0YXR1cyA9IHRoaXMuZ2FtZVN0YXRlLnN0YXR1cztcblxuICAgIGlmIChzdGF0dXMgPT09IEdhbWVTdGF0dXMuV0lOKSB7XG4gICAgICB0aGlzLnNob3dHYW1lRW5kU2NyZWVuKEdhbWVFbmRUeXBlLldJTik7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgaWYgKHN0YXR1cyA9PT0gR2FtZVN0YXR1cy5MT1NFKSB7XG4gICAgICB0aGlzLnNob3dHYW1lRW5kU2NyZWVuKEdhbWVFbmRUeXBlLkxPU0UpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmICghdGhpcy5ib2FyZC5oYXNBdmFpbGFibGVNb3ZlcygpKSB7XG4gICAgICBpZiAodGhpcy5nYW1lU3RhdGUuc2h1ZmZsZXNMZWZ0ID4gMCkge1xuICAgICAgICB0aGlzLnBlcmZvcm1TaHVmZmxlKCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLnNob3dHYW1lRW5kU2NyZWVuKEdhbWVFbmRUeXBlLkxPU0UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiDQktGL0L/QvtC70L3QuNGC0Ywg0L/QtdGA0LXQvNC10YjQuNCy0LDQvdC40LUg0L/QvtC70Y9cbiAgICovXG4gIHByaXZhdGUgcGVyZm9ybVNodWZmbGUoKTogdm9pZCB7XG4gICAgdGhpcy5nYW1lU3RhdGUudXNlU2h1ZmZsZSgpO1xuXG4gICAgY29uc3Qgb2xkUG9zaXRpb25zID0gdGhpcy5zYXZlT2xkUG9zaXRpb25zKCk7XG4gICAgdGhpcy5ib2FyZC5zaHVmZmxlKCk7XG5cbiAgICB0aGlzLmJvYXJkVmlldy5hbmltYXRlR3Jhdml0eVdpdGhQb3NpdGlvbnMob2xkUG9zaXRpb25zLCAoKSA9PiB7XG4gICAgICBpZiAoIXRoaXMuYm9hcmQuaGFzQXZhaWxhYmxlTW92ZXMoKSkge1xuICAgICAgICB0aGlzLmNoZWNrU2h1ZmZsZU9yR2FtZUVuZCgpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqINCf0L7QutCw0LfQsNGC0Ywg0Y3QutGA0LDQvSDQvtC60L7QvdGH0LDQvdC40Y8g0LjQs9GA0YtcbiAgICovXG4gIHByaXZhdGUgc2hvd0dhbWVFbmRTY3JlZW4odHlwZTogR2FtZUVuZFR5cGUpOiB2b2lkIHtcbiAgICB0aGlzLmJvYXJkVmlldy5hbmltYXRlQWxsVGlsZXNSZW1vdmFsKCgpID0+IHtcbiAgICAgIHRoaXMuZ2FtZUVuZFBhbmVsLnNob3codHlwZSwgdGhpcy5yZXN0YXJ0R2FtZS5iaW5kKHRoaXMpKTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiDQn9C10YDQtdC30LDQv9GD0YHRgtC40YLRjCDQuNCz0YDRg1xuICAgKi9cbiAgcHJpdmF0ZSByZXN0YXJ0R2FtZSgpOiB2b2lkIHtcbiAgICB0aGlzLmdhbWVTdGF0ZS5yZXNldCgpO1xuICAgIHRoaXMuYm9hcmQuZ2VuZXJhdGUoKTtcbiAgICB0aGlzLmJvYXJkVmlldy5yZW5kZXJCb2FyZCgpO1xuICAgIHRoaXMudXBkYXRlVUkoKTtcbiAgfVxufVxuIl19