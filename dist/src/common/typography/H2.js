import glamorous from 'glamorous';
import { breakpoints, fonts } from '../../theme';
export var H2 = glamorous.h2((_a = {
        font: fonts.desktop.xl,
        fontWeight: 600
    },
    _a[breakpoints.mobileAndLower] = {
        font: fonts.mobile.xl,
        fontWeight: 600,
    },
    _a['&:first-child'] = {
        marginTop: 0,
    },
    _a));
var _a;
//# sourceMappingURL=H2.js.map