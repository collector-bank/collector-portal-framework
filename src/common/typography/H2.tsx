import styled from '../../';

export interface H2Props extends React.HTMLProps<HTMLHeadingElement> {
    centered?: boolean;
}

export const H2 = styled('h2')<H2Props>(({ theme, centered }) => ({
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
