/// <reference types="react" />
import * as React from 'react';
export interface CheckboxProps {
    label: string | JSX.Element;
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}
export interface CheckboxState {
    id: string;
}
export declare class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    static displayName: string;
    state: CheckboxState;
    render(): JSX.Element;
}
