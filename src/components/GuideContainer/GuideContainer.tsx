import * as React from 'react';
import styled from '../..';
import { H1 } from '../../common/typography';

const Container = styled.div(({ theme }) => ({
    background: theme.colors.offWhite,
    overflow: 'hidden',
    height: '100%',

    [theme.breakpoints.mobileAndLower]: {
        minHeight: 'calc(100vh - 52px)',
    },
}));

const HeaderContainer = styled.div(({ theme }) => ({
    background: theme.colors.white,
    borderBottom: `1px solid ${theme.colors.lightGray}`,
}));

const HeaderContent = styled.div(({ theme }) => ({
    overflow: 'hidden',
    padding: 40,

    [theme.breakpoints.tabletAndLower]: {
        padding: 24,
    },

    [theme.breakpoints.mobileAndLower]: {
        padding: 16,
    },
}));

const Body = styled.div(({ theme }) => ({
    width: '100%',
    maxWidth: 800,
    padding: 40,

    [theme.breakpoints.tabletAndLower]: {
        padding: 24,
    },

    [theme.breakpoints.mobileAndLower]: {
        paddingTop: 0,
        paddingLeft: 0,
        paddingRight: 0,
    },
}));

const BodyContainer = styled.div(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
}));

interface Props {
    progressTracker: JSX.Element;
    label: string;
}

export const GuideContainer: React.StatelessComponent<Props> = ({ progressTracker, label, children }) => (
    <Container>
        <HeaderContainer>
            <HeaderContent>
                <H1 style={{ marginBottom: progressTracker ? 'initial' : 0 }}>{label}</H1>
                {progressTracker}
            </HeaderContent>
        </HeaderContainer>

        <BodyContainer>
            <Body>{children}</Body>
        </BodyContainer>
    </Container>
);
