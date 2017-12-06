/// <reference types="react" />
import * as React from 'react';
export interface SelectItem {
    key?: string;
    label: string;
}
export interface SelectProps {
    label?: string;
    disabled?: boolean;
    error?: string | boolean;
    optional?: boolean;
    items?: SelectItem[];
    value?: string;
    onChange: (event: React.FormEvent<HTMLSelectElement>) => void;
}
export interface SelectState {
    id: string;
}
export declare class Select extends React.Component<SelectProps, SelectState> {
    static displayName: string;
    state: SelectState;
    render(): JSX.Element;
}
