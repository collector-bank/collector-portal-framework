import * as React from 'react';
import glamorous, { CSSProperties } from 'glamorous';
import { keyframes } from 'glamor';

/**
 * The SVG was made with http://loading.io
 */
const spinner = require('./spinner.svg');

const Element = (props: {}) => <div role="progressbar" {...props} />;

const fadeIn = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});

export interface SpinnerProps {
    size?: number;
    centered?: boolean;
}

export const Spinner: any = glamorous<SpinnerProps>(Element, { rootEl: 'div' })(
    {
        display: 'inline-block',
        background: `url(${spinner}) no-repeat`,
        backgroundSize: '100%',
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
    },
);

Spinner.displayName = 'Collector.Spinner';
