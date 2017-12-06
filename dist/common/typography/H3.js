import glamorous from 'glamorous';
import { breakpoints, fonts } from '../../theme';
export var H3 = glamorous.h3((_a = {
        font: fonts.desktop.large,
        fontWeight: 600
    },
    _a[breakpoints.mobileAndLower] = {
        font: fonts.mobile.large,
        fontWeight: 600,
    },
    _a['&:first-child'] = {
        marginTop: 0,
    },
    _a));
var _a;
//# sourceMappingURL=H3.js.map