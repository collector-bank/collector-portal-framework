import * as React from 'react';
import glamorous from 'glamorous';
import { colors, fonts } from '../theme';

const List = glamorous.dl({
    marginTop: 0,
});

const Heading = glamorous.dt({
    color: colors.mediumGray,
    font: fonts.desktop.small,
});

const Value = glamorous.dd({
    margin: 0,

    '&:not(:last-child)': {
        marginBottom: 16,
    },
});

interface InfoItem {
    heading: string;
    value: string | string[];
}

interface Props {
    items: InfoItem[];
}

export const ValueList: React.StatelessComponent<Props> = props => {
    const items = props.items
        .map(item => Array.isArray(item.value) ? ({ ...item, value: item.value.filter(x => x) }) : item)
        .filter(item => item.heading && item.value && item.value.length > 0);

    return (
        <List>
            {items.map((item, i) => [
                <Heading key={`${i}_heading`}>{item.heading}</Heading>,
                <Value key={`${i}_value`}>
                    {Array.isArray(item.value)
                        ? item.value.map((val, j) => <div key={j}>{val}</div>)
                        : item.value
                    }
                </Value>,
            ])}
        </List>
    );
};
