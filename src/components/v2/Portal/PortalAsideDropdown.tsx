import * as React from 'react';
import { Link } from 'react-router-dom';
import { getIconBy } from './portalIcons';
import { PortalMenuItem } from './Portal';
import { getIcon } from './PortalAsideMenuItem';
import { useRef } from 'react';

export interface PortalAsideMenuItemProps {
    selectedDropdownIndex: number;
    menuItem: PortalMenuItem,
    index: number,
    onClick: (event) => void,
}

export const PortalAsideDropdown: React.FC<PortalAsideMenuItemProps> = ({
    selectedDropdownIndex,
    menuItem,
    index,
    onClick
}) => {
    const onClickNavDropdown = (index: number) => {
        onClick(index);
    };

    const getMenuItem = () => {
        return (
            <button className={`cui-nav-item ${selectedDropdownIndex === index ? 'cui-is-open' : ''}`}
                    onClick={() => onClickNavDropdown(index)}>
            {getIcon(menuItem.icon)}
            <div className="cui-content">{menuItem.label}</div>
        </button>)
    };

    return (
        getMenuItem()
    );
};

