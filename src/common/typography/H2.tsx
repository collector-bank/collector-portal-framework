import glamorous, { GlamorousComponent } from 'glamorous';
import { Theme } from '../../themes';

export interface H2Props extends React.HTMLProps<HTMLHeadingElement> {
    centered?: boolean;
}

export interface H2WithTheme extends H2Props {
    theme: Theme;
}

export const H2: GlamorousComponent<H2Props, {}> = glamorous.h2<H2WithTheme>(({ theme, centered }) => ({
    font: theme.fonts.desktop.xl,
    fontWeight: 600,
    marginBottom: 16,
    textAlign: centered ? 'center' : 'initial',

    '&:first-child': {
        marginTop: 0,
    },

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.xl,
        fontWeight: 600,
        marginBottom: 16,
    },
}));
