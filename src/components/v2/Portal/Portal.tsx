import * as React from 'react';
import { useEffect, useState, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { getIconBy, svg } from './portalIcons';

export const Portal: React.FC<{ menuItems: null; hostname: string; nrOfUnreadMessages?: number }> = ({
    menuItems,
    hostname,
    children,
    nrOfUnreadMessages,
}) => {
    const [toplevelDropdownIndex, setToplevelDropdownIndex] = useState(-1);
    const [toplevelChildUrl, setToplevelChildUrl] = useState<string | null>(null);
    const [toplevelUrl, setToplevelUrl] = useState<string | null>(null);
    const [menuTree, setMenuTree] = useState(null);
    const [isHamburgerMenuOpen, setIsHamburgerMenuOpen] = useState(false);

    const createMenuTree = useCallback((menu: any, hostname: string) => {
        for (let key in menu) {
            if (menu[key] instanceof Array) {
                menu[key].forEach((menuItem: any) => {
                    const urlHostname = getHostnameFrom(menuItem.url);
                    const isSameHostname = urlHostname === hostname;
                    if (isSameHostname) {
                        const indexAt = menuItem.url.indexOf(hostname);
                        menuItem.url = menuItem.url.substring(indexAt).substring(hostname.length);
                    }
                    menuItem['isExternal'] = !isSameHostname;

                    if (menuItem.subpages.length > 0) {
                        createMenuTree(menuItem, hostname);
                    }
                });
            }
        }
        return menu;
    }, []);

    useEffect(() => {
        let clonedMenuItems = JSON.parse(JSON.stringify(menuItems));
        let createdMenuTree = createMenuTree(clonedMenuItems, hostname);
        setMenuTree(createdMenuTree);

        const pathname = window.location.pathname;
        let indexes = getToplevelIndexIfMatchExistsFrom(createdMenuTree.topItems, pathname);
        if(!indexes.isActive) {
            indexes = getToplevelIndexIfMatchExistsFrom(createdMenuTree.bottomItems, pathname);
        }
        setToplevelDropdownIndex(indexes.toplevelIndex);
        setToplevelChildUrl(indexes.childUrl);
        setToplevelUrl(indexes.toplevelUrl);
    }, [menuItems, createMenuTree, hostname]);

    const getHostnameFrom = (url: string) => {
        let hostname = url.indexOf('//') > -1 ? url.split('/')[2] : url.split('/')[0];
        hostname = hostname.split(':')[0];
        hostname = hostname.split('?')[0];
        return hostname;
    }

    const getToplevelIndexIfMatchExistsFrom = (topItems: any, pathname: string) => {
        let toplevelIndex = -1;
        let toplevelUrl = null;
        let childUrl = null;
        let isActive = false;
        topItems.forEach((menuItem: any, menuItemIndex: number) => {
            if(pathname === menuItem.url) {
                toplevelUrl = menuItem.url;
                isActive = true;
            }

            const foundChildMenuItem = menuItem.subpages.find((subpageMenuItem: any) => {
                return subpageMenuItem.url === pathname;
            })
            if (foundChildMenuItem) {
                toplevelIndex = menuItemIndex;
                childUrl = foundChildMenuItem.url;
                isActive = true;
            }
        })
        
        return {toplevelIndex: toplevelIndex, toplevelUrl: toplevelUrl, childUrl: childUrl, isActive: isActive};
    }

    const Menu = (menu: any): any => {
        return setMenu(menu.topItems)
            .concat(<div className="cui-nav-divider" key={'0-divider'} />)
            .concat(setMenu(menu.bottomItems));
    };

    const setMenu = (menuItems: any, index = -1, isTopLevel: boolean = false): any => {
        return isTopLevel ? (
            <div className={`cui-nav-subgroup`}>
                {getMenuItemsOf(menuItems, false)}
            </div>
        ) : (
            getMenuItemsOf(menuItems, true)
        );
    };

    const getMenuItemsOf = (menuItems: any, isTopLevel: boolean = true) => {
        return menuItems.map((menuItem: any, i: number) => (
            <React.Fragment key={menuItem.label}>
                {getMenuItem(menuItem, i, isTopLevel)}
                {menuItem.subpages.length > 0 && setMenu(menuItem.subpages, i, isTopLevel)}
            </React.Fragment>
        ));
    };

    const getMenuItem = (
        menuItem: any,
        position: number,
        isTopLevel: boolean = true,
    ) => {
        if (isTopLevel && menuItem.subpages.length > 0) {
            return (
                <button className={`cui-nav-item ${toplevelDropdownIndex === position ? 'cui-is-open' : ''}`} onClick={() => onOpenNavDropdownItem(position, isTopLevel)}>
                    <span className="cui-img">
                        {getIconBy(menuItem.icon)}
                    </span>
                    <div className="cui-content">{menuItem.label}</div>
                </button>
            );
        } else if (menuItem.isExternal) {
            return (
                <a className="cui-nav-item" href={menuItem.url}>
                    {menuItem.subpages.length === 0 && isTopLevel && (
                        <span className="cui-img">
                            {getIconBy(menuItem.icon)}
                        </span>
                    )}
                    <div className="cui-content">{menuItem.label}</div>
                </a>
            );
        } else {
            return (
                <Link className={`cui-nav-item ${toplevelChildUrl === menuItem.url || toplevelUrl === menuItem.url ? 'cui-is-active' : ''}`} to={menuItem.url} onClick={() => onOpenNavItem(menuItem.url, isTopLevel)}>
                    {menuItem.subpages.length === 0 && isTopLevel && (
                        <span className="cui-img">
                            {getIconBy(menuItem.icon)}
                        </span>
                    )}
                    <div className="cui-content">{menuItem.label}</div>
                </Link>
            );
        }
    };

    const onOpenNavDropdownItem = (index: number, isTopLevel:boolean) => {
        if (isTopLevel) {
            index === toplevelDropdownIndex ? setToplevelDropdownIndex(-1) : setToplevelDropdownIndex(index);
        }
    };

    const onOpenNavItem = (url: string, isTopLevel:boolean) => {
        if(isTopLevel) {
            setToplevelUrl(url)
            setToplevelChildUrl(null);
        } else {
            setToplevelChildUrl(url)
            setToplevelUrl(null)
        }
    };

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
                <div className="cui-logo">
                    {svg.collectorLogo}
                </div>
                <button className="cui-menu-btn">
                    {nrOfUnreadMessages && nrOfUnreadMessages > 0 ? <span className="cui-msg">{nrOfUnreadMessages}</span> : ''}
                    {svg.securemsgIcon}
                </button>
            </nav>
            <div className="cui-middle-content">
                <aside className={`cui-left-nav ${isHamburgerMenuOpen ? 'cui-is-open' : ''}`}>
                    {menuTree && Menu(menuTree)}
                </aside>
                <section className="cui-site-content">{children}</section>
            </div>
        </>
    );
};

