import styled from '..';

export const PortalContainer = styled.div<{}>(({ theme }) => ({
    backgroundColor: theme.colors.offWhite,
    display: 'flex',

    [theme.breakpoints.mobileAndLower]: {
        flexDirection: 'column',
    },
}));
