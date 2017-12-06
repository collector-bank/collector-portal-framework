var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
import glamorous from 'glamorous';
import { colors } from '../../../theme';
export var Label = glamorous.label({
    display: 'block',
    maxWidth: 540,
    fontWeight: 500,
    marginBottom: '.3em',
}, function (_a) {
    var error = _a.error, optional = _a.optional;
    var styles = {};
    if (error) {
        styles = {
            color: colors.red,
        };
    }
    if (optional) {
        styles = __assign({}, styles, { '&:after': {
                content: ' (frivilligt)',
                fontWeight: 400,
                color: colors.darkGray,
            } });
    }
    return styles;
});
//# sourceMappingURL=index.js.map