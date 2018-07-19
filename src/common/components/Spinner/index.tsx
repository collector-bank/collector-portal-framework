import * as React from 'react';
import glamorous, { CSSProperties } from 'glamorous';
import { keyframes } from 'glamor';

const spinnerIcon = "'data:image/svg+xml, %3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22 preserveAspectRatio=%22xMidYMid%22%3E%3Cpath fill=%22none%22 d=%22M0 0h100v100h-100z%22 /%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2240%22 fill=%22none%22 /%3E%3Ccircle cx=%2250%22 cy=%2250%22 r=%2240%22 stroke=%22%236B1FAF%22 stroke-width=%226%22 stroke-linecap=%22round%22 fill=%22none%22%3E%3Canimate attributeName=%22stroke-dashoffset%22 dur=%222s%22 repeatCount=%22indefinite%22 from=%220%22 to=%22502%22 /%3E%3Canimate attributeName=%22stroke-dasharray%22 dur=%222s%22 repeatCount=%22indefinite%22 values=%22150.6 100.4;1 250;150.6 100.4%22 /%3E%3C/circle%3E%3C/svg%3E'";

const SpinnerElement = (props: {}) => <div role="progressbar" {...props} />;

const fadeIn = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});

export interface SpinnerProps {
    size?: number;
    centered?: boolean;
    color?: string;
}

export const Spinner: any = glamorous<SpinnerProps>(SpinnerElement, { rootEl: 'div' })(
    {
        display: 'inline-block',
        background: `url(${spinnerIcon}) no-repeat`,
        bakcgroundSize: '100%',
        animation: `${fadeIn} 250ms ease-in-out`,
    },
    ({ size = 80, centered = false }) => {
        const styles: CSSProperties = {
            width: size,
            height: size,
        };

        if (centered) {
            styles.position = 'absolute';
            styles.top = `calc(50% - ${size / 2}px)`;
            styles.left = `calc(50% - ${size / 2}px)`;
        }

        return styles;
    }
);

Spinner.displayName = 'Collector.Spinner';
