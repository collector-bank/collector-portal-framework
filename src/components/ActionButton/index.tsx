import React, { HTMLAttributes } from 'react';
import styled from '../..';
import { darken } from 'polished';

interface ActionButtonProps {
    icon: JSX.Element;
    label: React.ReactNode;
}

const Button = styled.button(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.colors.purple,
    border: 'none',
    background: 'none',
    cursor: 'pointer',

    [theme.breakpoints.mobileAndLower]: {
        flexDirection: 'column',
        width: '33%',
    },

    '> div': {
        transition: 'border-color 150ms ease-in',
        border: '2px solid transparent',
    },

    '&:focus': {
        outline: 'none',

        '> div': {
            borderColor: theme.colors.purple,
        },
    },

    '&:hover': {
        div: {
            background: darken(0.02, theme.colors.lavender),
        },
    },

    '&:active': {
        div: {
            background: darken(0.04, theme.colors.lavender),
        },
    },
}));

const IconSquare = styled.div(({ theme }) => ({
    color: theme.colors.purple,
    background: theme.colors.lavender,
    borderRadius: 16,
    padding: 10, // To account for border 2px
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    [theme.breakpoints.mobileAndLower]: {
        padding: 14, // To account for border 2px
    },
}));

const LabelContainer = styled.span(({ theme }) => ({
    font: theme.fonts.desktop.medium,
    fontWeight: 300,
    lineHeight: 1,
    marginLeft: 12,

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.small,
        fontWeight: 300, // has to be specified twice as font declaration above seems to override it.
        margin: 0,
        marginTop: 8,
    },
}));

const IconContainer = styled.div({
    width: 16,
    height: 16,
});

export const ActionButton: React.FC<ActionButtonProps & HTMLAttributes<HTMLButtonElement>> = ({ icon, label, ...rest }) => {
    return (
        <Button {...rest}>
            <IconSquare>
                <IconContainer>{icon}</IconContainer>
            </IconSquare>

            <LabelContainer>{label}</LabelContainer>
        </Button>
    );
};
