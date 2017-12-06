/// <reference types="react" />
import * as React from 'react';
export declare type ButtonType = 'primary' | 'secondary' | 'warn' | 'text';
export declare type ButtonSize = 'small' | 'medium' | 'large';
export declare type ButtonIcon = 'bank-id' | 'plus' | 'cross';
export interface ButtonProps {
    type?: ButtonType;
    size?: ButtonSize;
    icon?: ButtonIcon;
    onClick?: () => void;
    disabled?: boolean;
    loading?: boolean;
}
export declare const Button: React.StatelessComponent<ButtonProps>;
