import styled from '../..';

export const GuideContentContainer = styled.div<{ maxWidth?: number }>(({ theme, maxWidth }) => ({
    paddingBottom: 'calc(40px - 1.25em)',
    borderRadius: theme.borderRadius.small,
    background: theme.colors.white,
    maxWidth: maxWidth ? maxWidth : undefined,
    margin: '0 0 24px',
}));
