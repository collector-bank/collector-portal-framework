var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import * as React from 'react';
import glamorous from 'glamorous';
import { colors, breakpoints } from '../../../theme';
import { lighten } from 'polished';
/**
 * The SVG was made with http://loading.io
 */
var whiteSpinner = require('./spinner-white.svg');
var purpleSpinner = require('./spinner-purple.svg');
var icons = {
    'bank-id': require('./icons/bank-id.svg'),
    plus: require('./icons/plus.svg'),
    cross: require('./icons/cross.svg'),
};
var ButtonElement = glamorous.button({
    fontFamily: 'inherit',
    whiteSpace: 'nowrap',
    textDecoration: 'none',
    textAlign: 'center',
    overflow: 'hidden',
    border: 0,
    borderRadius: 50,
    transition: 'background-color 100ms',
    '&:disabled': {
        backgroundColor: colors.mediumGray,
        color: colors.lightGray,
    },
    '&:not(:disabled)': {
        cursor: 'pointer',
    },
}, function (_a) {
    var size = _a.size, type = _a.type, loading = _a.loading, icon = _a.icon;
    var styles = __assign({}, getSizeStyles(size), getTypeStyles(type), getLoadingStyles(loading, type, size));
    if (icon) {
        styles.display = 'flex';
        styles.alignItems = 'center';
        styles.justifyContent = 'center';
    }
    return styles;
});
// tslint:disable-next-line:no-any Will not fix due to shortcoming in glamorous API
var Icon = glamorous.span({
    display: 'inline-block',
    marginRight: '.5em',
    backgroundRepeat: 'no-repeat',
}, function (_a) {
    var icon = _a.icon, size = _a.size;
    return __assign({ backgroundImage: "url(" + icons[icon] + ")", backgroundSize: '100%' }, getIconSizeStyles(size));
});
var getTypeStyles = function (type) {
    switch (type) {
        case 'warn':
            return __assign({}, background(colors.red), { color: colors.white });
        case 'secondary':
            return __assign({}, background(colors.offWhite), { color: colors.black, border: "1px solid " + colors.offWhite, '&:hover:not(:disabled)': {
                    backgroundColor: lighten(0.02, colors.offWhite),
                }, '&:active:not(:disabled)': {
                    backgroundColor: lighten(0.04, colors.offWhite),
                } });
        case 'text':
            return {
                backgroundColor: 'transparent',
                color: colors.purple,
                minWidth: 0,
                paddingLeft: 12,
                paddingRight: 12,
                '&:hover:not(:disabled)': {
                    color: lighten(0.1, colors.purple),
                    textDecoration: 'underline',
                },
                '&:active:not(:disabled)': {
                    color: lighten(0.2, colors.purple),
                },
                '&:disabled': {
                    backgroundColor: 'transparent',
                }
            };
        case 'primary':
        default:
            return __assign({}, background(colors.purple), { color: colors.white });
    }
};
var getSizeStyles = function (size) {
    var medium = {
        fontSize: 18,
        lineHeight: '24px',
        fontWeight: 500,
        minWidth: 160,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,
    };
    switch (size) {
        case 'small':
            return {
                fontSize: 16,
                lineHeight: '24px',
                fontWeight: 500,
                minWidth: 80,
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 12,
                paddingRight: 12,
            };
        case 'large':
            return _a = {
                    fontSize: 21,
                    lineHeight: '32px',
                    fontWeight: 500,
                    minWidth: 200,
                    paddingTop: 12,
                    paddingBottom: 12,
                    paddingLeft: 32,
                    paddingRight: 32
                },
                _a[breakpoints.mobileAndLower] = medium,
                _a;
        case 'medium':
        default:
            return medium;
    }
    var _a;
};
var getLoadingStyles = function (loading, type, size) {
    var styles = {};
    if (loading) {
        styles = {
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            pointerEvents: 'none',
            '> span': {
                visibility: 'hidden',
            },
        };
        switch (type) {
            case 'warn':
                styles.backgroundImage = "url(" + whiteSpinner + ")";
                break;
            case 'secondary':
                styles.backgroundImage = "url(" + purpleSpinner + ")";
                break;
            case 'text':
                styles.backgroundImage = "url(" + purpleSpinner + ")";
                break;
            case 'primary':
            default:
                styles.backgroundImage = "url(" + whiteSpinner + ")";
                break;
        }
        switch (size) {
            case 'small':
                styles.backgroundSize = 22;
                break;
            case 'large':
                styles.backgroundSize = 46;
                break;
            case 'medium':
            default:
                styles.backgroundSize = 36;
                break;
        }
    }
    return styles;
};
var getIconSizeStyles = function (size) {
    switch (size) {
        case 'small':
            return {
                height: 18,
                width: 18,
            };
        case 'large':
            return {
                height: 32,
                width: 32,
            };
        case 'medium':
        default:
            return {
                height: 24,
                width: 24,
            };
    }
};
var background = function (backgroundColor) { return ({
    backgroundColor: backgroundColor,
    '&:hover:not(:disabled)': {
        backgroundColor: lighten(0.1, backgroundColor),
    },
    '&:active:not(:disabled)': {
        backgroundColor: lighten(0.2, backgroundColor),
    },
}); };
export var Button = function (_a) {
    var loading = _a.loading, children = _a.children, icon = _a.icon, size = _a.size, rest = __rest(_a, ["loading", "children", "icon", "size"]);
    return (React.createElement(ButtonElement, __assign({ "aria-busy": loading, loading: loading, icon: icon, size: size }, rest),
        icon && React.createElement(Icon, { icon: icon, size: size }),
        React.createElement("span", null, children)));
};
Button.displayName = 'Collector.Button';
//# sourceMappingURL=index.js.map