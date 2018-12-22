"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var acorn = require("acorn");
var debug = require("debug");
debug('js2class');
var ast = acorn.parse('1+1');
console.log('ast', ast);
