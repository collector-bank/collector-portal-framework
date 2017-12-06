import * as React from 'react';
import glamorous from 'glamorous';
import { breakpoints, colors, fonts } from '../theme';
var PageHeaderContainer = glamorous.div((_a = {
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box',
        width: '100%',
        minHeight: 129,
        padding: '16px 40px',
        borderBottom: "1px solid " + colors.lightGray
    },
    _a[breakpoints.tabletAndLower] = {
        paddingLeft: 24,
        paddingRight: 24,
    },
    _a[breakpoints.mobileAndLower] = {
        padding: 16,
        minHeight: 0,
        border: 0,
    },
    _a));
var Title = glamorous.h1((_b = {
        margin: 0,
        font: fonts.desktop.xxl,
        fontWeight: 600
    },
    _b[breakpoints.mobileAndLower] = {
        font: fonts.mobile.xxl,
        fontWeight: 600,
    },
    _b));
export var PageHeader = function (_a) {
    var title = _a.title, children = _a.children;
    return (React.createElement(PageHeaderContainer, null, title
        ? React.createElement(Title, null, title)
        : children));
};
var _a, _b;
//# sourceMappingURL=PageHeader.js.map