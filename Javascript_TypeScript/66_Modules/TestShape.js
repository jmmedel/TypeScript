"use strict";
exports.__esModule = true;
var circle = require("./Circle");
var triangle = require("./Triangle");
function drawAllShapes(shapeToDraw) {
    shapeToDraw.draw();
}
drawAllShapes(new circle.Circle());
drawAllShapes(new triangle.Triangle());
/*
The command to compile the main TypeScript file for AMD systems is −

tsc --module amd TestShape.ts
On compiling, it will generate following JavaScript code for AMD.

*/ 
