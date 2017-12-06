/// <reference types="react" />
import * as React from 'react';
export interface RadioButtonProps {
    label: string | JSX.Element;
    name?: string;
    selected?: boolean;
    disabled?: boolean;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}
export interface RadioButtonState {
    id: string;
}
export declare class RadioButton extends React.Component<RadioButtonProps, RadioButtonState> {
    static displayName: string;
    state: RadioButtonState;
    render(): JSX.Element;
}
