/// <reference path="../util/Util.ts" />
/// <reference path="../util/Log.ts" />
/// <reference path="../app/Game.ts" />

Log.debugEnable = true;
Log.debugLevel = LogLevel.Light;


var fs = require('fs'); 

var array = fs.readFileSync('./data/data.txt').toString().split("\n");
function readline()
{
    return array.shift();
}

var inputs: string[] = readline().split(' ');