import glamorous from 'glamorous';
import { breakpoints, fonts } from '../../theme';

export const H3 = glamorous.h3({
    font: fonts.desktop.large,
    fontWeight: 600,

    [breakpoints.mobileAndLower]: {
        font: fonts.mobile.large,
        fontWeight: 600,
    },

    '&:first-child': {
        marginTop: 0,
    },
});
