import glamorous from 'glamorous';
import { colors } from '../../theme';
import { lighten } from 'polished';
export var TextLink = glamorous.a({
    color: colors.purple,
    textDecoration: 'none',
    borderBottom: '1px solid',
    transition: 'border-color 200ms',
    borderColor: lighten(0.5, colors.purple),
    '&:hover': {
        borderColor: 'currentColor',
    }
});
//# sourceMappingURL=TextLink.js.map