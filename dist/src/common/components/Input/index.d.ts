/// <reference types="react" />
import * as React from 'react';
import { GlamorousComponent } from 'glamorous';
export declare const InputContainer: GlamorousComponent<React.HTMLProps<HTMLDivElement>, {}>;
export declare const InputField: GlamorousComponent<{
    hasError?: boolean | undefined;
} & React.HTMLProps<HTMLInputElement>, {
    hasError?: boolean | undefined;
}>;
export interface InputProps {
    label?: string;
    value?: string;
    placeholder?: string;
    multiline?: boolean;
    disabled?: boolean;
    error?: string | boolean;
    maxLength?: number;
    pattern?: string;
    name?: string;
    optional?: boolean;
    onChange?: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
export interface InputState {
    id: string;
}
export declare class Input extends React.Component<InputProps, InputState> {
    static displayName: string;
    state: InputState;
    render(): JSX.Element;
}
