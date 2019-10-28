import React from 'react';
import ReactModal from 'react-modal';
import { Global, ClassNames } from '@emotion/core';
import { borderRadius, colors, breakpoints } from '../../themes/collector';

const rootElement = document.getElementById('root') as HTMLElement;

if (rootElement) {
    ReactModal.setAppElement(rootElement);
}

const transitionTime = 300;

export const Modal: React.FC<any> = props => (
    <>
        <Global
            styles={{
                '.ReactModal__Body--open': {
                    overflow: 'hidden',
                    touchAction: 'none',
                },
            }}
        />
        <ClassNames>
            {({ css }) => (
                <ReactModal
                    {...props}
                    closeTimeoutMS={transitionTime + 50}
                    shouldCloseOnOverlayClick={true}
                    ariaHideApp={rootElement == null ? false : undefined}
                    className={{
                        base: css({
                            background: colors.white,
                            boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.2)',
                            outline: 'none',
                            overflow: 'auto',
                            WebkitOverflowScrolling: 'touch',
                            padding: '40px',
                            borderRadius: borderRadius.small,
                            boxSizing: 'border-box',
                            maxHeight: 'calc(100vh - 11px)', // For the margin top to align nicely
                            maxWidth: 'calc(100vw - 16px)', // 8px margin on each side
                            marginTop: 8,
                            transition: `transform ${transitionTime}ms ease-out`,
                            transform: 'translateY(-30px)',

                            [breakpoints.mobileAndLower]: {
                                padding: 24,
                            },
                        }),

                        afterOpen: css({
                            transform: 'translateY(0)',
                        }),

                        beforeClose: css({
                            transition: `transform ${transitionTime}ms ease-in`,
                            transform: 'translateY(-30px)',
                        }),
                    }}
                    overlayClassName={{
                        base: css({
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
                        }),

                        afterOpen: css({
                            'body &': {
                                opacity: 1,
                            },
                        }),

                        beforeClose: css({
                            'body &': {
                                opacity: 0,
                            },
                        }),
                    }}
                >
                    {props.children}
                </ReactModal>
            )}
        </ClassNames>
    </>
);
