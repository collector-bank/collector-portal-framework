import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { CSSObject } from '@emotion/core';
import styled from '../';

const MenuContainer = styled.nav(({ theme }) => ({
    flexGrow: 1,
    margin: '40px 0',

    [theme.breakpoints.mobileAndLower]: {
        margin: 0,
        borderBottom: `1px solid ${theme.colors.lightGray}`,
    },
}));

const MenuList = styled.ul<MenuListItemProps>(({ hideIconsMobile, theme }) => ({
    listStyleType: 'none',
    margin: 0,
    padding: 0,

    [theme.breakpoints.mobileAndLower]: {
        display: 'flex',
        flexWrap: 'wrap',
        paddingLeft: hideIconsMobile ? 0 : 16,
        paddingRight: hideIconsMobile ? 0 : 16,
        justifyContent: hideIconsMobile ? 'flex-start' : 'space-between',
    },
}));

interface MenuListItemProps {
    onlyInDesktop?: boolean;
    onlyInMobile?: boolean;
    useMarginTop?: boolean;
    hideIconsMobile?: boolean;
}

const MenuListItem = styled.li<MenuListItemProps>(({ onlyInDesktop, onlyInMobile, useMarginTop, theme }) => {
    let styles: CSSObject = {
        marginLeft: 12,
        marginRight: 12,

        [theme.breakpoints.mobileAndLower]: {
            marginLeft: 0,
            marginRight: 0,
        },
    };

    if (onlyInDesktop) {
        styles = {
            ...styles,
            [theme.breakpoints.mobileAndLower]: {
                display: 'none',
            },
        };
    }

    if (onlyInMobile) {
        styles = {
            ...styles,
            display: 'none',

            [theme.breakpoints.mobileAndLower]: {
                display: 'block',
                marginLeft: 0,
                marginRight: 0,
            },
        };
    }

    if (useMarginTop) {
        styles.marginTop = 40;
    }

    return styles;
});

const ExternalNavLink = styled.a(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: 12,
    color: 'inherit',
    textDecoration: 'none',
    transition: 'background-color 200ms, opacity 200ms',

    '&:not(.active)': {
        opacity: 0.5,
    },

    '&:hover': {
        background: 'rgba(255, 255, 255, .1)',
    },

    '&.active:hover': {
        background: 'rgba(255, 255, 255, .05)',
    },

    borderRadius: theme.borderRadius.small,

    [theme.breakpoints.mobileAndLower]: {
        borderBottom: '4px solid transparent',
        borderRadius: 0,

        '&.active': {
            borderBottomColor: 'currentColor',
        },

        '&:hover': {
            background: 'transparent',
        },

        '&.active:hover': {
            background: 'transparent',
        },
    },
}));

const InternalNavLink = ExternalNavLink.withComponent(RouterNavLink);

const NavLinkLabel = styled.span<NavLinkLabelProps>(({ hideIconsMobile, theme }) => ({
    fontSize: 18,
    marginLeft: 16,

    [theme.breakpoints.mobileAndLower]: {
        display: hideIconsMobile ? 'block' : 'none',
        marginLeft: hideIconsMobile ? 0 : 16,
    },
}));

const NavLinkIcon = styled.div<NavLinkIconProps>(({ icon, hideIconsMobile, theme }) => ({
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: '100%',
    width: 24,
    height: 24,
    backgroundImage: `url(${icon})`,

    [theme.breakpoints.mobileAndLower]: {
        display: hideIconsMobile ? 'none' : 'block',
    },
}));

export interface MainMenuProps {
    items: MainMenuItem[];
    hideIconsMobile?: boolean;
}

export interface NavLinkLabelProps {
    hideIconsMobile?: boolean;
}

export interface NavLinkIconProps {
    icon: string;
    hideIconsMobile?: boolean;
}

export interface MainMenuItem {
    path: string;
    label: string;
    icon: string;
    externalLink?: boolean;
    onlyInDesktop?: boolean;
    onlyInMobile?: boolean;
    useMarginTop?: boolean;
    hideIconsMobile?: boolean;
}

export const MainMenu: React.StatelessComponent<MainMenuProps> = ({ items, hideIconsMobile }) => (
    <MenuContainer>
        <MenuList hideIconsMobile={hideIconsMobile}>
            {items.map((item, i) => (
                <MenuListItem
                    key={i}
                    onlyInDesktop={item.onlyInDesktop}
                    onlyInMobile={item.onlyInMobile}
                    useMarginTop={item.useMarginTop}
                    hideIconsMobile={hideIconsMobile}
                >
                    {item.externalLink ? (
                        <ExternalNavLink href={item.path}>
                            <NavLinkIcon hideIconsMobile={hideIconsMobile} icon={item.icon} />
                            <NavLinkLabel hideIconsMobile={hideIconsMobile}>{item.label}</NavLinkLabel>
                        </ExternalNavLink>
                    ) : (
                        <InternalNavLink to={item.path}>
                            <NavLinkIcon hideIconsMobile={hideIconsMobile} icon={item.icon} />
                            <NavLinkLabel hideIconsMobile={hideIconsMobile}>{item.label}</NavLinkLabel>
                        </InternalNavLink>
                    )}
                </MenuListItem>
            ))}
        </MenuList>
    </MenuContainer>
);
