import * as React from 'react';
import { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { PortalMenu, PortalMenuItem } from './Portal';
import { PortalAsideMenuItem } from './PortalAsideMenuItem';
import { PortalAsideDropdown } from './PortalAsideDropdown';

const FootContent = styled.section({
    width: 'calc(100% - 40px)',
    height: 'auto',
    margin: 20,
});

export interface PortalMenuProps {
    menuTree: PortalMenu;
    menuFooter?: JSXElement,
    nrOfUnreadMessages?: number,
    isNavMenuOpen: boolean
}

export interface PortalUserTraverseMenuTree {
    selectedDropdownIndex: number,
    activeMenuItemUrl: string,
}

const initalPortalUserTraverseMenuTree = {
    activeMenuItemUrl: '',
    selectedDropdownIndex: -1
};

export const PortalAsideMenu: React.FC<PortalMenuProps> = ({
    menuTree,
    menuFooter,
    nrOfUnreadMessages= 0,
    isNavMenuOpen = true,
}) => {
    const [userNavigationData, setUserNavigationData] = useState<PortalUserTraverseMenuTree>({...initalPortalUserTraverseMenuTree});

    useEffect(() => {
        const pathname = ':9501/?path=/story/version-2--portal';
        const menuItems = [...menuTree.asidePortalItems, ...menuTree.asideGeneralItems];
        let userNavigation = getUserNavigationData(menuItems, pathname);
        setUserNavigationData(userNavigation);
    }, [menuTree]);

    const getUserNavigationData = (menuItems: any, pathname: string) => {
        let portalUserTraverseMenuTree = {...initalPortalUserTraverseMenuTree};

        menuItems.forEach((menuItem: any, menuItemIndex: number) => {
            if(pathname === menuItem.url) {
                portalUserTraverseMenuTree.activeMenuItemUrl = menuItem.url;
            }
            const foundChildMenuItem = menuItem.subpages.find((subpageMenuItem: any) => {
                return subpageMenuItem.url === pathname;
            })
            if (foundChildMenuItem) {
                portalUserTraverseMenuTree.selectedDropdownIndex = menuItemIndex;
                portalUserTraverseMenuTree.activeMenuItemUrl = foundChildMenuItem.url;
            }
        })

        return portalUserTraverseMenuTree;
    }

    const Menu = (menu: any): any => {
        return  createSubmenuFrom(menu.asidePortalItems)
                .concat(<div className="cui-nav-divider" key={'0-divider'} />)
                .concat(createSubmenuFrom(menu.asideGeneralItems));
    };

    const createSubmenuFrom = (menuItems: PortalMenuItem[], isTopLevel: boolean = false): any => {
        return isTopLevel ? (
            <div className={`cui-nav-subgroup`}>
                {getMenuItemsOf(menuItems, false)}
            </div>
        ) : (
            getMenuItemsOf(menuItems, true)
        );
    };

    const getMenuItemsOf = (menuItems: PortalMenuItem[], isTopLevel: boolean = true) => {
        return menuItems.map((menuItem: any, i: number) => (
            <React.Fragment key={menuItem.label}>
                {getMenuItem(menuItem, i)}
                {menuItem.subpages.length > 0 && createSubmenuFrom(menuItem.subpages, isTopLevel)}
            </React.Fragment>
        ));
    };

    const getMenuItem = (
        menuItem: PortalMenuItem,
        position: number,
    ) => {
        const isDropdown = menuItem.subpages.length > 0;
        if (isDropdown) {
            return (
                <PortalAsideDropdown selectedDropdownIndex={userNavigationData.selectedDropdownIndex}
                                     menuItem={menuItem}
                                     index={position}
                                     onClick={onClickNavDropdownItem}
                />
            );
        } else {
            return (
                <PortalAsideMenuItem activeMenuItemUrl={userNavigationData.activeMenuItemUrl}
                                     menuItem={menuItem}
                                     nrOfUnreadMessages={nrOfUnreadMessages}
                                     onClick={onClickNavItem}
                />
            )
        }
    };

    const openDropdown = (dropdownIndex: number) => {
        setUserNavigationData(prevState => {
            return {...prevState, selectedDropdownIndex: dropdownIndex}
        });
    }

    const closeDropdown = () => {
        setUserNavigationData(prevState => {
            return {...prevState, selectedDropdownIndex: -1}
        });
    }

    const onClickNavDropdownItem = (selectedDropdownIndex: number) => {
        const isDropdownActive = (selectedDropdownIndex === userNavigationData.selectedDropdownIndex);
        isDropdownActive ? closeDropdown() : openDropdown(selectedDropdownIndex);
    };

    const onClickNavItem = (url: string) => {
        setUserNavigationData(prevState => {
            return {...prevState, activeMenuItemUrl: url}
        });
    };

    return (
        <aside className={`cui-left-nav ${isNavMenuOpen ? 'cui-is-open' : ''}`}>
            {menuTree && Menu(menuTree)}
            {menuFooter ? <FootContent>{menuFooter}</FootContent>: ''}
        </aside>
    );
};

