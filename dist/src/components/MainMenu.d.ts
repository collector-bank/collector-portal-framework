/// <reference types="react" />
import * as React from 'react';
export interface MainMenuProps {
    items: MainMenuItem[];
}
export interface MainMenuItem {
    path: string;
    label: string;
    icon: string;
    onlyInDesktop?: boolean;
    onlyInMobile?: boolean;
    useMarginTop?: boolean;
}
export declare const MainMenu: React.StatelessComponent<MainMenuProps>;
