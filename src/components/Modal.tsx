import * as React from 'react';
import * as ReactModal from 'react-modal';
import glamorous, { GlamorousComponent } from 'glamorous';
import { css } from 'glamor';

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
    background: 'rgba(255, 255, 255, .97)',
    display: 'flex',
    justifyContent: 'center',

    transition: `opacity ${transitionTime}ms ease-in-out`,
    opacity: 0,
});

const overlayAfterOpen = css({
    'body &': {
        opacity: 1,
    }
});

const overlayBeforeClose = css({
    opacity: 0,
});

const content = css({
    outline: 'none',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    padding: '15vh 20px 40px',
    maxHeight: 'calc(100vh - 15vh - 20px)', // the 15vh and 20px is to compensate for the padding

    transition: `transform ${transitionTime}ms ease-out`,
    transform: 'translateY(-30px)',
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

export const Modal: React.StatelessComponent<ReactModal.Props> = props => (
    <ReactModal
        {...props}
        closeTimeoutMS={transitionTime + 50}
        shouldCloseOnOverlayClick={false}
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
