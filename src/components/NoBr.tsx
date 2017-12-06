import glamorous, { GlamorousComponent } from 'glamorous';

export const NoBr: GlamorousComponent<React.HTMLProps<HTMLSpanElement>, {}> = glamorous.span({
    whiteSpace: 'nowrap',
});
