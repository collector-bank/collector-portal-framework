import { css } from 'glamor';
import { Theme } from './themes';
import './common/fonts/fonts.css';

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
