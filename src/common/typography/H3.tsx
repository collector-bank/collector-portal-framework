import glamorous, { GlamorousComponent } from 'glamorous';
import { Theme } from '../../themes';

export const H3: GlamorousComponent<React.HTMLProps<HTMLHeadingElement>, {}> = glamorous.h3<{ theme: Theme }>(({ theme }) => ({
    font: theme.fonts.desktop.large,
    fontWeight: 600,
    marginBottom: 16,

    '&:first-child': {
        marginTop: 0,
    },

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.large,
        fontWeight: 600,
        marginBottom: 12,
    },
}));
