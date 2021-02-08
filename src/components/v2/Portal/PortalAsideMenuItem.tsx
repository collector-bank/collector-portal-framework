import * as React from 'react';
import { Link } from 'react-router-dom';
import { getIconBy } from './portalIcons';
import { PortalMenuItem } from './portalMenu';

export const getIcon = (icon: any) => {
    return icon ? (
        <span className="cui-img">
                {getIconBy(icon)}
            </span>
    ) : '';
}

export interface PortalAsideMenuItemProps {
    isActive: boolean,
    menuItem: PortalMenuItem,
    onClick: (event: any) => void,
    nrOfUnreadMessages: number,
}

export const PortalAsideMenuItem: React.FC<PortalAsideMenuItemProps> = ({
    isActive,
    menuItem,
    onClick,
    nrOfUnreadMessages = 0,
}) => {
    const onClickMenuItem = (url: string): void => {
        onClick(url);
    };

    const getMenuItemContent = (menuItem: PortalMenuItem): any => {
        return (
            <>
                {getIcon(menuItem.icon)}
                <div className="cui-content">
                    {menuItem.label}
                    {menuItem.hasOwnProperty('isMsg')
                    && menuItem.isMsg
                    && nrOfUnreadMessages > 0
                        ? <span className="cui-msg">{nrOfUnreadMessages}</span>
                        : ''
                    }
                </div>
            </>
        )
    };

    const getMenuItem = () => {
        if (menuItem.hasExternalUrl) {
            return (
                <a className="cui-nav-item" href={menuItem.url}>
                    {getMenuItemContent(menuItem)}
                </a>
            );
        } else {
            return (
                <Link className={`cui-nav-item ${isActive ? 'cui-is-active' : ''}`}
                      to={menuItem.url} onClick={() => onClickMenuItem(menuItem.url)}>
                    {getMenuItemContent(menuItem)}
                </Link>
            );
        }
    };

    return (
        getMenuItem()
    );
};

