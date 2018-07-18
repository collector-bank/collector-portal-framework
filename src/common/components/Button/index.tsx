import * as React from 'react';
import glamorous, { CSSProperties } from 'glamorous';
import { colors, breakpoints } from '../../../theme';
import { lighten } from 'polished';

/**
 * The SVG was made with http://loading.io
 */

const spinner = (color: string) =>
    `'data:image/svg+xml,%3Csvg width=%2280%22 height=%2280%22 xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22 preserveAspectRatio=%22xMidYMid%22 class=%22uil-ring-alt%22%3E%3Cpath class=%22bk%22 fill=%22none%22 d=%22M0 0h100v100h-100z%22/%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22/%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2240%22 stroke=%22${encodeURIComponent(color)}%22 stroke-width=%226%22 stroke-linecap=%22round%22 fill=%22none%22%3E%3Canimate attributeName=%22stroke-dashoffset%22 dur=%222s%22 repeatCount=%22indefinite%22 from=%220%22 to=%22502%22/%3E%3Canimate attributeName=%22stroke-dasharray%22 dur=%222s%22 repeatCount=%22indefinite%22 values=%22150.6 100.4;1 250;150.6 100.4%22/%3E%3C/circle%3E%3C/svg%3E'`;

const whiteSpinner = spinner(colors.white);
const purpleSpinner = spinner(colors.purple);

export type ButtonType = 'primary' | 'secondary' | 'warn' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    icon?: JSX.Element;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
}

const ButtonElement: any = glamorous.button<ButtonProps>(
    {
        fontFamily: 'inherit',
        whiteSpace: 'nowrap',
        textDecoration: 'none',
        textAlign: 'center',
        overflow: 'hidden',
        border: 0,
        borderRadius: 50,
        transition: 'background-color 100ms',

        '&:disabled': {
            backgroundColor: colors.mediumGray,
            color: colors.lightGray,
        },

        '&:not(:disabled)': {
            cursor: 'pointer',
        },
    },
    ({ size, type, loading, icon }) => {
        const styles: CSSProperties = {
            ...getSizeStyles(size),
            ...getTypeStyles(type),
            ...getLoadingStyles(loading, type, size),
        };

        if (icon) {
            styles.display = 'flex';
            styles.alignItems = 'center';
            styles.justifyContent = 'center';
        }

        return styles;
    }
);

const getTypeStyles = (type?: ButtonType): CSSProperties => {
    switch (type) {
        case 'warn':
            return {
                ...background(colors.red),
                color: colors.white,
            };
        case 'secondary':
            return {
                ...background(colors.offWhite),
                color: colors.black,
                border: `1px solid ${colors.offWhite}`,

                '&:hover:not(:disabled)': {
                    backgroundColor: lighten(0.02, colors.offWhite),
                },

                '&:active:not(:disabled)': {
                    backgroundColor: lighten(0.04, colors.offWhite),
                },
            };
        case 'text':
            return {
                backgroundColor: 'transparent',
                color: colors.purple,

                minWidth: 0,
                paddingLeft: 12,
                paddingRight: 12,

                '&:hover:not(:disabled)': {
                    color: lighten(0.1, colors.purple),
                    textDecoration: 'underline',
                },

                '&:active:not(:disabled)': {
                    color: lighten(0.2, colors.purple),
                },

                '&:disabled': {
                    backgroundColor: 'transparent',
                },
            };
        case 'primary':
        default:
            return {
                ...background(colors.purple),
                color: colors.white,
            };
    }
};

const getSizeStyles = (size?: ButtonSize): CSSProperties => {
    const medium: CSSProperties = {
        fontSize: 18,
        lineHeight: '24px',
        fontWeight: 500,
        minWidth: 160,
        paddingTop: 12,
        paddingBottom: 12,
        paddingLeft: 24,
        paddingRight: 24,
    };

    switch (size) {
        case 'small':
            return {
                fontSize: 16,
                lineHeight: '24px',
                fontWeight: 500,
                minWidth: 80,
                paddingTop: 4,
                paddingBottom: 4,
                paddingLeft: 12,
                paddingRight: 12,
            };
        case 'large':
            return {
                fontSize: 21,
                lineHeight: '32px',
                fontWeight: 500,
                minWidth: 200,
                paddingTop: 12,
                paddingBottom: 12,
                paddingLeft: 32,
                paddingRight: 32,

                [breakpoints.mobileAndLower]: medium,
            };
        case 'medium':
        default:
            return medium;
    }
};

const getLoadingStyles = (loading?: boolean, type?: ButtonType, size?: ButtonSize): CSSProperties => {
    let styles: CSSProperties = {};

    if (loading) {
        styles = {
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            pointerEvents: 'none',

            '> span': {
                visibility: 'hidden',
            },
        };

        switch (type) {
            case 'warn':
                styles.backgroundImage = `url(${whiteSpinner})`;
                break;
            case 'secondary':
                styles.backgroundImage = `url(${purpleSpinner})`;
                break;
            case 'text':
                styles.backgroundImage = `url(${purpleSpinner})`;
                break;
            case 'primary':
            default:
                styles.backgroundImage = `url(${whiteSpinner})`;
                break;
        }

        switch (size) {
            case 'small':
                styles.backgroundSize = 22;
                break;
            case 'large':
                styles.backgroundSize = 46;
                break;
            case 'medium':
            default:
                styles.backgroundSize = 36;
                break;
        }
    }

    return styles;
};

const background = (backgroundColor: string): CSSProperties => ({
    backgroundColor,

    '&:hover:not(:disabled)': {
        backgroundColor: lighten(0.1, backgroundColor),
    },

    '&:active:not(:disabled)': {
        backgroundColor: lighten(0.2, backgroundColor),
    },
});

const IconContainer = glamorous.span({
    width: '1.3em',
    height: '1.3em',
    marginRight: '.5em',
});

export const Button: React.StatelessComponent<ButtonProps> = ({ loading, children, icon, size, ...rest }) => {
    return (
        <ButtonElement aria-busy={loading} loading={loading} icon={icon} size={size} {...rest}>
            {icon && <IconContainer>{icon}</IconContainer>}
            <span>{children}</span>
        </ButtonElement>
    );
};

Button.displayName = 'Collector.Button';
