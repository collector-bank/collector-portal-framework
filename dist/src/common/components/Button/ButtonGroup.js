import glamorous from 'glamorous';
export var ButtonGroup = glamorous.div({
    display: 'flex',
    flexWrap: 'wrap',
    margin: -8,
    '> *': {
        margin: 8,
    },
}, function (_a) {
    var _b = _a.align, align = _b === void 0 ? 'flex-start' : _b;
    return ({
        justifyContent: align,
    });
});
ButtonGroup.displayName = 'Collector.ButtonGroup';
//# sourceMappingURL=ButtonGroup.js.map