import styled from '..';

export const PortalMain = styled.main<{}>(({ theme }) => ({
    display: 'block',
    width: '100%',
    maxWidth: 1200,
    minHeight: 250,
    position: 'relative',
    backgroundColor: theme.colors.white,
    borderRight: `1px solid ${theme.colors.lightGray}`,

    [theme.breakpoints.tabletAndLower]: {
        borderRight: 0,
    },

    [theme.breakpoints.mobileAndLower]: {
        marginTop: 46, // the height of the sticky header
    },
}));
