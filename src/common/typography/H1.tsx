import glamorous, { GlamorousComponent } from 'glamorous';
import { breakpoints, fonts } from '../../theme';

export const H1: GlamorousComponent<React.HTMLProps<HTMLHeadingElement>, {}> = glamorous.h1({
    font: fonts.desktop.xxl,
    fontWeight: 600,
    marginBottom: 24,

    [breakpoints.mobileAndLower]: {
        font: fonts.mobile.xxl,
        fontWeight: 600,
        marginBottom: 16,
    },

    '&:first-child': {
        marginTop: 0,
    },
});
