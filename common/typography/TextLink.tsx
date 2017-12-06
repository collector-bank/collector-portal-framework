import glamorous from 'glamorous';
import { colors } from '../../theme';
import { lighten } from 'polished';

export const TextLink = glamorous.a({
    color: colors.purple,
    textDecoration: 'none',
    borderBottom: '1px solid',
    transition: 'border-color 200ms',
    borderColor: lighten(0.5, colors.purple),

    '&:hover': {
        borderColor: 'currentColor',
    }
});
