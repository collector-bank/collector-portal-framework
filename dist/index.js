import { css } from 'glamor';
import { colors, fonts } from './theme';
import './common/fonts/fonts.css';
export var injectGlobalStyles = function () {
    css.global('html', {
        WebkitFontSmoothing: 'antialiased',
        textSizeAdjust: '100%',
    });
    css.global('body', {
        margin: 0,
        font: fonts.desktop.medium,
        color: colors.black,
    });
};
//# sourceMappingURL=index.js.map