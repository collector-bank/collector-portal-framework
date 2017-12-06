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
import { colors } from '../../../theme';
var RadioButtonContainer = glamorous.div({
    display: 'flex',
    marginBottom: 8,
}, function (_a) {
    var disabled = _a.disabled;
    return (disabled ? { opacity: 0.5 } : {});
});
var Input = glamorous.input({
    appearance: 'none',
    position: 'relative',
    background: 'none',
    border: '1px solid currentColor',
    width: 20,
    height: 20,
    flexShrink: 0,
    borderRadius: '100%',
    marginRight: '1em',
    transition: 'border-color 150ms',
    '&:after': {
        content: '""',
        position: 'absolute',
        top: 3,
        bottom: 3,
        left: 3,
        right: 3,
        borderRadius: '100%',
        transition: 'background-color 150ms',
    },
    '&:checked': {
        borderColor: colors.purple,
    },
    '&:checked:after': {
        backgroundColor: colors.purple,
    },
    '&:disabled': {
        borderColor: colors.darkGray,
        backgroundColor: colors.lightGray,
    },
    '&:disabled:checked:after': {
        backgroundColor: colors.darkGray,
    },
});
var RadioButton = /** @class */ (function (_super) {
    __extends(RadioButton, _super);
    function RadioButton() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            id: uniqid(),
        };
        return _this;
    }
    RadioButton.prototype.render = function () {
        var _a = this.props, label = _a.label, name = _a.name, selected = _a.selected, disabled = _a.disabled, onChange = _a.onChange;
        return (React.createElement(RadioButtonContainer, { disabled: disabled },
            React.createElement(Input, { type: "radio", id: this.state.id, name: name, checked: selected, disabled: disabled, onChange: onChange }),
            React.createElement("label", { htmlFor: this.state.id }, label)));
    };
    RadioButton.displayName = 'Collector.RadioButton';
    return RadioButton;
}(React.Component));
export { RadioButton };
//# sourceMappingURL=index.js.map