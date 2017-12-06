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
import { Checkbox } from './';
import { Alert } from '../Alert';
import { Label } from '../Label';
var CheckboxGroupContainer = glamorous.div({
    marginBottom: '1.25em',
});
var CheckboxList = glamorous.ul({
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
var CheckboxGroup = /** @class */ (function (_super) {
    __extends(CheckboxGroup, _super);
    function CheckboxGroup() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            name: uniqid(),
        };
        _this.handleChange = function (key, event) {
            _this.props.onChange(key, event.currentTarget.checked);
        };
        _this.isChecked = function (optionId) {
            if (_this.props.checked) {
                return _this.props.checked.some(function (x) { return x === optionId; });
            }
            else {
                return false;
            }
        };
        return _this;
    }
    CheckboxGroup.prototype.render = function () {
        var _this = this;
        var _a = this.props, label = _a.label, items = _a.items, disabled = _a.disabled, optional = _a.optional, error = _a.error;
        return (React.createElement(CheckboxGroupContainer, null,
            React.createElement(Label, { optional: optional }, label),
            React.createElement(CheckboxList, null, items.map(function (item) { return (React.createElement("li", { key: item.key },
                React.createElement(Checkbox, { label: item.label, name: _this.state.name, checked: _this.isChecked(item.key), disabled: disabled, onChange: function (event) { return _this.handleChange(item.key, event); } }),
                React.createElement(Collapse, { isOpen: _this.isChecked(item.key), className: "" + transition },
                    React.createElement(KidsContainer, null, item.child)))); })),
            error && typeof error === 'string' && React.createElement(Alert, { type: "error", message: error, alertSize: "small" })));
    };
    CheckboxGroup.displayName = 'Collector.CheckboxGroup';
    return CheckboxGroup;
}(React.Component));
export { CheckboxGroup };
//# sourceMappingURL=CheckboxGroup.js.map