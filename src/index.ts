import { css } from 'glamor';
import * as collectorTheme from './themes/collector';
import './common/fonts/fonts.css';

type Theme = typeof collectorTheme;

export { ThemeProvider } from 'glamorous';

export const injectGlobalStyles = (theme: Theme) => {
    css.global('html', {
        WebkitFontSmoothing: 'antialiased',
        textSizeAdjust: '100%',
    });

    css.global('body', {
        margin: 0,
        font: theme.fonts.desktop.medium,
        color: theme.colors.black,
    });
};
