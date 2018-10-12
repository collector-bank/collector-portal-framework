import * as React from 'react';
import * as ReactModal from 'react-modal';
import glamorous, { GlamorousComponent } from 'glamorous';
import { css } from 'glamor';
import { borderRadius, colors, breakpoints } from '../themes/collector';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
    ReactModal.setAppElement(rootElement);
}

const transitionTime = 300;

css.global('.ReactModal__Body--open', {
    overflow: 'hidden',
    touchAction: 'none',
});

const overlay = css({
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    background: 'rgba(0, 0, 0, .3)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 999,

    transition: `opacity ${transitionTime}ms ease-in-out`,
    opacity: 0,
});

const overlayAfterOpen = css({
    'body &': {
        opacity: 1,
    },
});

const overlayBeforeClose = css({
    'body &': {
        opacity: 0,
    },
});

const content = css({
    background: colors.white,
    boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.2)',
    outline: 'none',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    padding: '40px',
    borderRadius: borderRadius.small,
    boxSizing: 'border-box',
    maxHeight: 'calc(100vh - 80px)',
    maxWidth: 'calc(100vw - 32px)',

    transition: `transform ${transitionTime}ms ease-out`,
    transform: 'translateY(-30px)',

    [breakpoints.mobileAndLower]: {
        padding: 24,
    },
});

const contentAfterOpen = css({
    transform: 'translateY(0)',
});

const contentBeforeClose = css({
    transition: `transform ${transitionTime}ms ease-in`,
    transform: 'translateY(-30px)',
});

export const ModalBodyContainer: GlamorousComponent<React.HTMLProps<HTMLDivElement>, {}> = glamorous.div({
    marginBottom: 24,
});

export const Modal: React.StatelessComponent<any> = props => (
    <ReactModal
        {...props}
        closeTimeoutMS={transitionTime + 50}
        shouldCloseOnOverlayClick={true}
        className={{
            base: `${content}`,
            afterOpen: `${contentAfterOpen}`,
            beforeClose: `${contentBeforeClose}`,
        }}
        overlayClassName={{
            base: `${overlay}`,
            afterOpen: `${overlayAfterOpen}`,
            beforeClose: `${overlayBeforeClose}`,
        }}
    >
        {props.children}
    </ReactModal>
);
