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
import * as uniqid from 'uniqid';
import { borderRadius, colors } from '../../../theme';
import { Alert } from '../Alert';
import { Label } from '../Label';
export var InputContainer = glamorous.div({
    maxWidth: 500,
    marginBottom: '1.25em',
});
var inputStyles = {
    font: 'inherit',
    color: 'inherit',
    width: '100%',
    borderRadius: borderRadius.small,
    border: '1px solid',
    padding: 11,
    boxSizing: 'border-box',
    appearance: 'none',
    '&:disabled': {
        background: colors.offWhite,
        borderColor: colors.lightGray,
        opacity: 1,
    },
};
export var InputField = glamorous.input(inputStyles, function (_a) {
    var hasError = _a.hasError;
    return ({
        borderColor: hasError ? colors.red : colors.mediumGray,
        backgroundColor: hasError ? '#FFFCFC' : 'transparent',
    });
});
var Textarea = glamorous.textarea(__assign({}, inputStyles, { resize: 'vertical', minHeight: 80 }), function (_a) {
    var hasError = _a.hasError;
    return ({
        borderColor: hasError ? colors.red : colors.mediumGray,
    });
});
var Input = /** @class */ (function (_super) {
    __extends(Input, _super);
    function Input() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            id: uniqid(),
        };
        return _this;
    }
    Input.prototype.render = function () {
        var _a = this.props, label = _a.label, value = _a.value, error = _a.error, multiline = _a.multiline, optional = _a.optional, onChange = _a.onChange;
        return (React.createElement(InputContainer, null,
            label && React.createElement(Label, { htmlFor: this.state.id, optional: optional, error: Boolean(error) }, label),
            multiline ? (React.createElement(Textarea, __assign({ id: this.state.id, value: value, hasError: Boolean(error), "aria-invalid": Boolean(error), onChange: onChange }, this.props))) : (React.createElement(InputField, __assign({ id: this.state.id, value: value, hasError: Boolean(error), "aria-invalid": Boolean(error), onChange: onChange }, this.props))),
            error && typeof error === 'string' && React.createElement(Alert, { type: "error", message: error, alertSize: "small" })));
    };
    Input.displayName = 'Collector.Input';
    return Input;
}(React.Component));
export { Input };
//# sourceMappingURL=index.js.map