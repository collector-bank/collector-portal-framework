import * as React from 'react';
import { Link } from 'react-router-dom';
import { getIconBy } from './portalIcons';
import { PortalMenuItem } from './Portal';
import ReactDOM from 'react-dom'
import { useEffect, useRef } from 'react';

export const getIcon = (icon) => {
    return icon ? (
        <span className="cui-img">
                {getIconBy(icon)}
            </span>
    ) : '';
}

export interface PortalAsideMenuItemProps {
    activeMenuItemUrl: string;
    menuItem: PortalMenuItem,
    nrOfUnreadMessages: number,
    onClick: (event) => void,
}

export const PortalAsideMenuItem: React.FC<PortalAsideMenuItemProps> = ({
    activeMenuItemUrl,
    menuItem,
    nrOfUnreadMessages = 0,
    onClick,
}) => {
    const onClickNavItem = (url: string) => {
        onClick(url);
    };

    const getMenuItem = () => {
        if (menuItem.hasExternalUrl) {
            return (
                <a className="cui-nav-item" href={menuItem.url} tabIndex={0}>
                    {getIcon(menuItem.icon)}
                    <div className="cui-content">{menuItem.label}</div>
                </a>
            );
        } else {
            return (
                <Link className={`cui-nav-item ${activeMenuItemUrl === menuItem.url ? 'cui-is-active' : ''}`}
                      to={menuItem.url} onClick={() => onClickNavItem(menuItem.url)} tabIndex={0}>
                    {getIcon(menuItem.icon)}
                    <div className="cui-content">
                        {menuItem.label}
                        {menuItem.hasOwnProperty('isMsg')
                        && menuItem.isMsg
                        && nrOfUnreadMessages > 0
                            ? <span className="cui-msg">{nrOfUnreadMessages}</span>
                            : ''}
                    </div>
                </Link>
            );
        }
    };

    return (
        getMenuItem()
    );
};

