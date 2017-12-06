import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import glamorous from 'glamorous';
import { colors, breakpoints } from '../theme';
var Container = glamorous.div((_a = {
        background: colors.sidebarBlueLight,
        color: colors.white,
        height: 128,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 600
    },
    _a[breakpoints.mobileAndLower] = {
        height: 44,
        background: 'none',
    },
    _a));
var Link = glamorous(RouterLink)((_b = {
        color: 'inherit',
        textDecoration: 'none'
    },
    _b[breakpoints.mobileAndLower] = {
        display: 'flex',
        alignItems: 'center',
    },
    _b));
var Heading = glamorous.div((_c = {
        fontSize: 26
    },
    _c[breakpoints.mobileAndLower] = {
        fontSize: 18,
    },
    _c));
var SubHeading = glamorous.div((_d = {
        display: 'block',
        color: '#E50C81',
        fontSize: 18
    },
    _d[breakpoints.mobileAndLower] = {
        fontSize: 14,
        display: 'initial',
        marginLeft: '.5em',
    },
    _d));
export var Logo = function (_a) {
    var location = _a.location;
    return (React.createElement(Container, null,
        React.createElement(Link, { to: location },
            React.createElement(Heading, null, "Collector Bank"),
            React.createElement(SubHeading, null, "Spara"))));
};
var _a, _b, _c, _d;
//# sourceMappingURL=Logo.js.map