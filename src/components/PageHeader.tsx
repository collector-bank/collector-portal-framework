import React from 'react';
import glamorous from 'glamorous';
import { Theme } from '../themes';

const PageHeaderContainer = glamorous.div<{ theme: Theme }>(
    {
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        boxSizing: 'border-box',
        width: '100%',
        minHeight: 129,
        padding: '16px 40px',

        '@media print': {
            display: 'none',
        },
    },
    ({ theme }) => ({
        borderBottom: `1px solid ${theme.colors.lightGray}`,

        [theme.breakpoints.tabletAndLower]: {
            paddingLeft: 24,
            paddingRight: 24,
        },

        [theme.breakpoints.mobileAndLower]: {
            padding: 16,
            minHeight: 0,
            border: 0,
        },
    })
);

const Title = glamorous.h1<{ theme: Theme }>(({ theme }) => ({
    margin: 0,
    font: theme.fonts.desktop.xxl,
    fontWeight: 600,

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.xxl,
        fontWeight: 600,
    },
}));

export interface PageHeaderProps {
    title?: string;
}

export const PageHeader: React.StatelessComponent<PageHeaderProps> = ({ title, children }) => (
    <PageHeaderContainer>{title ? <Title>{title}</Title> : children}</PageHeaderContainer>
);
