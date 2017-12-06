import glamorous from 'glamorous';
import { breakpoints, fonts } from '../../theme';

export const H2 = glamorous.h2({
    font: fonts.desktop.xl,
    fontWeight: 600,

    [breakpoints.mobileAndLower]: {
        font: fonts.mobile.xl,
        fontWeight: 600,
    },

    '&:first-child': {
        marginTop: 0,
    },
});
