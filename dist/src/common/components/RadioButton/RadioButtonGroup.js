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
import Collapse from 'react-css-collapse';
import glamorous from 'glamorous';
import { css } from 'glamor';
import * as uniqid from 'uniqid';
import { Alert } from '../Alert';
import { Label } from '../Label';
import { RadioButton } from './';
var RadioButtonGroupContainer = glamorous.div({
    marginBottom: '1.25em',
});
var RadioButtonList = glamorous.ul({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
});
var KidsContainer = glamorous.div({
    overflow: 'hidden',
    marginLeft: 34,
    maxWidth: 500 - 34,
});
var transition = css({
    transition: 'height 150ms',
});
var RadioButtonGroup = /** @class */ (function (_super) {
    __extends(RadioButtonGroup, _super);
    function RadioButtonGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            name: uniqid(),
        };
        _this.handleChange = function (key) {
            _this.props.onChange(key);
        };
        return _this;
    }
    RadioButtonGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, items = _a.items, selected = _a.selected, disabled = _a.disabled, optional = _a.optional, error = _a.error;
        return (React.createElement(RadioButtonGroupContainer, null,
            React.createElement(Label, { optional: optional }, label),
            React.createElement(RadioButtonList, null, items.map(function (item) { return (React.createElement("li", { key: item.key },
                React.createElement(RadioButton, { label: item.label, name: _this.state.name, selected: item.key === selected, disabled: disabled, onChange: function () { return _this.handleChange(item.key); } }),
                React.createElement(Collapse, { isOpen: item.key === selected, className: "" + transition },
                    React.createElement(KidsContainer, null, item.child)))); })),
            error && typeof error === 'string' && React.createElement(Alert, { type: "error", message: error, alertSize: "small" })));
    };
    RadioButtonGroup.displayName = 'Collector.RadioButtonGroup';
    return RadioButtonGroup;
}(React.Component));
export { RadioButtonGroup };
//# sourceMappingURL=RadioButtonGroup.js.map