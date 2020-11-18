import React from 'react';
import { Global } from '@emotion/core';
import * as emotion from '@emotion/styled';
import { ThemeProvider } from 'emotion-theming';
import { Theme } from './themes';
import * as collectorTheme from './themes/collector';
import './common/fonts/fonts.css';

const globalStyles = (theme: Theme) => ({
    html: {
        WebkitFontSmoothing: 'antialiased',
        textSizeAdjust: '100%',
    },

    body: {
        margin: 0,
        font: theme.fonts.desktop.medium,
        color: theme.colors.black,
    },
});

interface Props {
    theme?: Theme;
}

export const CollectorPortalFramework: React.FC<Props> = ({ theme = collectorTheme, children }) => (
    <ThemeProvider theme={theme}>
        <Global styles={globalStyles} />
        {children}
    </ThemeProvider>
);

const styled = emotion.default as emotion.CreateStyled<Theme>;
export default styled;
