"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var gameStatus;
(function (gameStatus) {
    gameStatus[gameStatus["ongoing"] = 0] = "ongoing";
    gameStatus[gameStatus["finished"] = 1] = "finished";
})(gameStatus || (gameStatus = {}));
