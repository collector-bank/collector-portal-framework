/// <reference types="react" />
import * as React from 'react';
export interface ValueListProps {
    items: InfoItem[];
}
export interface InfoItem {
    heading: string;
    value: string | string[];
}
export declare const ValueList: React.StatelessComponent<ValueListProps>;
