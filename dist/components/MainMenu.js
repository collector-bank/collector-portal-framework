import * as React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import glamorous from 'glamorous';
import { colors, breakpoints, borderRadius } from '../theme';
var MenuContainer = glamorous.nav((_a = {
        flexGrow: 1,
        margin: '40px 0'
    },
    _a[breakpoints.mobileAndLower] = {
        margin: 0,
        borderBottom: "1px solid " + colors.lightGray,
    },
    _a));
var MenuList = glamorous.ul((_b = {
        listStyleType: 'none',
        margin: 0,
        padding: 0
    },
    _b[breakpoints.mobileAndLower] = {
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
    },
    _b));
var MenuListItem = glamorous.li((_c = {
        marginLeft: 12,
        marginRight: 12
    },
    _c[breakpoints.mobileAndLower] = {
        marginLeft: 0,
        marginRight: 0,
    },
    _c), function (_a) {
    var onlyInDesktop = _a.onlyInDesktop, onlyInMobile = _a.onlyInMobile, useMarginTop = _a.useMarginTop;
    var styles = {};
    if (onlyInDesktop) {
        styles = (_b = {},
            _b[breakpoints.mobileAndLower] = {
                display: 'none',
            },
            _b);
    }
    if (onlyInMobile) {
        styles = (_c = {
                display: 'none'
            },
            _c[breakpoints.mobileAndLower] = {
                display: 'block',
            },
            _c);
    }
    if (useMarginTop) {
        styles.marginTop = 40;
    }
    return styles;
    var _b, _c;
});
var NavLink = glamorous(RouterNavLink)((_d = {
        display: 'flex',
        alignItems: 'center',
        padding: 12,
        color: 'inherit',
        textDecoration: 'none',
        borderRadius: borderRadius.small,
        transition: 'background-color 200ms, opacity 200ms',
        '&:not(.active)': {
            opacity: 0.5,
        },
        '&:hover': {
            background: 'rgba(255, 255, 255, .1)',
        },
        '&.active:hover': {
            background: 'rgba(255, 255, 255, .05)',
        }
    },
    _d[breakpoints.mobileAndLower] = {
        borderBottom: '4px solid transparent',
        borderRadius: 0,
        '.active': {
            borderBottomColor: 'currentColor',
        },
        '&:hover': {
            background: 'transparent',
        },
        '&.active:hover': {
            background: 'transparent',
        },
    },
    _d));
var NavLinkLabel = glamorous.span((_e = {
        fontSize: 18,
        marginLeft: 16
    },
    _e[breakpoints.mobileAndLower] = {
        display: 'none',
    },
    _e));
var NavLinkIcon = glamorous.div({
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: '100%',
    width: 24,
    height: 24,
}, function (_a) {
    var icon = _a.icon;
    return ({
        backgroundImage: "url(" + icon + ")",
    });
});
export var MainMenu = function (_a) {
    var items = _a.items;
    return (React.createElement(MenuContainer, null,
        React.createElement(MenuList, null, items.map(function (item, i) { return (React.createElement(MenuListItem, { key: i, onlyInDesktop: item.onlyInDesktop, onlyInMobile: item.onlyInMobile, useMarginTop: item.useMarginTop },
            React.createElement(NavLink, { to: item.path },
                React.createElement(NavLinkIcon, { icon: item.icon }),
                React.createElement(NavLinkLabel, null, item.label)))); }))));
};
var _a, _b, _c, _d, _e;
//# sourceMappingURL=MainMenu.js.map