/// <reference types="react" />
import * as React from 'react';
export interface CheckboxItem {
    key: string;
    label: string;
    child?: JSX.Element;
}
export interface CheckboxGroupProps {
    label: string;
    items: CheckboxItem[];
    checked?: string[];
    disabled?: boolean;
    optional?: boolean;
    error?: string | boolean;
    onChange: (key: string, checked: boolean) => void;
}
export interface CheckboxGroupState {
    name: string;
}
export declare class CheckboxGroup extends React.Component<CheckboxGroupProps, CheckboxGroupState> {
    static displayName: string;
    state: CheckboxGroupState;
    private handleChange;
    private isChecked;
    render(): JSX.Element;
}
