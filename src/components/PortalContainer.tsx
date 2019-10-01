import React from 'react';
import { BackBar } from './BackBar';
import styled from '..';

const Container = styled.div(({ theme }) => ({
    backgroundColor: theme.colors.offWhite,
    display: 'flex',

    [theme.breakpoints.mobileAndLower]: {
        flexDirection: 'column',
    },
}));

const BackBarContainer = styled.div(({ theme }) => ({
    [theme.breakpoints.mobileAndLower]: {
        display: 'none',
    },
}));

export interface PortalContainerProps {
    backLinkText?: string;
    backLink?: string;
}

export const PortalContainer: React.FC<PortalContainerProps> = ({ children, backLinkText, backLink }) => {
    return (
        <>
            <BackBarContainer>
                <BackBar linkText={backLinkText} link={backLink} />
            </BackBarContainer>
            <Container>{children}</Container>
        </>
    );
};
