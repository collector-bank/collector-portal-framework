import React from 'react';
import { NavLink as RouterNavLink } from 'react-router-dom';
import styled from '../';

const NavContainer = styled.nav({
    marginBottom: 30,
});

const NavList = styled.ul(({ theme }) => ({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',

    [theme.breakpoints.mobileAndLower]: {
        flexDirection: 'column',
        borderRadius: theme.borderRadius.small,
        border: `1px solid ${theme.colors.lightGray}`,
        borderBottom: 0,
    },
}));

const NavLink = styled(RouterNavLink)(({ theme }) => ({
    display: 'block',
    padding: '12px 20px',
    textDecoration: 'none',
    fontSize: 18,
    fontWeight: 500,
    minWidth: 100,
    textAlign: 'center',
    transitionProperty: 'border-color, color',
    transitionDuration: '200ms',
    borderBottom: `4px solid ${theme.colors.lightGray}`,

    '&:hover': {
        color: theme.colors.primary,
    },

    color: 'inherit',

    '&.active': {
        color: theme.colors.primary,
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
