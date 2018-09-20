import glamorous, { GlamorousComponent } from 'glamorous';
import { Theme } from '../../themes';

export const H2: GlamorousComponent<React.HTMLProps<HTMLHeadingElement>, {}> = glamorous.h2<{ theme: Theme }>(
    {
        fontWeight: 600,
        marginBottom: 24,

        '&:first-child': {
            marginTop: 0,
        },
    },
    ({ theme }) => ({
        font: theme.fonts.desktop.xl,

        [theme.breakpoints.mobileAndLower]: {
            font: theme.fonts.mobile.xl,
            fontWeight: 600,
            marginBottom: 16,
        },
    })
);
