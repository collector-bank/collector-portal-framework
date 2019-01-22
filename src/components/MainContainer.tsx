import styled from '../';

export const MainContainer = styled.div<{}>(({ theme }) => ({
    boxSizing: 'border-box',
    width: '100%',
    padding: 40,

    [theme.breakpoints.tabletAndLower]: {
        padding: 24,
    },

    [theme.breakpoints.mobileAndLower]: {
        padding: 16,
    },
}));
