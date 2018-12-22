"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var compile_1 = require("./compile");
var translate_1 = require("./translate");
var assert = require("assert");
var JSX2CSS = /** @class */ (function () {
    // new JSX2Class({ type: 'css' / 'less' })
    function JSX2CSS(options) {
        if (options === void 0) { options = {}; }
        var _a = options.type, type = _a === void 0 ? 'less' : _a;
        this.type = type;
    }
    JSX2CSS.prototype.transform = function (options) {
        var code = options.code, _a = options.isOrigin, isOrigin = _a === void 0 ? false : _a;
        assert(code, 'code is required');
        var cssATS = compile_1.default(code);
        return isOrigin ? cssATS : translate_1.default(cssATS, this.type);
    };
    return JSX2CSS;
}());
exports.default = JSX2CSS;
//# sourceMappingURL=index.js.map