import glamorous, { GlamorousComponent } from 'glamorous';
import { Theme } from '../../themes';

export const H1: GlamorousComponent<React.HTMLProps<HTMLHeadingElement>, {}> = glamorous.h1<{ theme: Theme }>(({ theme }) => ({
    font: theme.fonts.desktop.xxl,
    fontWeight: 600,
    marginBottom: 24,

    '&:first-child': {
        marginTop: 0,
    },

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.xxl,
        fontWeight: 600,
        marginBottom: 16,
    },
}));
