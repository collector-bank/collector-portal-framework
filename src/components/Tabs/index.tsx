import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '../..';

const Container = styled.nav({
    marginBottom: 30,
});

const InnerContainer = styled.div(({ theme }) => ({
    display: 'block',

    [theme.breakpoints.tabletAndLower]: {
        maxWidth: 500,
    },
}));

const List = styled.ul(({ theme }) => ({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    borderBottom: 0,

    [theme.breakpoints.tabletAndLower]: {
        flexDirection: 'column',
        borderRadius: theme.borderRadius.small,
        border: `1px solid ${theme.colors.lightGray}`,
        borderBottom: 'none',
    },
}));

const Link = styled(NavLink)(({ theme }) => ({
    display: 'block',
    padding: '12px 20px',
    textDecoration: 'none',
    fontSize: 18,
    fontWeight: 500,
    minWidth: 100,
    transitionProperty: 'border-color, color',
    transitionDuration: '200ms',
    textAlign: 'center',
    borderBottom: `4px solid ${theme.colors.lightGray}`,

    '&:hover': {
        color: theme.colors.purple,
    },

    color: 'inherit',

    '&.active': {
        color: theme.colors.purple,
        borderColor: theme.colors.purple,
    },

    [theme.breakpoints.tabletAndLower]: {
        textAlign: 'left',
        borderBottom: `1px solid ${theme.colors.lightGray}`,
        borderLeft: `4px solid ${theme.colors.lightGray}`,
        flexDirection: 'column',
        paddingLeft: 16,

        '&.active': {
            borderBottom: `1px solid ${theme.colors.lightGray}`,
            borderLeftColor: theme.colors.purple,
        },
    },
}));

const VerticalList = styled.ul(({ theme }) => ({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: 'column',
    borderRadius: theme.borderRadius.small,
    border: `1px solid ${theme.colors.lightGray}`,
    borderBottom: 'none',
    maxWidth: 500,
}));

const VerticalLink = styled(NavLink)(({ theme }) => ({
    display: 'block',
    padding: '12px 20px',
    textDecoration: 'none',
    fontSize: 18,
    fontWeight: 500,
    minWidth: 100,
    transitionProperty: 'border-color, color',
    transitionDuration: '200ms',

    '&:hover': {
        color: theme.colors.purple,
    },

    color: 'inherit',

    '&.active': {
        borderBottom: `1px solid ${theme.colors.lightGray}`,
        borderLeftColor: theme.colors.purple,
    },

    textAlign: 'left',
    borderBottom: `1px solid ${theme.colors.lightGray}`,
    borderLeft: `4px solid ${theme.colors.lightGray}`,
    flexDirection: 'column',
    paddingLeft: 16,
}));

export interface TabsProps {
    items: TabItem[];
    isVertical?: boolean;
}

export interface TabItem {
    path: string;
    label: string;
}

export const Tabs: React.FC<TabsProps> = ({ items, isVertical }) => {
    const ref = useRef<HTMLDivElement>(null);

    if (isVertical) {
        return (
            <Container>
                <InnerContainer ref={ref}>
                    <VerticalList>
                        {items.map((item, i) => (
                            <li key={i}>
                                <VerticalLink exact to={item.path}>
                                    {item.label}
                                </VerticalLink>
                            </li>
                        ))}
                    </VerticalList>
                </InnerContainer>
            </Container>
        );
    }

    return (
        <Container>
            <InnerContainer ref={ref}>
                <List>
                    {items.map((item, i) => (
                        <li key={i}>
                            <Link exact to={item.path}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </List>
            </InnerContainer>
        </Container>
    );
};
