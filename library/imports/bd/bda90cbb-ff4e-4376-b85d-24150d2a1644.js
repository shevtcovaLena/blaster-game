"use strict";
cc._RF.push(module, 'bda90y7/05DdrhdJBUNKhZE', 'GameState');
// scripts/core/GameState.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GameState = exports.GameStatus = void 0;
var GameRules_1 = require("./GameRules");
/**
 * Состояния игры
 */
var GameStatus;
(function (GameStatus) {
    GameStatus["PLAYING"] = "playing";
    GameStatus["WIN"] = "win";
    GameStatus["LOSE"] = "lose";
})(GameStatus = exports.GameStatus || (exports.GameStatus = {}));
/**
 * Состояние игры - очки, ходы, статус
 */
var GameState = /** @class */ (function () {
    function GameState() {
        this._score = 0;
        this._movesLeft = GameRules_1.GameRules.MAX_MOVES;
        this._status = GameStatus.PLAYING;
        this._shufflesLeft = GameRules_1.GameRules.MAX_SHUFFLES;
    }
    Object.defineProperty(GameState.prototype, "score", {
        get: function () {
            return this._score;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameState.prototype, "movesLeft", {
        get: function () {
            return this._movesLeft;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameState.prototype, "status", {
        get: function () {
            return this._status;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(GameState.prototype, "shufflesLeft", {
        get: function () {
            return this._shufflesLeft;
        },
        enumerable: false,
        configurable: true
    });
    GameState.prototype.isPlaying = function () {
        return this._status === GameStatus.PLAYING;
    };
    GameState.prototype.addScore = function (groupSize) {
        var points = GameRules_1.GameRules.calculateScore(groupSize);
        this._score += points;
    };
    GameState.prototype.useMove = function () {
        if (this._movesLeft > 0) {
            this._movesLeft--;
        }
    };
    GameState.prototype.useShuffle = function () {
        if (this._shufflesLeft > 0) {
            this._shufflesLeft--;
        }
    };
    /**
     * Проверить условия окончания игры
     */
    GameState.prototype.checkEndConditions = function (board) {
        if (this._status !== GameStatus.PLAYING) {
            return;
        }
        if (this._score >= GameRules_1.GameRules.TARGET_SCORE) {
            this._status = GameStatus.WIN;
            return;
        }
        if (this._movesLeft <= 0) {
            this._status = GameStatus.LOSE;
            return;
        }
        if (!board.hasAvailableMoves() && this._shufflesLeft <= 0) {
            this._status = GameStatus.LOSE;
        }
    };
    GameState.prototype.reset = function () {
        this._score = 0;
        this._movesLeft = GameRules_1.GameRules.MAX_MOVES;
        this._status = GameStatus.PLAYING;
        this._shufflesLeft = GameRules_1.GameRules.MAX_SHUFFLES;
    };
    return GameState;
}());
exports.GameState = GameState;

cc._RF.pop();