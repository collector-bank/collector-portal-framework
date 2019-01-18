import styled from '../../';

export interface H3Props extends React.HTMLProps<HTMLHeadingElement> {
    centered?: boolean;
}

export const H3 = styled('h3')<H3Props>(({ theme, centered }) => ({
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
