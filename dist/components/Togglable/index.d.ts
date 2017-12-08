/// <reference types="react" />
import * as React from 'react';
export interface TogglableProps {
    title: string;
    defaultExpanded?: boolean;
}
export interface TogglableState {
    isExpanded: boolean;
    id: string;
}
export declare class Togglable extends React.Component<TogglableProps, TogglableState> {
    state: TogglableState;
    componentWillMount(): void;
    private toggle;
    render(): JSX.Element;
}
