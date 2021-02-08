import * as React from 'react';
import { Link } from 'react-router-dom';
import { svg } from './portalIcons';
import { PortalMenuItem } from './portalMenu';

export interface PortalTopMenuProps {
    submenu: PortalMenuItem[],
    nrOfUnreadMessages: number,
}

export const PortalTopMenu: React.FC<PortalTopMenuProps> = ({
    submenu,
    nrOfUnreadMessages
}) => {
    const getTopIconItem = (menuItem: PortalMenuItem, index: number) => {
        if (menuItem.hasExternalUrl) {
            return (
                <a className="cui-menu-btn" href={menuItem.url} key={index}>
                    {getTopIconContent(menuItem)}
                </a>
            );
        } else {
            return (
                <Link className="cui-menu-btn" to={menuItem.url} key={index}>
                    {getTopIconContent(menuItem)}
                </Link>
            );
        }
    };

    const getTopIconContent = (menuItem: PortalMenuItem) => {
        return <>
            {menuItem.hasOwnProperty('isMsg')
            && menuItem.isMsg
            && nrOfUnreadMessages > 0
                ? <span className="cui-msg">{nrOfUnreadMessages}</span>
                : ''}
            {svg.securemsgIcon}
        </>
    }

    return <>
        {submenu && submenu.map((menuItem, i) => (
            getTopIconItem(menuItem, i)
        ))}
    </>

};

