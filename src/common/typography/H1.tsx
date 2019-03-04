import styled from '../../';

export interface H1Props extends React.HTMLProps<HTMLHeadingElement> {
    centered?: boolean;
}

export const H1 = styled.h1<H1Props>(({ theme, centered }) => ({
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