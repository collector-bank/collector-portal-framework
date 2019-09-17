import React, { useRef, useState, useLayoutEffect } from 'react';
import { NavLink } from 'react-router-dom';
import styled from '../';
import { useWindowSize } from '../hooks';

const Container = styled.nav({
    marginBottom: 30,
});

const InnerContainer = styled.div<{ vertical: boolean }>(({ vertical }) => ({
    display: vertical ? 'block' : 'inline-block',
}));

const List = styled.ul<{ vertical: boolean }>(({ theme, vertical }) => ({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
    display: 'flex',
    flexDirection: vertical ? 'column' : undefined,
    borderRadius: vertical ? theme.borderRadius.small : undefined,
    border: vertical ? `1px solid ${theme.colors.lightGray}` : undefined,
    borderBottom: 0,
}));

const Link = styled(NavLink)<{ others: { vertical: boolean } }>(({ theme, others }) => ({
    display: 'block',
    padding: '12px 20px',
    textDecoration: 'none',
    fontSize: 18,
    fontWeight: 500,
    minWidth: 100,
    transitionProperty: 'border-color, color',
    transitionDuration: '200ms',
    textAlign: others.vertical ? 'left' : 'center',
    borderBottom: others.vertical ? `1px solid ${theme.colors.lightGray}` : `4px solid ${theme.colors.lightGray}`,
    borderLeft: others.vertical ? `4px solid ${theme.colors.lightGray}` : undefined,
    flexDirection: others.vertical ? 'column' : undefined,
    paddingLeft: others.vertical ? 16 : undefined,

    '&:hover': {
        color: theme.colors.purple,
    },

    color: 'inherit',

    '&.active': {
        color: theme.colors.purple,
        borderColor: theme.colors.purple,
        borderBottom: others.vertical ? `1px solid ${theme.colors.lightGray}` : undefined,
        borderLeftColor: others.vertical ? theme.colors.purple : undefined,
    },
}));

export interface TabsProps extends React.HTMLAttributes<HTMLElement> {
    items: TabItem[];
}

export interface TabItem {
    path: string;
    label: string;
}

export const Tabs: React.FC<TabsProps> = ({ items, ...rest }) => {
    const [vertical, setVertical] = useState(false);
    const { innerWidth } = useWindowSize();
    const ref = useRef<HTMLDivElement>(null);
    const [horizontalWidth, setHorizontalWidth] = useState<undefined | number>(undefined);

    useLayoutEffect(() => {
        if (horizontalWidth) {
            setVertical(innerWidth <= horizontalWidth);
        }
    }, [innerWidth, horizontalWidth]);

    useLayoutEffect(() => {
        if (ref && ref.current) {
            if (!horizontalWidth) {
                setHorizontalWidth(ref.current.offsetWidth);
            }
        }
    }, [horizontalWidth, innerWidth, ref]);

    return (
        <Container {...rest}>
            <InnerContainer ref={ref} vertical={vertical}>
                <List vertical={vertical}>
                    {items.map((item, i) => (
                        <li key={i}>
                            <Link to={item.path} exact={true} others={{ vertical }}>
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </List>
            </InnerContainer>
        </Container>
    );
};
