import styled from '..';

export const PageContainer = styled.div<{}>(({ theme }) => ({
    boxSizing: 'border-box',
    width: '100%',
    padding: 40,

    [theme.breakpoints.tabletAndLower]: {
        padding: 24,
    },

    [theme.breakpoints.mobileAndLower]: {
        padding: '24px 16px',
    },
}));
