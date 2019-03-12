import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '../';
import { useWindowSize } from '../hooks';

const Container = styled.nav({
    marginBottom: 30,
});

const InnerContainer = styled.div({
    display: 'inline-block',
});

const List = styled.ul<{ verticalView: boolean }>(({ theme, verticalView }) => ({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: verticalView ? 'column' : undefined,
    borderRadius: verticalView ? theme.borderRadius.small : undefined,
    border: verticalView ? `1px solid ${theme.colors.lightGray}` : undefined,
    borderBottom: 0,
}));

const Link = styled(NavLink)<{ verticalView: boolean }>(({ theme, verticalView }) => ({
    display: 'block',
    padding: '12px 20px',
    textDecoration: 'none',
    fontSize: 18,
    fontWeight: 500,
    minWidth: 100,
    textAlign: 'center',
    transitionProperty: 'border-color, color',
    transitionDuration: '200ms',

    borderBottom: verticalView ? `1px solid ${theme.colors.lightGray}` : `4px solid ${theme.colors.lightGray}`,
    borderLeft: verticalView ? `4px solid ${theme.colors.lightGray}` : undefined,
    flexDirection: verticalView ? 'column' : undefined,
    paddingLeft: verticalView ? 16 : undefined,

    '&:hover': {
        color: theme.colors.primary,
    },

    color: 'inherit',

    '&.active': {
        color: theme.colors.primary,
        borderColor: theme.colors.primary,
        borderBottom: verticalView ? `1px solid ${theme.colors.lightGray}` : undefined,
        borderLeftColor: verticalView ? theme.colors.primary : undefined,
    },
}));

export interface TabsProps {
    items: TabItem[];
}

export interface TabItem {
    path: string;
    label: string;
}

export const Tabs: React.StatelessComponent<TabsProps> = ({ items }) => {
    const [breakpoint, setBreakpoint] = useState(0);
    const [verticalView, setVerticalView] = useState(false);
    const { innerWidth } = useWindowSize();
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (ref && ref.current) {
            setBreakpoint(ref.current.offsetWidth);
        }
    }, [ref]);

    useEffect(() => {
        setVerticalView(innerWidth <= breakpoint);
    }, [innerWidth, breakpoint]);

    return (
        <Container>
            <InnerContainer ref={ref}>
                <List verticalView={verticalView}>
                    {items.map((item, i) => (
                        <li key={i}>
                            <Link to={item.path} exact={true} verticalView={verticalView}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </List>
            </InnerContainer>
        </Container>
    );
};
