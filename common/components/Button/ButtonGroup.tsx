import glamorous from 'glamorous';

interface Props {
    align?: 'flex-start' | 'flex-end' | 'center';
}

export const ButtonGroup = glamorous.div<Props>(
    {
        display: 'flex',
        flexWrap: 'wrap',
        margin: -8,

        '> *': {
            margin: 8,
        },
    },
    ({ align = 'flex-start' }) => ({
        justifyContent: align,
    }),
);

ButtonGroup.displayName = 'Collector.ButtonGroup';
