import React from 'react';
import styled from '../';

const List = styled.dl({
    marginTop: 0,
});

const Heading = styled.dt(({ theme }) => ({
    color: theme.colors.darkGray,
    font: theme.fonts.desktop.small,
}));

const Value = styled.dd({
    margin: 0,

    '&:not(:last-child)': {
        marginBottom: 16,
    },
});

export interface ValueListProps {
    items: InfoItem[];
}

export interface InfoItem {
    heading: string;
    value: any;
}

export const ValueList: React.FC<ValueListProps> = props => {
    const items = props.items
        .map(item => (Array.isArray(item.value) ? { ...item, value: item.value.filter(x => x) } : item))
        .filter(item => item.heading && item.value && item.value.length > 0);

    return (
        <List>
            {items.map((item, i) => [
                <Heading key={`${i}_heading`}>{item.heading}</Heading>,
                <Value key={`${i}_value`}>
                    {Array.isArray(item.value) ? item.value.map((val, j) => <div key={j}>{val}</div>) : item.value}
                </Value>,
            ])}
        </List>
    );
};
