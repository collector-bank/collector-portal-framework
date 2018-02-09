import glamorous, { GlamorousComponent } from 'glamorous';
import { breakpoints, fonts } from '../../theme';

export const H3: GlamorousComponent<React.HTMLProps<HTMLHeadingElement>, {}> = glamorous.h3({
    font: fonts.desktop.large,
    fontWeight: 600,
    marginBottom: 16,

    [breakpoints.mobileAndLower]: {
        font: fonts.mobile.large,
        fontWeight: 600,
        marginBottom: 12,
    },

    '&:first-child': {
        marginTop: 0,
    },
});
