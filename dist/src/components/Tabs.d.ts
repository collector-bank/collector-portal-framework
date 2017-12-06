/// <reference types="react" />
import * as React from 'react';
export interface TabsProps {
    items: TabItem[];
}
export interface TabItem {
    path: string;
    label: string;
}
export declare const Tabs: React.StatelessComponent<TabsProps>;
