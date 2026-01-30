
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/controllers/GameController');
require('./assets/scripts/core/Board');
require('./assets/scripts/core/GameRules');
require('./assets/scripts/core/GameState');
require('./assets/scripts/core/Tile');
require('./assets/scripts/core/TileColor');
require('./assets/scripts/ui/BusterButton');
require('./assets/scripts/ui/GameEndPanel');
require('./assets/scripts/view/BoardView');
require('./assets/scripts/view/BoosterPanel');
require('./assets/scripts/view/TileView');

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