import styled from '../..';

export const GuideContentContainer = styled.div<{ maxWidth?: number }>(({ theme, maxWidth }) => ({
    padding: 40,
    paddingBottom: 'calc(40px - 1.25em)',
    borderRadius: theme.borderRadius.small,
    background: theme.colors.white,
    maxWidth: maxWidth ? maxWidth : undefined,
    margin: maxWidth ? '0 auto 24px' : '0 0 24px',

    [theme.breakpoints.tabletAndLower]: {
        padding: 20,
    },

    [theme.breakpoints.mobileAndLower]: {
        padding: 16,
    },
}));
