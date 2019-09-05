import styled from '../../';

export const H3 = styled.h3<{}>(({ theme }) => ({
    font: theme.fonts.desktop.large,
    fontWeight: 700,
    marginBottom: 16,

    // We don't do SSR and have no plans on it at all, if you do use it -- redo this section.
    '&:first-child /* emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason */': {
        marginTop: 0,
    },

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.large,
        fontWeight: 700,
        marginBottom: 12,
    },
}));
