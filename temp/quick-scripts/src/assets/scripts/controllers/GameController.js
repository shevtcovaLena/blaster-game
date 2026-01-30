"use strict";
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