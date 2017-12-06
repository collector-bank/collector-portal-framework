/// <reference types="react" />
import * as React from 'react';
export interface TogglableProps {
    title: string;
}
export interface TogglableState {
    isExpanded: boolean;
    id: string;
}
export declare class Togglable extends React.Component<TogglableProps, TogglableState> {
    state: TogglableState;
    private toggle;
    render(): JSX.Element;
}
