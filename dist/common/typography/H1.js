import glamorous from 'glamorous';
import { breakpoints, fonts } from '../../theme';
export var H1 = glamorous.h1((_a = {
        font: fonts.desktop.xxl,
        fontWeight: 600
    },
    _a[breakpoints.mobileAndLower] = {
        font: fonts.mobile.xxl,
        fontWeight: 600,
    },
    _a['&:first-child'] = {
        marginTop: 0,
    },
    _a));
var _a;
//# sourceMappingURL=H1.js.map