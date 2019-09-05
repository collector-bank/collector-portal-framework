import styled from '../../';

export const H1 = styled.h1<{}>(({ theme }) => ({
    font: theme.fonts.desktop.xxl,
    fontWeight: 700,
    marginBottom: 24,

    // We don't do SSR and have no plans on it at all, if you do use it -- redo this section.
    '&:first-child /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */': {
        marginTop: 0,
    },

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.xxl,
        fontWeight: 700,
        marginBottom: 16,
    },
}));
