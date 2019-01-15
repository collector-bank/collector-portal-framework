import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from '../styled';

const NavContainer = styled('nav')({
    marginBottom: 30,
});

const NavList = styled('ul')(
    {
        listStyleType: 'none',
        padding: 0,
        margin: 0,
        display: 'flex',

        '> li': {
            marginRight: 16,
        },
    },
    ({ theme }) => ({
        '> li': {
            [theme.breakpoints.mobileAndLower]: {
                margin: 0,
            },
        },

        [theme.breakpoints.mobileAndLower]: {
            flexDirection: 'column',
            borderRadius: theme.borderRadius.small,
            border: `1px solid ${theme.colors.lightGray}`,
            borderBottom: 0,
        },
    })
);

const NavLink = styled(RouterNavLink)(({ theme }) => ({
    display: 'block',
    padding: '10px 4px',
    textDecoration: 'none',
    fontSize: 18,
    fontWeight: 500,
    transitionProperty: 'border-color, color',
    transitionDuration: '200ms',
    borderBottom: '4px solid transparent',

    '&:hover': {
        color: 'inherit',
    },
    color: theme.colors.mediumGray,

    '&.active': {
        color: 'inherit',
        borderColor: theme.colors.primary,
    },

    [theme.breakpoints.mobileAndLower]: {
        borderBottom: `1px solid ${theme.colors.lightGray}`,
        borderLeft: `4px solid ${theme.colors.lightGray}`,
        flexDirection: 'column',
        paddingLeft: 16,

        '&.active': {
            borderBottom: `1px solid ${theme.colors.lightGray}`,
            borderLeftColor: theme.colors.primary,
        },
    },
}));

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
