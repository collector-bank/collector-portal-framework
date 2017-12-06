import * as React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import glamorous from 'glamorous';
import { borderRadius, breakpoints, colors } from '../theme';
var NavContainer = glamorous.nav({
    marginBottom: 30,
});
var NavList = glamorous.ul((_a = {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',
        '> li': (_b = {
                marginRight: 16
            },
            _b[breakpoints.mobileAndLower] = {
                margin: 0,
            },
            _b)
    },
    _a[breakpoints.mobileAndLower] = {
        flexDirection: 'column',
        borderRadius: borderRadius.small,
        border: "1px solid " + colors.lightGray,
        borderBottom: 0,
    },
    _a));
var NavLink = glamorous(RouterNavLink)((_c = {
        display: 'block',
        padding: '10px 4px',
        textDecoration: 'none',
        color: colors.mediumGray,
        fontSize: 18,
        fontWeight: 500,
        transitionProperty: 'border-color, color',
        transitionDuration: '200ms',
        borderBottom: '4px solid transparent',
        '.active': {
            borderColor: colors.purple,
            color: 'inherit',
        },
        '&:hover': {
            color: 'inherit',
        }
    },
    _c[breakpoints.mobileAndLower] = {
        borderBottom: "1px solid " + colors.lightGray,
        borderLeft: "4px solid " + colors.lightGray,
        flexDirection: 'column',
        paddingLeft: 16,
        '.active': {
            borderBottom: "1px solid " + colors.lightGray,
            borderLeftColor: colors.purple,
        },
    },
    _c));
export var Tabs = function (_a) {
    var items = _a.items;
    return (React.createElement(NavContainer, null,
        React.createElement(NavList, null, items.map(function (item, i) { return (React.createElement("li", { key: i },
            React.createElement(NavLink, { to: item.path, exact: true }, item.label))); }))));
};
var _a, _b, _c;
//# sourceMappingURL=Tabs.js.map