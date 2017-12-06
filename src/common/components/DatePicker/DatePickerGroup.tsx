import glamorous, { GlamorousComponent } from 'glamorous';

export const DatePickerGroup: GlamorousComponent<React.HTMLProps<HTMLDivElement>, {}> = glamorous.div({
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: -8,
    marginRight: -8,

    '> *': {
        marginLeft: 8,
        marginRight: 8,
    },
});

DatePickerGroup.displayName = 'Collector.DatePickerGroup';
