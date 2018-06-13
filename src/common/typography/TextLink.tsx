import glamorous, { GlamorousComponent } from 'glamorous';
import { colors } from '../../theme';
import { lighten } from 'polished';

export const TextLink: GlamorousComponent<React.HTMLProps<HTMLAnchorElement>, {}> = glamorous.a({
    color: colors.purple,
    textDecoration: 'none',
    borderBottom: '1px solid',
    transition: 'border-color 200ms',
    borderColor: lighten(0.5, colors.purple),

    '&:hover': {
        borderColor: 'currentColor',
    },
});
