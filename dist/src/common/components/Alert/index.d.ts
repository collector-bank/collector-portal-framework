/// <reference types="react" />
import * as React from 'react';
export declare type Size = 'small' | 'large';
export declare type Type = 'error' | 'warning' | 'info' | 'success';
export interface Props {
    message?: string;
    type: Type;
    alertSize?: Size;
    fadeIn?: boolean;
}
export declare const Alert: React.StatelessComponent<Props>;
