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
import { colors, fonts } from '../theme';
var List = glamorous.dl({
    marginTop: 0,
});
var Heading = glamorous.dt({
    color: colors.mediumGray,
    font: fonts.desktop.small,
});
var Value = glamorous.dd({
    margin: 0,
    '&:not(:last-child)': {
        marginBottom: 16,
    },
});
export var ValueList = function (props) {
    var items = props.items
        .map(function (item) { return Array.isArray(item.value) ? (__assign({}, item, { value: item.value.filter(function (x) { return x; }) })) : item; })
        .filter(function (item) { return item.heading && item.value && item.value.length > 0; });
    return (React.createElement(List, null, items.map(function (item, i) { return [
        React.createElement(Heading, { key: i + "_heading" }, item.heading),
        React.createElement(Value, { key: i + "_value" }, Array.isArray(item.value)
            ? item.value.map(function (val, j) { return React.createElement("div", { key: j }, val); })
            : item.value),
    ]; })));
};
//# sourceMappingURL=ValueList.js.map