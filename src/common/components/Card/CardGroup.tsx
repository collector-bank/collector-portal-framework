import glamorous, { GlamorousComponent } from 'glamorous';

export const CardGroup: GlamorousComponent<{} & React.HTMLProps<HTMLDivElement>, {}> = glamorous.div({
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: -10,
    marginLeft: -10,

    '> *': {
        flexShrink: 0,
        marginRight: 10,
        marginLeft: 10,
    },
});
