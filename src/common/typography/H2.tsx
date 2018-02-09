import glamorous, { GlamorousComponent } from 'glamorous';
import { breakpoints, fonts } from '../../theme';

export const H2: GlamorousComponent<React.HTMLProps<HTMLHeadingElement>, {}> = glamorous.h2({
    font: fonts.desktop.xl,
    fontWeight: 600,
    marginBottom: 24,

    [breakpoints.mobileAndLower]: {
        font: fonts.mobile.xl,
        fontWeight: 600,
        marginBottom: 16,
    },

    '&:first-child': {
        marginTop: 0,
    },
});
