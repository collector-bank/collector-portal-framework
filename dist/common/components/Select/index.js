var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import * as React from 'react';
import glamorous from 'glamorous';
import * as uniqid from 'uniqid';
import { borderRadius, colors } from '../../../theme';
import { Label } from '../Label';
import { Alert } from '../Alert';
var arrow = require('./arrow.svg');
var SelectContainer = glamorous.div({
    marginBottom: '1.25em',
});
var SelectFieldContainer = glamorous.div({
    position: 'relative',
    maxWidth: 220,
    backgroundColor: colors.white,
    border: '1px solid',
    borderRadius: borderRadius.small,
    '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        right: 0,
        pointerEvents: 'none',
        background: "url(" + arrow + ") no-repeat center",
        backgroundSize: 16,
        width: 40,
        height: '100%',
    },
}, function (_a) {
    var hasError = _a.hasError;
    return ({
        borderColor: hasError ? colors.red : colors.mediumGray
    });
});
var SelectField = glamorous.select({
    font: 'inherit',
    color: 'inherit',
    appearance: 'none',
    background: 'transparent',
    border: 0,
    width: '100%',
    padding: 12,
    paddingRight: 40,
    '&:disabled': {
        background: colors.offWhite,
    },
    '&::-ms-expand': {
        display: 'none',
    },
});
var Select = /** @class */ (function (_super) {
    __extends(Select, _super);
    function Select() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            id: uniqid(),
        };
        return _this;
    }
    Select.prototype.render = function () {
        var _a = this.props, label = _a.label, disabled = _a.disabled, value = _a.value, error = _a.error, optional = _a.optional, onChange = _a.onChange;
        var items = this.props.items;
        if (!value && items) {
            items = [
                {
                    key: '',
                    label: '',
                }
            ].concat(items);
        }
        return (React.createElement(SelectContainer, null,
            React.createElement(Label, { htmlFor: this.state.id, optional: optional }, label),
            React.createElement(SelectFieldContainer, { hasError: Boolean(error) },
                React.createElement(SelectField, { id: this.state.id, disabled: disabled, value: value ? value : '', onChange: onChange }, items ? (items.map(function (item) { return (React.createElement("option", { key: item.key ? item.key : item.label, value: item.key ? item.key : item.label }, item.label)); })) : (React.createElement("option", { disabled: true })))),
            error && typeof error === 'string' && React.createElement(Alert, { type: "error", message: error, alertSize: "small" })));
    };
    Select.displayName = 'Collector.Select';
    return Select;
}(React.Component));
export { Select };
//# sourceMappingURL=index.js.map