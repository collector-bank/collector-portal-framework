import React from 'react';

export const SpinnerIcon: React.StatelessComponent<{}> = () => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
        <path fill="none" d="M0 0h100v100h-100z" />
        <circle cx="50" cy="50" r="40" fill="none" />
        <circle cx="50" cy="50" r="40" stroke="#6B1FAF" strokeWidth="6" strokeLinecap="round" fill="none">
            <animate attributeName="stroke-dashoffset" dur="2s" repeatCount="indefinite" from="0" to="502" />
            <animate attributeName="stroke-dasharray" dur="2s" repeatCount="indefinite" values="150.6 100.4;1 250;150.6 100.4" />
        </circle>
    </svg>
);
