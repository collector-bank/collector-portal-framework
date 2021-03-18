import * as React from 'react';
import styled from '../..';
import { H1 } from '../../common/typography';

const Container = styled.div(({ theme }) => ({
    background: theme.colors.white,
    overflow: 'hidden',
    height: '100%',

    [theme.breakpoints.mobileAndLower]: {
        minHeight: 'calc(100vh - 52px)',
    },
}));

const HeaderContainer = styled.div(({ theme }) => ({
    background: theme.colors.white,
    paddingBottom: 40,
}));

const HeaderContent = styled.div({
    overflow: 'hidden',
});

const Body = styled.div({
    width: '100%',
    maxWidth: 800,
});

const BodyContainer = styled.div({
    display: 'flex',
    justifyContent: 'center',
});

interface Props {
    progressTracker: JSX.Element;
    label: string;
}

export const GuideContainer: React.FC<Props> = ({ progressTracker, label, children }) => (
    <Container>
        <HeaderContainer>
            <HeaderContent>
                <H1 style={{ marginBottom: progressTracker ? undefined : 0 }}>{label}</H1>
                {progressTracker}
            </HeaderContent>
        </HeaderContainer>

        <BodyContainer>
            <Body>{children}</Body>
        </BodyContainer>
    </Container>
);
