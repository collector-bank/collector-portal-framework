import styled from '../../';

export const H3 = styled.h3<{}>(({ theme }) => ({
    font: theme.fonts.desktop.large,
    fontWeight: 600,
    marginBottom: 16,

    '&:first-child': {
        marginTop: 0,
    },

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.large,
        fontWeight: 600,
        marginBottom: 12,
    },
}));
