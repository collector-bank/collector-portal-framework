import glamorous, { GlamorousComponent } from 'glamorous';

export const Text: GlamorousComponent<React.HTMLProps<HTMLParagraphElement>, {}> = glamorous.p({
    marginTop: 0,
    maxWidth: 540,
});
