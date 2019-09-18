import React, { useEffect, useLayoutEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '../..';
import { useWindowSize } from '../../hooks';

const Container = styled.nav({
    marginBottom: 30,
});

interface VerticalProps {
    vertical: boolean;
}

const InnerContainer = styled.div<VerticalProps>(({ vertical }) => ({
    display: vertical ? 'block' : 'inline-block',
}));

const List = styled.ul<VerticalProps>(({ theme, vertical }) => ({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: vertical ? 'column' : undefined,
    borderRadius: vertical ? theme.borderRadius.small : undefined,
    border: vertical ? `1px solid ${theme.colors.lightGray}` : undefined,
    borderBottom: 0,
}));

const Link = styled(NavLink)<VerticalProps>(({ theme, vertical }) => ({
    display: 'block',
    padding: '12px 20px',
    textDecoration: 'none',
    fontSize: 18,
    fontWeight: 500,
    minWidth: 100,
    transitionProperty: 'border-color, color',
    transitionDuration: '200ms',
    textAlign: vertical ? 'left' : 'center',
    borderBottom: vertical ? `1px solid ${theme.colors.lightGray}` : `4px solid ${theme.colors.lightGray}`,
    borderLeft: vertical ? `4px solid ${theme.colors.lightGray}` : undefined,
    flexDirection: vertical ? 'column' : undefined,
    paddingLeft: vertical ? 16 : undefined,

    '&:hover': {
        color: theme.colors.purple,
    },

    color: 'inherit',

    '&.active': {
        color: theme.colors.purple,
        borderColor: theme.colors.purple,
        borderBottom: vertical ? `1px solid ${theme.colors.lightGray}` : undefined,
        borderLeftColor: vertical ? theme.colors.purple : undefined,
    },
}));

export interface TabsProps {
    items: TabItem[];
}

export interface TabItem {
    path: string;
    label: string;
}

export const Tabs: React.FC<TabsProps> = ({ items }) => {
    const [breakpoint, setBreakpoint] = useState(0);
    const [vertical, setVertical] = useState<boolean>(false);
    const { innerWidth } = useWindowSize();
    const ref = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (ref && ref.current) {
            setBreakpoint(ref.current.offsetWidth);
        }
    }, [ref]);

    useEffect(() => {
        setVertical(innerWidth <= breakpoint);
    }, [innerWidth, breakpoint]);

    return (
        <Container>
            <InnerContainer ref={ref} vertical={vertical}>
                <List vertical={vertical}>
                    {items.map((item, i) => (
                        <li key={i}>
                            <Link to={item.path} exact={true} vertical={vertical}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </List>
            </InnerContainer>
        </Container>
    );
};
