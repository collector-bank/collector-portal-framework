import * as React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import glamorous from 'glamorous';
import { borderRadius, breakpoints, colors } from '../theme';

const NavContainer = glamorous.nav({
    marginBottom: 30,
});

const NavList = glamorous.ul({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',

    '> li': {
        marginRight: 16,

        [breakpoints.mobileAndLower]: {
            margin: 0,
        },
    },

    [breakpoints.mobileAndLower]: {
        flexDirection: 'column',
        borderRadius: borderRadius.small,
        border: `1px solid ${colors.lightGray}`,
        borderBottom: 0,
    },
});

const NavLink = glamorous(RouterNavLink)({
    display: 'block',
    padding: '10px 4px',
    textDecoration: 'none',
    color: colors.mediumGray,
    fontSize: 18,
    fontWeight: 500,
    transitionProperty: 'border-color, color',
    transitionDuration: '200ms',
    borderBottom: '4px solid transparent',

    '.active': {
        borderColor: colors.purple,
        color: 'inherit',
    },

    '&:hover': {
        color: 'inherit',
    },

    [breakpoints.mobileAndLower]: {
        borderBottom: `1px solid ${colors.lightGray}`,
        borderLeft: `4px solid ${colors.lightGray}`,
        flexDirection: 'column',
        paddingLeft: 16,

        '.active': {
            borderBottom: `1px solid ${colors.lightGray}`,
            borderLeftColor: colors.purple,
        },
    },
});

export interface TabsProps {
    items: TabItem[];
}

export interface TabItem {
    path: string;
    label: string;
}

export const Tabs: React.StatelessComponent<TabsProps> = ({ items }) => (
    <NavContainer>
        <NavList>
            {items.map((item, i) => (
                <li key={i}>
                    <NavLink to={item.path} exact={true}>
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </NavList>
    </NavContainer>
);
