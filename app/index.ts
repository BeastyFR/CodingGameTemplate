/// <reference path="../util/Util.ts" />
/// <reference path="../util/Log.ts" />
/// <reference path="../app/Game.ts" />

declare var readline: any

Log.debugEnable = true;
Log.debugLevel = LogLevel.Light;

let data = {};

let game = new Game(data);
game.run();

console.log(game.result());
