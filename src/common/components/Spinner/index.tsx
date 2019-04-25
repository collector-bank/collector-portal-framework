import React from 'react';
import { keyframes, CSSObject } from '@emotion/core';
import { withTheme } from 'emotion-theming';
import styled from '../../../';
import { Theme } from '../../../themes';

const animation = keyframes({
    '0%': {
        strokeDashoffset: '0',
        strokeDasharray: '150 100',
    },

    '50%': {
        strokeDasharray: '1 250',
    },

    '100%': {
        strokeDashoffset: '502',
        strokeDasharray: '150 100',
    },
});

const AnimatedCircle = styled.circle({
    animation: `${animation} 2s linear infinite`,
    fill: 'none',
});

export const SpinnerSvg: React.StatelessComponent<{ color: string; size: string | number }> = ({ color, size }) => (
    <svg width={size} height={size} viewBox="0 0 100 100">
        <AnimatedCircle cx={50} cy={50} r={40} />
        <AnimatedCircle cx={50} cy={50} r={40} stroke={color} strokeWidth={6} strokeLinecap="round" />
    </svg>
);

const fadeIn = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});

const Container = styled.div<SpinnerProps>(({ size, centered }) => {
    const styles: CSSObject = {
        display: 'inline-block',
        animation: `${fadeIn} 250ms ease-in-out`,
        width: size,
        height: size,
    };

    if (centered) {
        styles.position = 'absolute';
        styles.top = `calc(50% - ${size! / 2}px)`;
        styles.left = `calc(50% - ${size! / 2}px)`;
    }

    return styles;
});

export interface SpinnerProps {
    size?: number;
    centered?: boolean;
}

const Spinner_: React.StatelessComponent<SpinnerProps & { theme: Theme }> = ({ theme, size = 80, centered = false }) => (
    <Container size={size} centered={centered}>
        <SpinnerSvg size={size} color={theme.colors.primary} />
    </Container>
);

export const Spinner = withTheme(Spinner_);

Spinner.displayName = 'Collector.Spinner';
