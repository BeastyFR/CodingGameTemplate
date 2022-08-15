/// <reference path="../utils/Generic/Util.ts" />
/// <reference path="../utils/Generic/Log.ts" />
/// <reference path="./Game.ts" />

declare var readline: any

Log.debugEnable = true;
Log.debugLevel = LogLevel.Light;

let data = {};

// COPY IN GAME DEFAULT SCRIPT HERE

let game = new Game(data);
game.run();
console.log(game.result());
