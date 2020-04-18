import React, { useState } from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import Sidebar from 'react-sidebar';
import { withTheme } from 'emotion-theming';
import styled from '../../';
import { Theme } from '../../themes';
import { useWindowSize } from '../../hooks/use-window-size';
import { AddOptionalTo } from 'emotion-theming/types/helper';

const Hamburger = () => (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor" fillRule="nonzero">
            <path d="M3 13h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zM3 7h18a1 1 0 0 0 0-2H3a1 1 0 1 0 0 2zM3 19h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2z" />
        </g>
    </svg>
);

const Cross = () => (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <g fill="currentColor" fillRule="nonzero">
            <path d="M17.293 5.293l-12 12a1 1 0 0 0 1.414 1.414l12-12a1 1 0 1 0-1.414-1.414z" />
            <path d="M5.293 6.707l12 12a1 1 0 0 0 1.414-1.414l-12-12a1 1 0 0 0-1.414 1.414z" />
        </g>
    </svg>
);

const Container = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
    flexGrow: 1,
    flexDirection: 'column',
    height: '100%',
});

const IconButton = styled.button({
    color: 'inherit',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 0,
    position: 'absolute',
    top: 0,
    right: 0,
    width: 46,
    height: 46,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'opacity 150ms',

    '&:focus': {
        outline: 'none',
    },

    '&:hover': {
        opacity: 0.5,
    },
});

const FooterContainer = styled.footer(({ theme }) => ({
    background: theme.colors.sidebarBlueDark,
    color: theme.colors.white,
    padding: 20,
}));

const MenuContainer = styled.nav({
    width: 280,
    margin: '40px 0',
});

const MenuList = styled.ul({
    listStyleType: 'none',
    margin: 0,
    padding: 0,
});

const MenuListItem = styled.li<{ useMarginTop?: boolean }>(({ useMarginTop }) => ({
    marginTop: useMarginTop ? 40 : 0,
    marginLeft: 12,
    marginRight: 12,
}));

const ExternalNavLink = styled.a(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: 12,
    color: 'inherit',
    textDecoration: 'none',
    transition: 'background-color 200ms, opacity 200ms',
    borderRadius: theme.borderRadius.small,

    '&:not(.active)': {
        opacity: 0.5,
    },

    '&:hover': {
        background: 'rgba(255, 255, 255, .1)',
    },

    '&.active:hover': {
        background: 'rgba(255, 255, 255, .05)',
    },
}));

const InternalNavLink = ExternalNavLink.withComponent(RouterNavLink);

const NavLinkLabel = styled.span({
    fontSize: 18,
    marginLeft: 16,
});

const NavLinkIcon = styled.div<NavLinkIconProps>(({ icon }) => ({
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: '100%',
    width: 24,
    height: 24,
    backgroundImage: `url(${icon})`,
}));

export interface MainMenuProps {
    items: MainMenuItem[];
    menuFooter?: JSX.Element;
    menuEvents?: MenuEvents;
}

export interface NavLinkIconProps {
    icon: string;
}

export interface MainMenuItem {
    path: string;
    label: string;
    icon: string;
    externalLink?: boolean;
    useMarginTop?: boolean;
    onClick?: (item : MainMenuItem) => void;
}

export interface MenuEvents {
    onOpen?: () => void;
    onClose?: () => void;
}

const styles = (theme: Theme): any => ({
    root: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        overflow: 'hidden',
    },
    sidebar: {
        zIndex: 2,
        position: 'fixed',
        top: 0,
        bottom: 0,
        transition: 'transform 250ms ease-in-out',
        willChange: 'transform',
        overflowY: 'auto',
        WebkitOverflowScrolling: 'touch',
        background: theme.colors.sidebarBlue,
    },
    overlay: {
        zIndex: 1,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        opacity: 0,
        visibility: 'hidden',
        transition: 'opacity 250ms ease-in-out, visibility 250ms ease-in-out',
        backgroundColor: 'rgba(0, 0, 0, .3)',
    },
});

export const MainMenu: React.FC<AddOptionalTo<MainMenuProps, Theme>> = withTheme(({ items, menuFooter, menuEvents, theme }) => {
    const windowSize = useWindowSize();
    const [sidebarIsOpen, setSidebarOpen] = useState(false);
    const openSidebar = () => {
        if (menuEvents && menuEvents.onOpen) {
            menuEvents.onOpen();
        }
        setSidebarOpen(true);
    }
    const closeSidebar = () => {
        if (menuEvents && menuEvents.onClose) {
            menuEvents.onClose();
        }
        setSidebarOpen(false);
    }
    const menuItemClick = (item: MainMenuItem) => {
        if (item.onClick) {
            item.onClick(item);
        } 
        setSidebarOpen(false);
    }

    const renderSidebar = (includeCloseButton = false) => (
        <Container>
            {includeCloseButton && (
                <IconButton type="button" onClick={closeSidebar}>
                    <Cross />
                </IconButton>
            )}
            <MenuContainer>
                <MenuList>
                    {items.map((item: MainMenuItem, i: number) => (
                        <MenuListItem key={i} useMarginTop={item.useMarginTop}>
                            {item.externalLink ? (
                                <ExternalNavLink href={item.path} onClick={() => menuItemClick(item)}>
                                    <NavLinkIcon icon={item.icon} />
                                    <NavLinkLabel>{item.label}</NavLinkLabel>
                                </ExternalNavLink>
                            ) : (
                                <InternalNavLink to={item.path} onClick={() => menuItemClick(item)}>
                                    <NavLinkIcon icon={item.icon} />
                                    <NavLinkLabel>{item.label}</NavLinkLabel>
                                </InternalNavLink>
                            )}
                        </MenuListItem>
                    ))}
                </MenuList>
            </MenuContainer>

            {menuFooter && <FooterContainer>{menuFooter}</FooterContainer>}
        </Container>
    );

    if (windowSize.innerWidth > 700) {
        return renderSidebar();
    } else {
        return (
            <Sidebar
                sidebar={renderSidebar(true)}
                open={sidebarIsOpen}
                pullRight={true}
                onSetOpen={setSidebarOpen}
                styles={styles(theme)}
                touch={false}
            >
                <IconButton type="button" onClick={openSidebar}>
                    <Hamburger />
                </IconButton>
            </Sidebar>
        );
    } 
});
