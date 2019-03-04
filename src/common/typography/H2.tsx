import styled from '../../';

export const H2 = styled.h2<{}>(({ theme }) => ({
    font: theme.fonts.desktop.xl,
    fontWeight: 600,
    marginBottom: 16,

    '&:first-child': {
        marginTop: 0,
    },

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.xl,
        fontWeight: 600,
        marginBottom: 16,
    },
}));
