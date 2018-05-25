import glamorous, { CSSProperties, GlamorousComponent } from 'glamorous';
import * as React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import { borderRadius, breakpoints, colors } from '../theme';

const MenuContainer = glamorous.nav({
    flexGrow: 1,
    margin: '40px 0',

    [breakpoints.mobileAndLower]: {
        margin: 0,
        borderBottom: `1px solid ${colors.lightGray}`,
    },
});

const MenuList = glamorous.ul<{ hideIconsMobile?: boolean }>(
    {
        listStyleType: 'none',
        margin: 0,
        padding: 0,

        [breakpoints.mobileAndLower]: {
            display: 'flex',
            flexWrap: 'wrap',
        },
    },
    ({ hideIconsMobile }) => ({
        [breakpoints.mobileAndLower]: {
            paddingLeft: hideIconsMobile ? 0 : 16,
            paddingRight: hideIconsMobile ? 0 : 16,
            justifyContent: hideIconsMobile ? 'flex-start' : 'space-between',
        }
    })
);

interface MenuListItemProps {
    onlyInDesktop?: boolean;
    onlyInMobile?: boolean;
    useMarginTop?: boolean;
    hideIconsMobile?: boolean;
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
    ({ onlyInDesktop, onlyInMobile, useMarginTop, hideIconsMobile }) => {
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

const InternalNavLink = glamorous(RouterNavLink)(
    {
        display: 'flex',
        alignItems: 'center',
        padding: 12, // change this potentially
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
    },
);

const ExternalNavLink: GlamorousComponent<React.HTMLProps<HTMLAnchorElement>, {}> = InternalNavLink.withComponent('a');

const NavLinkLabel = glamorous.span<NavLinkLabelProps>(
    {
        fontSize: 18,
        marginLeft: 16,
    },
    ({ hideIconsMobile }) => ({
        [breakpoints.mobileAndLower]: {
            display: hideIconsMobile ? 'block' : 'none',
            marginLeft: hideIconsMobile ? 0 : 16,
        },
    }),
);

const NavLinkIcon = glamorous.div<NavLinkIconProps>(
    {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: '100%',
        width: 24,
        height: 24,
    },
    ({ icon, hideIconsMobile }) => ({
        backgroundImage: `url(${icon})`,

        [breakpoints.mobileAndLower]: {
            display: hideIconsMobile ? 'none' : 'block',
        },
    }),
);

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
                    {item.externalLink
                        ? (
                            <ExternalNavLink href={item.path}>
                                <NavLinkIcon hideIconsMobile={hideIconsMobile} icon={item.icon} />
                                <NavLinkLabel hideIconsMobile={hideIconsMobile}>{item.label}</NavLinkLabel>
                            </ExternalNavLink>
                        ) : (
                            <InternalNavLink to={item.path}>
                                <NavLinkIcon hideIconsMobile={hideIconsMobile} icon={item.icon} />
                                <NavLinkLabel hideIconsMobile={hideIconsMobile}>{item.label}</NavLinkLabel>
                            </InternalNavLink>
                        )
                    }
                </MenuListItem>
            ))}
        </MenuList>
    </MenuContainer>
);
