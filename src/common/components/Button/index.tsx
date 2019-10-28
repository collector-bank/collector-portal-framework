import React, { forwardRef, HTMLAttributes } from 'react';
import { CSSObject } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import { lighten, darken } from 'polished';
import { Theme } from '../../../themes';
import styled from '../../../';
import { SpinnerSvg } from '../Spinner';

export type ButtonKind = 'primary' | 'secondary' | 'secondaryNegative' | 'success' | 'warn' | 'text' | 'cta';
export type ButtonSize = 'small' | 'medium' | 'large';
export type IconAlignment = 'start' | 'end';

export interface ButtonProps {
    name?: string;
    value?: string;
    size?: ButtonSize;
    icon?: JSX.Element;
    kind?: ButtonKind;
    iconAlignment?: IconAlignment;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
}

// Loading is a html attribute and throws an error if we use it
const ButtonElement = styled.button<ButtonProps & { buttonLoading?: boolean }>(({ size, kind, buttonLoading: loading, icon, theme }) => {
    const styles: CSSObject = {
        fontFamily: 'inherit',
        whiteSpace: 'nowrap',
        textDecoration: 'none',
        textAlign: 'center',
        overflow: 'hidden',
        border: 0,
        borderRadius: theme.borderRadius.small,
        transition: 'background-color 100ms',
        pointerEvents: loading ? 'none' : undefined,
        position: loading ? 'relative' : 'initial',

        '&:disabled': {
            backgroundColor: theme.colors.disabledBackground,
            color: theme.colors.disabledText,
        },

        '&:not(:disabled)': {
            cursor: 'pointer',
        },

        '> div': {
            // all content but the spinner
            visibility: loading ? 'hidden' : undefined,
            display: icon ? 'flex' : undefined,
            alignItems: icon ? 'center' : undefined,
            justifyContent: icon ? 'center' : undefined,
        },

        '> svg': {
            // the spinner
            display: loading ? 'flex' : 'none',
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
        },

        ...getSizeStyles(theme, size),
        ...getKindStyles(theme, kind),
    };

    return styles;
});

const getKindStyles = (theme: Theme, kind?: ButtonKind) => {
    switch (kind) {
        case 'warn':
            return {
                ...background(theme.colors.red),
                color: theme.colors.white,
            };
        case 'secondary':
            return {
                ...background(theme.colors.offWhite),
                color: theme.colors.black,

                '&:hover:not(:disabled)': {
                    backgroundColor: lighten(0.02, theme.colors.offWhite),
                },

                '&:focus:not(:disabled)': {
                    backgroundColor: darken(0.02, theme.colors.offWhite),
                },

                '&:active:not(:disabled)': {
                    backgroundColor: darken(0.04, theme.colors.offWhite),
                },
            };
        case 'text':
            return {
                backgroundColor: 'transparent',
                color: theme.colors.darkIndigo,

                minWidth: 0,
                paddingLeft: 12,
                paddingRight: 12,

                '&:hover:not(:disabled)': {
                    color: theme.colors.purple,
                },

                '&:active:not(:disabled)': {
                    color: theme.colors.purple,
                },

                '&:disabled': {
                    backgroundColor: 'transparent',
                },
            };
        case 'secondaryNegative':
            return {
                ...background(theme.colors.white),
                color: theme.colors.black,

                '&:hover:not(:disabled)': {
                    backgroundColor: darken(0.02, theme.colors.white),
                },

                '&:active:not(:disabled)': {
                    backgroundColor: darken(0.04, theme.colors.white),
                },
            };
        case 'success':
            return {
                ...background(theme.colors.green),
                color: theme.colors.white,
            };
        case 'cta':
            return {
                ...background(theme.colors.purple),
                color: theme.colors.white,
            };
        case 'primary':
        default:
            return {
                ...background(theme.colors.lavender),
                color: theme.colors.purple,

                '&:hover:not(:disabled)': {
                    backgroundColor: lighten(0.01, theme.colors.lavender),
                },

                '&:focus:not(:disabled)': {
                    backgroundColor: darken(0.01, theme.colors.lavender),
                },

                '&:active:not(:disabled)': {
                    backgroundColor: darken(0.02, theme.colors.lavender),
                },
            };
    }
};

const getSizeStyles = (theme: Theme, size?: ButtonSize): CSSObject => {
    const small: CSSObject = {
        fontSize: 14,
        lineHeight: 1.5,
        fontWeight: 300,
        paddingTop: 6,
        paddingBottom: 6,
        paddingLeft: 20,
        paddingRight: 20,
    };

    const medium: CSSObject = {
        fontSize: 16,
        lineHeight: 1.5,
        fontWeight: 300,
        minWidth: 120,
        paddingTop: 8,
        paddingBottom: 8,
        paddingLeft: 24,
        paddingRight: 24,
    };

    const large: CSSObject = {
        fontSize: 16,
        lineHeight: 1.5,
        fontWeight: 300,
        minWidth: 160,
        paddingLeft: 32,
        paddingRight: 32,
    };

    switch (size) {
        case 'small':
            return small;
        case 'large':
            return {
                ...large,
                [theme.breakpoints.mobileAndLower]: medium,
            };
        case 'medium':
        default:
            return medium;
    }
};

const background = (backgroundColor: string): CSSObject => ({
    backgroundColor,

    '&:hover:not(:disabled)': {
        backgroundColor: lighten(0.06, backgroundColor),
    },

    '&:focus:not(:disabled)': {
        backgroundColor: darken(0.08, backgroundColor),
    },

    '&:active:not(:disabled)': {
        backgroundColor: darken(0.1, backgroundColor),
    },
});

const IconContainer = styled.span<{ iconAlignment: IconAlignment }>(({ iconAlignment, theme }) => ({
    maxWidth: '1.3em',
    maxHeight: '1.3em',
    marginRight: iconAlignment === 'start' ? '.5em' : 0,
    marginLeft: iconAlignment === 'end' ? '.5em' : 0,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    [theme.breakpoints.mobileAndLower]: {
        maxWidth: '1.5em',
        maxHeight: '1.5em',
    },
}));

const getSpinnerColorByKind = (theme: Theme, kind?: ButtonKind) => {
    switch (kind) {
        case 'warn':
        case 'success':
        case 'cta':
            return theme.colors.white;
        case 'primary':
        case 'secondary':
        case 'secondaryNegative':
        case 'text':
        default:
            return theme.colors.purple;
    }
};

const _Button = forwardRef<HTMLButtonElement, ButtonProps & HTMLAttributes<HTMLButtonElement> & { theme: Theme }>(
    ({ theme, kind, loading, children, icon, iconAlignment = 'start', size, ...rest }, ref) => (
        <ButtonElement aria-busy={loading} buttonLoading={loading} icon={icon} size={size} kind={kind} {...rest} ref={ref}>
            <div>
                {icon && iconAlignment === 'start' && <IconContainer iconAlignment={iconAlignment}>{icon}</IconContainer>}
                {children}
                {icon && iconAlignment === 'end' && <IconContainer iconAlignment={iconAlignment}>{icon}</IconContainer>}
            </div>
            <SpinnerSvg size="75%" color={getSpinnerColorByKind(theme, kind)} />
        </ButtonElement>
    )
);

export const Button = withTheme(_Button);

Button.displayName = 'Collector.Button';
