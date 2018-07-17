import * as React from 'react';
import glamorous, { CSSProperties } from 'glamorous';
import { keyframes } from 'glamor';

const SpinnerElement = (props: {}) => <div {...props} />;

const fadeIn = keyframes({
    '0%': { opacity: 0 },
    '100%': { opacity: 1 },
});

export interface SpinnerProps {
    size?: number;
    centered?: boolean;
}

export const Spinner: any = glamorous<SpinnerProps>(SpinnerElement, { rootEl: 'div' })(
    {
        display: 'inline-block',
        backgroundSize: '100%',
        backgroundUrl:
            'url(data:image/svg+xml;base64,ICAgIDxzdmcgd2lkdGg9IjgwIiBoZWlnaHQ9IjgwIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHJvbGU9InByb2dyZXNzYmFyIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPg0KICAgICAgICA8cGF0aCBmaWxsPSJub25lIiBkPSJNMCAwaDEwMHYxMDBoLTEwMHoiIC8+DQogICAgICAgIDxjaXJjbGUgY3g9IjUwIiBjeT0iNTAiIHI9IjQwIiBmaWxsPSJub25lIiAvPg0KICAgICAgICA8Y2lyY2xlIGN4PSI1MCIgY3k9IjUwIiByPSI0MCIgc3Ryb2tlPSIjODMyMEM2IiBzdHJva2Utd2lkdGg9IjYiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgZmlsbD0ibm9uZSI+DQogICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaG9mZnNldCIgZHVyPSIycyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiIGZyb209IjAiIHRvPSI1MDIiIC8+DQogICAgICAgICAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJzdHJva2UtZGFzaGFycmF5IiBkdXI9IjJzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSIgdmFsdWVzPSIxNTAuNiAxMDAuNDsxIDI1MDsxNTAuNiAxMDAuNCIgLz4NCiAgICAgICAgPC9jaXJjbGU+DQogICAgPC9zdmc+)',
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
