import * as React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import glamorous, { CSSProperties } from 'glamorous';
import { colors, breakpoints, borderRadius } from '../theme';

const MenuContainer = glamorous.nav({
    flexGrow: 1,
    margin: '40px 0',

    [breakpoints.mobileAndLower]: {
        margin: 0,
        borderBottom: `1px solid ${colors.lightGray}`,
    },
});

const MenuList = glamorous.ul({
    listStyleType: 'none',
    margin: 0,
    padding: 0,

    [breakpoints.mobileAndLower]: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: 16,
        paddingRight: 16,
    },
});

interface MenuListItemProps {
    onlyInDesktop?: boolean;
    onlyInMobile?: boolean;
    useMarginTop?: boolean;
}

const MenuListItem = glamorous.li<MenuListItemProps>(
    {
        marginLeft: 12,
        marginRight: 12,

        [breakpoints.mobileAndLower]: {
            marginLeft: 0,
            marginRight: 0,
        },
    },
    ({ onlyInDesktop, onlyInMobile, useMarginTop }) => {
        let styles: CSSProperties = {};

        if (onlyInDesktop) {
            styles = {
                [breakpoints.mobileAndLower]: {
                    display: 'none',
                },
            };
        }

        if (onlyInMobile) {
            styles = {
                display: 'none',

                [breakpoints.mobileAndLower]: {
                    display: 'block',
                },
            };
        }

        if (useMarginTop) {
            styles.marginTop = 40;
        }

        return styles;
    },
);

const NavLink = glamorous(RouterNavLink)({
    display: 'flex',
    alignItems: 'center',
    padding: 12,
    color: 'inherit',
    textDecoration: 'none',
    borderRadius: borderRadius.small,
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

    [breakpoints.mobileAndLower]: {
        borderBottom: '4px solid transparent',
        borderRadius: 0,

        '.active': {
            borderBottomColor: 'currentColor',
        },

        '&:hover': {
            background: 'transparent',
        },

        '&.active:hover': {
            background: 'transparent',
        },
    },
});

const NavLinkLabel = glamorous.span({
    fontSize: 18,
    marginLeft: 16,

    [breakpoints.mobileAndLower]: {
        display: 'none',
    },
});

const NavLinkIcon = glamorous.div<{ icon: string }>(
    {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: '100%',
        width: 24,
        height: 24,
    },
    ({ icon }) => ({
        backgroundImage: `url(${icon})`,
    }),
);

export interface MainMenuItem {
    path: string;
    label: string;
    icon: string;
    onlyInDesktop?: boolean;
    onlyInMobile?: boolean;
    useMarginTop?: boolean;
}

interface Props {
    items: MainMenuItem[];
}

export const MainMenu: React.StatelessComponent<Props> = ({ items }) => (
    <MenuContainer>
        <MenuList>
            {items.map((item, i) => (
                <MenuListItem
                    key={i}
                    onlyInDesktop={item.onlyInDesktop}
                    onlyInMobile={item.onlyInMobile}
                    useMarginTop={item.useMarginTop}
                >
                    <NavLink to={item.path}>
                        <NavLinkIcon icon={item.icon} />
                        <NavLinkLabel>{item.label}</NavLinkLabel>
                    </NavLink>
                </MenuListItem>
            ))}
        </MenuList>
    </MenuContainer>
);
