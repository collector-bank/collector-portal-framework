/// <reference types="react" />
import * as React from 'react';
export interface RadioButtonItem {
    key: string;
    label: string | JSX.Element;
    child?: JSX.Element;
}
export interface RadioButtonGroupProps {
    label: string | JSX.Element;
    items: RadioButtonItem[];
    selected: string;
    disabled?: boolean;
    optional?: boolean;
    error?: string | boolean;
    onChange: (key: string) => void;
}
export interface RadioButtonGroupState {
    name: string;
}
export declare class RadioButtonGroup extends React.Component<RadioButtonGroupProps, RadioButtonGroupState> {
    static displayName: string;
    state: RadioButtonGroupState;
    private handleChange;
    render(): JSX.Element;
}
