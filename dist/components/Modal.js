var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import * as React from 'react';
import * as ReactModal from 'react-modal';
import glamorous from 'glamorous';
import { css } from 'glamor';
var rootElement = document.getElementById('root');
if (rootElement) {
    ReactModal.setAppElement(rootElement);
}
var transitionTime = 300;
css.global('.ReactModal__Body--open', {
    overflow: 'hidden',
    touchAction: 'none',
});
var overlay = css({
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(255, 255, 255, .97)',
    display: 'flex',
    justifyContent: 'center',
    transition: "opacity " + transitionTime + "ms ease-in-out",
    opacity: 0,
});
var overlayAfterOpen = css({
    opacity: 1,
});
var overlayBeforeClose = css({
    opacity: 0,
});
var content = css({
    outline: 'none',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    padding: '15vh 20px 40px',
    maxHeight: 'calc(100vh - 15vh - 20px)',
    transition: "transform " + transitionTime + "ms ease-out",
    transform: 'translateY(-30px)',
});
var contentAfterOpen = css({
    transform: 'translateY(0)',
});
var contentBeforeClose = css({
    transition: "transform " + transitionTime + "ms ease-in",
    transform: 'translateY(-30px)',
});
export var ModalBodyContainer = glamorous.div({
    marginBottom: 24,
});
export var Modal = function (props) { return (React.createElement(ReactModal, __assign({}, props, { closeTimeoutMS: transitionTime + 50, shouldCloseOnOverlayClick: false, className: {
        base: "" + content,
        afterOpen: "" + contentAfterOpen,
        beforeClose: "" + contentBeforeClose,
    }, overlayClassName: {
        base: "" + overlay,
        afterOpen: "" + overlayAfterOpen,
        beforeClose: "" + overlayBeforeClose,
    } }), props.children)); };
//# sourceMappingURL=Modal.js.map