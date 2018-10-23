import glamorous, { GlamorousComponent } from 'glamorous';
import { Theme } from '../../themes';

export interface H3Props extends React.HTMLProps<HTMLHeadingElement> {
    centered?: boolean;
}

export interface H3WithThemeProps extends H3Props {
    theme: Theme;
}

export const H3: GlamorousComponent<H3Props, {}> = glamorous.h3<H3WithThemeProps>(({ theme, centered }) => ({
    font: theme.fonts.desktop.large,
    fontWeight: 600,
    marginBottom: 16,
    textAlign: centered ? 'center' : 'initial',

    '&:first-child': {
        marginTop: 0,
    },

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.large,
        fontWeight: 600,
        marginBottom: 12,
    },
}));
