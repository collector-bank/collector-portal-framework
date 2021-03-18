import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { PortalAsideMenuItem } from './PortalAsideMenuItem';
import { PortalAsideDropdown } from './PortalAsideDropdown';
import { getTraversedMenuNodes, PortalMenu, PortalMenuItem, PortalMenuTreeNode } from './portalMenu';
import { useHistory } from 'react-router-dom';

const FootContent = styled.section({
    height: 'auto',
    margin: '20px 0px',
});

export interface PortalMenuProps {
    menuTree: PortalMenu;
    menuFooter?: JSX.Element,
    nrOfUnreadMessages?: number,
    isNavMenuOpen: boolean,
    toggleHamburgerClick: Function,
}

export const PortalAsideMenu: React.FC<PortalMenuProps> = ({
    menuTree,
    menuFooter,
    nrOfUnreadMessages= 0,
    isNavMenuOpen = true,
    toggleHamburgerClick
}) => {
    const [traversedMenu, setTraversedMenu] = useState<PortalMenuTreeNode[]>([]);
    const [activeMenuItemUrl, setActiveMenuItemUrl] = useState<string>('');
    const [menuItems, setMenuItems] = useState<PortalMenuItem[]>([]);
    const history = useHistory();

    useEffect(() => {
        const menuItems = [...menuTree.asidePortalItems, ...menuTree.asideGeneralItems];
        setMenuItems(menuItems);

        const pathname = getCurrentRoutePathBy(menuItems);
        const traversedMenuNodes = getTraversedMenuNodes(menuItems, pathname, false, setActiveMenuItemUrl);
        setTraversedMenu(traversedMenuNodes);
    }, [menuTree]);

    useEffect(() => {
        return history.listen(() => {
            const pathname = getCurrentRoutePathBy(menuItems);
            const traversedMenuNodes = getTraversedMenuNodes(menuItems, pathname, false, setActiveMenuItemUrl);
            if (traversedMenuNodes.length > 0) {
                setTraversedMenu(traversedMenuNodes);
            }
        });
    }, [menuItems]);

    const getCurrentRoutePathBy = (menuItems: PortalMenuItem[]) => {
        const pathname = window.location.pathname;
        let menuItemPathname = '';
        let submenuItemFound = null;

        menuItems.forEach(menuItem => {
            if (menuItem.subpages.length === 0) {
                submenuItemFound = pathname.indexOf(menuItem.url) !== (-1 || 0) ? menuItem : null;
            } else {
                submenuItemFound = menuItem.subpages.find(submenuItem => {
                    return pathname.indexOf(submenuItem.url) !== (-1 || 0);
                });
            }

            if (submenuItemFound) {
                menuItemPathname = submenuItemFound.url;
            }
        });
        return menuItemPathname;
    };

    const isDropdownActive = (menuLevel: number, indexNode: number): boolean => {
        if(traversedMenu[menuLevel]) {
            return traversedMenu[menuLevel].index === indexNode;
        }
        return false;
    }

    const isMenuItemActive = (menuItem: PortalMenuItem): boolean => {
        return activeMenuItemUrl === menuItem.url;
    }

    const getNextUrlOf = (subpages: PortalMenuItem[], index = 0): string => {
        const menuItem = subpages[index];
        return menuItem.url === '' ? getNextUrlOf(subpages, ++index) : menuItem.url;
    }

    const closeDropdown = (traversedMenuItemIndex: number): void => {
        const traverseBack = traversedMenu.slice(0, traversedMenuItemIndex)
        setTraversedMenu(traverseBack);
    }

    const openDropdown = (selectedDropdownMenuItem: PortalMenuItem): void => {
        const url = getNextUrlOf(selectedDropdownMenuItem.subpages);
        let traversedMenuNodes = getTraversedMenuNodes(menuItems, url, true);
        setTraversedMenu(traversedMenuNodes);
    }

    const onClickDropdown = (selectedDropdownMenuItem: PortalMenuItem): void => {
        const id = selectedDropdownMenuItem.id;
        const traversedMenuItemIndex = traversedMenu.findIndex(traversedMenuItem => id === traversedMenuItem.id);
        traversedMenuItemIndex !== -1   ? closeDropdown(traversedMenuItemIndex)
                                        : openDropdown(selectedDropdownMenuItem);
    };

    const onClickNavItem = (url: string): void => {
        let traversedMenuNodes = getTraversedMenuNodes(menuItems, url, false, setActiveMenuItemUrl);
        setTraversedMenu(traversedMenuNodes);
        toggleHamburgerClick();
    };

    const Menu = (menu: any): any => {
        return  createSubmenuFrom(menu.asidePortalItems)
            .concat(<div className="cui-nav-divider" key={'0-divider'} />)
            .concat(createSubmenuFrom(menu.asideGeneralItems));
    };

    const createSubmenuFrom = (menuItems: PortalMenuItem[], menuLevel = 0, isDropdown = false): any => {
        return isDropdown ? (
            <div className={`cui-nav-subgroup`}>
                {getMenuItemsOf(menuItems, menuLevel)}
            </div>
        ) : (
            getMenuItemsOf(menuItems, menuLevel)
        );
    };

    const getMenuItemsOf = (menuItems: PortalMenuItem[], menuLevel: number) => {
        return menuItems.map((menuItem: any, index: number) => {
            const isDropdown = menuItem.subpages.length > 0;
            const nextMenuLevel = menuLevel + 1;
            return (
                <React.Fragment key={menuItem.label + index}>
                    {getMenuItem(menuItem, index, menuLevel, isDropdown)}
                    {isDropdown && createSubmenuFrom(menuItem.subpages, nextMenuLevel, isDropdown)}
                </React.Fragment>
            )
        });
    };

    const getMenuItem = (
        menuItem: PortalMenuItem,
        indexNode: number,
        menuLevel: number,
        isDropdown: boolean,
    ) => {
        if (isDropdown) {
            return (
                <PortalAsideDropdown menuItem={menuItem}
                                     isActive={isDropdownActive(menuLevel, indexNode)}
                                     onClick={onClickDropdown}
                />
            );
        } else {
            return (
                <PortalAsideMenuItem menuItem={menuItem}
                                     isActive={isMenuItemActive(menuItem)}
                                     onClick={onClickNavItem}
                                     nrOfUnreadMessages={nrOfUnreadMessages}
                />
            )
        }
    };

    return (
        <aside className={`cui-left-nav ${isNavMenuOpen ? 'cui-is-open' : ''}`}>
            {menuTree && menuTree.asidePortalItems.length > 0 && Menu(menuTree)}
            {menuFooter ? (
                <span onClick={() => toggleHamburgerClick()}>
                    <FootContent>{menuFooter}</FootContent>
                </span>
            ) : ''}
        </aside>
    );
};

