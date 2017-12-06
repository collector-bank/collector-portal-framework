var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import glamorous from 'glamorous';
import { keyframes } from 'glamor';
/**
 * The SVG was made with http://loading.io
 */
var spinner = require('./spinner.svg');
var Element = function (props) { return React.createElement("div", __assign({ role: "progressbar" }, props)); };
var fadeIn = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});
export var Spinner = glamorous(Element, { rootEl: 'div' })({
    display: 'inline-block',
    background: "url(" + spinner + ") no-repeat",
    backgroundSize: '100%',
    animation: fadeIn + " 250ms ease-in-out",
}, function (_a) {
    var _b = _a.size, size = _b === void 0 ? 80 : _b, _c = _a.centered, centered = _c === void 0 ? false : _c;
    var styles = {
        width: size,
        height: size,
    };
    if (centered) {
        styles.position = 'absolute';
        styles.top = "calc(50% - " + size / 2 + "px)";
        styles.left = "calc(50% - " + size / 2 + "px)";
    }
    return styles;
});
Spinner.displayName = 'Collector.Spinner';
//# sourceMappingURL=index.js.map