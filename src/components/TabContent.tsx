import glamorous, { GlamorousComponent } from 'glamorous';

export const TabContent: GlamorousComponent<React.HTMLProps<HTMLDivElement>, {}> = glamorous.div({
    position: 'relative',
    minHeight: 150,
});
