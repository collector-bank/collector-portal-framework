import React from 'react';
import { keyframes, CSSObject } from '@emotion/core';
import styled from '../../../';
import { Theme } from '../../../themes';

const largeIcons = {
    error: require('./icons/warning-filled.svg'),
    warning: require('./icons/warning.svg'),
    info: require('./icons/info-black.svg'),
    success: require('./icons/success.svg'),
};

const smallIcons = {
    error: require('./icons/warning-red.svg'),
    warning: require('./icons/warning.svg'),
    info: require('./icons/info-black.svg'),
    success: require('./icons/success-black.svg'),
};

interface AlertContainerProps {
    alertSize: AlertSize;
    type: AlertType;
    fadeIn?: boolean;
    wide?: boolean;
}

const AlertContainer = styled.div<AlertContainerProps>(({ type, alertSize, fadeIn, wide, theme }) => ({
    backgroundRepeat: 'no-repeat',
    display: 'inline-block',
    textAlign: 'left',
    boxSizing: 'border-box',
    width: '100%',
    borderRadius: theme.borderRadius.small,
    maxWidth: wide ? undefined : 500,

    ...getStyle(type, alertSize, theme),
    ...getAnimation(fadeIn),

    '> a': {
        color: 'inherit',
    },
}));

const Heading = styled.div({
    fontWeight: 700,
});

const getStyle = (type: AlertType, alertSize: AlertSize, theme: Theme): CSSObject => {
    const backgroundColors = {
        error: theme.colors.red,
        warning: theme.colors.yellow,
        info: theme.colors.offWhite,
        success: theme.colors.green,
    };

    const textColors = {
        error: theme.colors.white,
        warning: theme.colors.black,
        info: theme.colors.black,
        success: theme.colors.white,
    };

    switch (alertSize) {
        case 'small':
            return {
                backgroundPosition: '0 4px',
                backgroundImage: `url(${smallIcons[type]})`,
                backgroundColor: 'transparent',
                color: type === 'error' ? theme.colors.red : undefined,
                fontWeight: 400,
                backgroundSize: '16px 16px',
                padding: 0,
                paddingLeft: 24,
                marginBottom: 0,
            };
        case 'large':
        default:
            return {
                backgroundPosition: '12px 12px',
                backgroundImage: `url(${largeIcons[type]})`,
                backgroundColor: backgroundColors[type],
                color: textColors[type],
                fontWeight: 500,
                backgroundSize: '24px 24px',
                padding: 10,
                paddingLeft: 48,
                marginBottom: '1.25em',
            };
    }
};

const getAnimation = (fadeIn?: boolean): CSSObject => {
    const fadeInFrames = keyframes({
        '0%': { opacity: 0 },
        '10%': { opacity: 1 },
        '90%': { opacity: 1 },
        '100%': { opacity: 0 },
    });

    return fadeIn ? { animation: `${fadeInFrames} 3000ms forwards ease-in-out` } : {};
};

export type AlertSize = 'small' | 'large';
export type AlertType = 'error' | 'warning' | 'info' | 'success';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
    heading?: string;
    message: string | JSX.Element;
    type: AlertType;
    alertSize?: AlertSize;
    fadeIn?: boolean;
    wide?: boolean;
}

export const Alert: React.FC<AlertProps> = ({
    heading,
    message,
    alertSize = 'large' as AlertSize,
    type,
    fadeIn,
    wide,
    ...rest
}) => (
    <AlertContainer role="alert" alertSize={alertSize} type={type} fadeIn={fadeIn} wide={wide} {...rest}>
        {heading && <Heading>{heading}</Heading>}
        {typeof message === 'string' && <span dangerouslySetInnerHTML={{ __html: message }} />}
        {typeof message !== 'string' && message}
    </AlertContainer>
);

Alert.displayName = 'Collector.Alert';
