import glamorous, { GlamorousComponent } from 'glamorous';
import { Theme } from '../../themes';

export interface H1Props extends React.HTMLProps<HTMLHeadingElement> {
    centered?: boolean;
}

export interface H1WithThemeProps extends H1Props {
    theme: Theme;
}

export const H1: GlamorousComponent<H1Props, {}> = glamorous.h1<H1WithThemeProps>(({ theme, centered }) => ({
    font: theme.fonts.desktop.xxl,
    fontWeight: 600,
    marginBottom: 24,
    textAlign: centered ? 'center' : 'initial',

    '&:first-child': {
        marginTop: 0,
    },

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.xxl,
        fontWeight: 600,
        marginBottom: 16,
    },
}));
