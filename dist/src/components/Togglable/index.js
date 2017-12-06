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
import * as uniqid from 'uniqid';
import { css } from 'glamor';
import { colors } from '../../theme';
import { H2 } from '../../components';
var expandIcon = require('./expand.svg');
var collapseIcon = require('./collapse.svg');
var Container = glamorous.div({
    borderTop: "1px solid " + colors.lightGray,
    borderBottom: '1px solid',
    transition: 'border-color 200ms linear',
    padding: '16px 0',
    maxWidth: 900,
}, function (_a) {
    var expanded = _a.expanded;
    return ({
        borderBottomColor: expanded ? 'transparent' : colors.lightGray,
    });
});
var Header = glamorous.div({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    '> *': {
        margin: 0,
    },
});
var ToggleButton = glamorous.button({
    fontFamily: 'inherit',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 0,
    width: 24,
    height: 24,
    marginRight: 12,
}, function (_a) {
    var expanded = _a.expanded;
    return ({
        backgroundImage: expanded ? "url(" + collapseIcon + ")" : "url(" + expandIcon + ")",
    });
});
var transition = css({
    transition: 'height 150ms',
});
var Togglable = /** @class */ (function (_super) {
    __extends(Togglable, _super);
    function Togglable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            isExpanded: false,
            id: uniqid(),
        };
        _this.toggle = function () {
            _this.setState(function (prevState) { return ({
                isExpanded: !prevState.isExpanded,
            }); });
        };
        return _this;
    }
    Togglable.prototype.render = function () {
        var _a = this.props, children = _a.children, title = _a.title;
        return (React.createElement(Container, { expanded: this.state.isExpanded },
            React.createElement(Header, { onClick: this.toggle, "aria-expanded": this.state.isExpanded, "aria-controls": this.state.id },
                React.createElement(ToggleButton, { expanded: this.state.isExpanded }),
                React.createElement(H2, null, title)),
            React.createElement(Collapse, { isOpen: this.state.isExpanded, className: "" + transition },
                React.createElement("div", { id: this.state.id }, children))));
    };
    return Togglable;
}(React.Component));
export { Togglable };
//# sourceMappingURL=index.js.map