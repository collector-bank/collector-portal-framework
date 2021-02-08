import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { PortalAsideMenuItem } from './PortalAsideMenuItem';
import { PortalAsideDropdown } from './PortalAsideDropdown';
import { getTraversedMenuLeafs, PortalMenu, PortalMenuItem, PortalMenuTreeLeaf } from './portalMenu';

const FootContent = styled.section({
    width: 'calc(100% - 40px)',
    height: 'auto',
    margin: 20,
});

export interface PortalMenuProps {
    menuTree: PortalMenu;
    menuFooter?: JSX.Element,
    nrOfUnreadMessages?: number,
    isNavMenuOpen: boolean
}

export const PortalAsideMenu: React.FC<PortalMenuProps> = ({
    menuTree,
    menuFooter,
    nrOfUnreadMessages= 0,
    isNavMenuOpen = true,
}) => {
    const [traversedMenu, setTraversedMenu] = useState<PortalMenuTreeLeaf[]>([]);
    const [activeMenuItemUrl, setActiveMenuItemUrl] = useState<string>('');
    const [menuItems, setMenuItems] = useState<PortalMenuItem[]>([]);

    useEffect(() => {
        const menuItems = [...menuTree.asidePortalItems, ...menuTree.asideGeneralItems];
        setMenuItems(menuItems);

        const pathname = window.location.pathname;
        let traversedMenuLeafs = getTraversedMenuLeafs(menuItems, pathname, false, setActiveMenuItemUrl);
        setTraversedMenu(traversedMenuLeafs);
    }, [menuTree]);

    const isDropdownActive = (menuLevel: number, indexLeaf: number): boolean => {
        if(traversedMenu[menuLevel]) {
            return traversedMenu[menuLevel].index === indexLeaf;
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
        let traversedMenuLeafs = getTraversedMenuLeafs(menuItems, url, true);
        setTraversedMenu(traversedMenuLeafs);
    }

    const onClickDropdown = (selectedDropdownMenuItem: PortalMenuItem): void => {
        const id = selectedDropdownMenuItem.id;
        const traversedMenuItemIndex = traversedMenu.findIndex(traversedMenuItem => id === traversedMenuItem.id);
        traversedMenuItemIndex !== -1   ? closeDropdown(traversedMenuItemIndex)
                                        : openDropdown(selectedDropdownMenuItem);
    };

    const onClickNavItem = (url: string): void => {
        let traversedMenuLeafs = getTraversedMenuLeafs(menuItems, url, false, setActiveMenuItemUrl);
        setTraversedMenu(traversedMenuLeafs);
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
        indexLeaf: number,
        menuLevel: number,
        isDropdown: boolean,
    ) => {
        if (isDropdown) {
            return (
                <PortalAsideDropdown menuItem={menuItem}
                                     isActive={isDropdownActive(menuLevel, indexLeaf)}
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
            {menuTree && Menu(menuTree)}
            {menuFooter ? <FootContent>{menuFooter}</FootContent>: ''}
        </aside>
    );
};

