import styled from '../../';

export const H1 = styled.h1<{}>(({ theme }) => ({
    font: theme.fonts.desktop.xxl,
    fontWeight: 600,
    marginBottom: 24,

    '&:first-child': {
        marginTop: 0,
    },

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.xxl,
        fontWeight: 600,
        marginBottom: 16,
    },
}));
