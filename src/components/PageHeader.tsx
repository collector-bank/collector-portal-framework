import * as React from 'react';
import glamorous from 'glamorous';
import { breakpoints, colors, fonts } from '../theme';

const PageHeaderContainer = glamorous.div({
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
    boxSizing: 'border-box',
    width: '100%',
    minHeight: 129,
    padding: '16px 40px',
    borderBottom: `1px solid ${colors.lightGray}`,

    [breakpoints.tabletAndLower]: {
        paddingLeft: 24,
        paddingRight: 24,
    },

    [breakpoints.mobileAndLower]: {
        padding: 16,
        minHeight: 0,
        border: 0,
    },
});

const Title = glamorous.h1({
    margin: 0,
    font: fonts.desktop.xxl,
    fontWeight: 600,

    [breakpoints.mobileAndLower]: {
        font: fonts.mobile.xxl,
        fontWeight: 600,
    },
});

export interface PageHeaderProps {
    title?: string;
}

export const PageHeader: React.StatelessComponent<PageHeaderProps> = ({ title, children }) => (
    <PageHeaderContainer>
        {title
            ? <Title>{title}</Title>
            : children
        }
    </PageHeaderContainer>
);
