import React from 'react';
import styled from '../../../';
interface Props {
    visible: boolean;
}

const Outer = styled.div<Props>(({ theme, visible }) => ({
    position: 'absolute',
    zIndex: 20,
    left: -5,
    top: 'calc(100% + 8px)',
    width: 320,
    transitionDuration: '200ms',
    transitionProperty: 'opacity, visibility, transform',

    // the arrow
    '&:before': {
        content: '""',
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        position: 'absolute',
        left: 10,
        top: -5,
        borderBottom: `5px solid ${theme.colors.lightGray}`,
    },
    visibility: visible ? 'visible' : 'hidden',
    opacity: visible ? 1 : 0,
    transform: visible ? 'translateY(0)' : 'translateY(-5px)',

    [theme.breakpoints.mobileAndLower]: {
        top: 'auto',
        left: 8,
        right: 8,
        width: 'auto',

        '&:before': {
            display: 'none',
        },
    },
}));

const Inner = styled.div(({ theme }) => ({
    display: 'inline-block',
    padding: '4px 8px',
    background: theme.colors.lightGray,
    color: theme.colors.black,
    borderRadius: theme.borderRadius.small,
    font: theme.fonts.desktop.small,
    fontWeight: 500,
}));

export const Tooltip: React.StatelessComponent<Props> = ({ visible, children }) => {
    return (
        <Outer visible={visible}>
            <Inner>{children}</Inner>
        </Outer>
    );
};

Tooltip.displayName = 'Collector.Tooltip';
