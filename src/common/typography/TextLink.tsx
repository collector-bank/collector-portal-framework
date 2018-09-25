import glamorous, { GlamorousComponent } from 'glamorous';
import { lighten } from 'polished';
import { Theme } from '../../themes';

export const TextLink: GlamorousComponent<React.HTMLProps<HTMLAnchorElement>, {}> = glamorous.a<{ theme: Theme }>(
    {
        textDecoration: 'none',
        borderBottom: '1px solid',
        transition: 'border-color 200ms',

        '&:hover': {
            borderColor: 'currentColor',
        },
    },
    ({ theme }) => ({
        color: theme.colors.primary,
        borderColor: lighten(0.5, theme.colors.primary),
    })
);
