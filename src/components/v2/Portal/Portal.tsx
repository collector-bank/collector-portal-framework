import * as React from 'react';
import { useCallback, useEffect, useState } from 'react';
import { svg } from './portalIcons';
import { PortalAsideMenu } from './PortalAsideMenu';

export interface PortalMenu {
    homeUrl: string;
    topItems: PortalMenuItem[];
    asideGeneralItems: PortalMenuItem[];
    asidePortalItems: PortalMenuItem[];
}

export interface PortalMenuItem {
    icon: string;
    url: string;
    label?: string;
    isMsg?: boolean;
    hasExternalUrl?: boolean;
    subpages: PortalMenuItem[];
}

interface PortalProps {
    portalMenu: PortalMenu;
    menuFooter?: JSXElement,
    nrOfUnreadMessages?: number,
}

export const Portal: React.FC<PortalProps> = ({
   portalMenu,
   children,
   menuFooter,
   nrOfUnreadMessages= 0,
}) => {
    const hostname = window.location.hostname;
    const [menuTree, setMenuTree] = useState(null);
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

    const createMenuTreeBy = useCallback((menu: any, hostname: string) => {
        for (let key in menu) {
            if (menu[key] instanceof Array) {
                menu[key].forEach((menuItem: any) => {
                    const urlHostname = getHostnameFrom(menuItem.url);
                    const isSameHostname = urlHostname === hostname;

                    if (isSameHostname) {
                        menuItem.url = transformUrlToPath(menuItem.url);
                    }
                    menuItem.hasExternalUrl = !isSameHostname;

                    if (menuItem.subpages.length > 0) {
                        createMenuTreeBy(menuItem, hostname);
                    }
                });
            }
        }
        return menu;
    }, []);

    const transformUrlToPath = (url) => {
        const indexAt = url.indexOf(hostname);
        return url.substring(indexAt).substring(hostname.length);
    }

    useEffect(() => {
        let clonedMenu = JSON.parse(JSON.stringify(portalMenu));
        const menuTree = createMenuTreeBy(clonedMenu, hostname);
        setMenuTree(menuTree);
    }, [portalMenu]);

    const getHostnameFrom = (url: string) => {
        let hostname = url.indexOf('//') > -1 ? url.split('/')[2] : url.split('/')[0];
        hostname = hostname.split(':')[0];
        hostname = hostname.split('?')[0];
        return hostname;
    }

    const onHamburgerClick = () => {
        setIsHamburgerMenuOpen(!isHamburgerMenuOpen);
    };

    return (
        <>
            <nav className="cui-top-nav">
                <button className={'cui-menu-btn'} onClick={onHamburgerClick}>
                    <div className={`cui-menu-btn-bar ${isHamburgerMenuOpen ? 'cui-is-open' : ''}`} />
                    <div className={`cui-menu-btn-bar ${isHamburgerMenuOpen ? 'cui-is-open' : ''}`} />
                    <div className={`cui-menu-btn-bar ${isHamburgerMenuOpen ? 'cui-is-open' : ''}`} />
                    <div className={`cui-menu-btn-bar ${isHamburgerMenuOpen ? 'cui-is-open' : ''}`} />
                </button>
                <figure className="cui-logo">
                    {menuTree ? <a href={menuTree.homeUrl}>{svg.collectorLogo}</a> : ''}
                </figure>

                {menuTree && menuTree.topItems.map((menuItem, i) => (
                    <button className="cui-menu-btn">
                        {menuItem.hasOwnProperty('isMsg')
                        && menuItem.isMsg
                        && nrOfUnreadMessages > 0
                            ? <span className="cui-msg">{nrOfUnreadMessages}</span>
                            : ''}
                        {svg.securemsgIcon}
                    </button>
                ))}
            </nav>
            <section className="cui-middle-content">
                {menuTree ? <PortalAsideMenu menuTree={menuTree}
                                        isNavMenuOpen={isHamburgerMenuOpen}
                                        menuFooter={menuFooter}
                                        nrOfUnreadMessages={nrOfUnreadMessages}/>
                    : ''}
                <section className="cui-site-content">{children}</section>
            </section>
        </>
    );
};

