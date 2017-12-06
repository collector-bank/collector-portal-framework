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
import { colors, borderRadius } from '../../../theme';
import { keyframes } from 'glamor';
var largeIcons = {
    error: require('./icons/warning-filled.svg'),
    warning: require('./icons/warning.svg'),
    info: require('./icons/info.svg'),
    success: require('./icons/success.svg'),
};
var smallIcons = {
    error: require('./icons/warning-red.svg'),
    warning: require('./icons/warning.svg'),
    info: require('./icons/info-black.svg'),
    success: require('./icons/success-black.svg'),
};
var AlertContainer = glamorous.div({
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'left center',
    borderRadius: borderRadius.small,
    display: 'inline-block',
    textAlign: 'left',
    boxSizing: 'border-box',
    width: '100%',
    maxWidth: 500,
}, function (_a) {
    var type = _a.type, alertSize = _a.alertSize, fadeIn = _a.fadeIn;
    return (__assign({}, getStyle(type, alertSize), getAnimation(fadeIn)));
});
var getStyle = function (type, alertSize) {
    var backgroundColors = {
        error: colors.red,
        warning: colors.yellow,
        info: colors.blue,
        success: colors.green,
    };
    var textColors = {
        error: colors.white,
        warning: colors.black,
        info: colors.white,
        success: colors.white,
    };
    switch (alertSize) {
        case 'small':
            return {
                backgroundPositionX: 0,
                backgroundImage: "url(" + smallIcons[type] + ")",
                backgroundColor: 'transparent',
                color: 'inherit',
                fontWeight: 400,
                backgroundSize: '16px 16px',
                padding: 0,
                paddingLeft: 24,
                marginBottom: 0,
            };
        case 'large':
        default:
            return {
                backgroundPositionX: 12,
                backgroundImage: "url(" + largeIcons[type] + ")",
                backgroundColor: backgroundColors[type],
                color: textColors[type],
                fontWeight: 500,
                backgroundSize: '24px 24px',
                padding: 10,
                paddingLeft: 48,
                marginBottom: '1.25em',
            };
    }
};
var getAnimation = function (fadeIn) {
    var fadeInFrames = keyframes({
        '0%': { opacity: 0 },
        '10%': { opacity: 1 },
        '90%': { opacity: 1 },
        '100%': { opacity: 0 },
    });
    return fadeIn ? { animation: fadeInFrames + " 3000ms forwards ease-in-out" } : {};
};
export var Alert = function (_a) {
    var _b = _a.message, message = _b === void 0 ? 'Ett fel uppstod' : _b, _c = _a.alertSize, alertSize = _c === void 0 ? 'large' : _c, type = _a.type, fadeIn = _a.fadeIn;
    return (React.createElement(AlertContainer, { role: "alert", alertSize: alertSize, type: type, fadeIn: fadeIn }, message));
};
Alert.displayName = 'Collector.Alert';
//# sourceMappingURL=index.js.map