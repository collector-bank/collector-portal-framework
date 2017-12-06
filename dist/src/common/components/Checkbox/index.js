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
var checkmark = require('./checkmark.svg');
var CheckboxContainer = glamorous.div({
    display: 'flex',
    marginBottom: 8,
}, function (_a) {
    var disabled = _a.disabled;
    return ({
        opacity: disabled ? 0.5 : 1,
    });
});
var Input = glamorous.input({
    appearance: 'none',
    position: 'relative',
    background: 'none',
    border: '1px solid currentColor',
    width: 20,
    height: 20,
    flexShrink: 0,
    borderRadius: borderRadius.small,
    marginRight: '1em',
    transition: 'border-color 150ms',
    '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        backgroundSize: '75%',
        transition: 'background 150ms',
    },
    '&:checked': {
        borderColor: colors.purple,
    },
    '&:checked:after': {
        backgroundImage: "url(" + checkmark + ")",
        backgroundColor: colors.purple,
    },
    '&:disabled': {
        borderColor: colors.darkGray,
        opacity: 0.6,
    },
});
var Checkbox = /** @class */ (function (_super) {
    __extends(Checkbox, _super);
    function Checkbox() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            id: uniqid(),
        };
        return _this;
    }
    Checkbox.prototype.render = function () {
        var _a = this.props, label = _a.label, name = _a.name, checked = _a.checked, disabled = _a.disabled, onChange = _a.onChange;
        return (React.createElement(CheckboxContainer, { disabled: disabled },
            React.createElement(Input, { type: "checkbox", id: this.state.id, name: name, checked: checked, disabled: disabled, onChange: onChange }),
            React.createElement("label", { htmlFor: this.state.id }, label)));
    };
    Checkbox.displayName = 'Collector.Checkbox';
    return Checkbox;
}(React.Component));
export { Checkbox };
//# sourceMappingURL=index.js.map