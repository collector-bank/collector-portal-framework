import * as React from 'react';
import { getIcon } from './PortalAsideMenuItem';
import { PortalMenuItem } from './portalMenu';

export interface PortalAsideMenuItemProps {
    isActive: boolean,
    menuItem: PortalMenuItem,
    onClick: (event: any) => void,
}

export const PortalAsideDropdown: React.FC<PortalAsideMenuItemProps> = ({
    isActive,
    menuItem,
    onClick
}) => {
    const onClickDropdown = (PortalMenuItem: PortalMenuItem): void => {
        onClick(PortalMenuItem);
    };

    return (
        <button className={`cui-nav-item ${isActive ? 'cui-is-open' : ''}`}
                onClick={() => onClickDropdown(menuItem)}>
            {getIcon(menuItem.icon)}
            <div className="cui-content">{isActive}{menuItem.label}</div>
        </button>
    )
};

