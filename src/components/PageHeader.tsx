import React from 'react';
import styled from '../';

const PageHeaderContainer = styled.div(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    boxSizing: 'border-box',
    width: '100%',
    padding: '0 40px',

    '@media print': {
        display: 'none',
    },

    [theme.breakpoints.tabletAndLower]: {
        paddingLeft: 24,
        paddingRight: 24,
    },

    [theme.breakpoints.mobileAndLower]: {
        padding: 16,
        minHeight: 0,
    },
}));

const Title = styled.h1(({ theme }) => ({
    margin: 0,
    font: theme.fonts.desktop.xxl,
    fontWeight: 700,

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.xxl,
        fontWeight: 700,
    },
}));

export interface PageHeaderProps {
    title?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, children }) => (
    <PageHeaderContainer>{title ? <Title>{title}</Title> : children}</PageHeaderContainer>
);
