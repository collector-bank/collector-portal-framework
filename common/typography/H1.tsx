import glamorous from 'glamorous';
import { breakpoints, fonts } from '../../theme';

export const H1 = glamorous.h1({
    font: fonts.desktop.xxl,
    fontWeight: 600,

    [breakpoints.mobileAndLower]: {
        font: fonts.mobile.xxl,
        fontWeight: 600,
    },

    '&:first-child': {
        marginTop: 0,
    },
});
