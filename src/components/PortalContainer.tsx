import React from 'react';
import { BackBar } from './BackBar';
import styled from '..';

const Container = styled.div(({ theme }) => ({
    backgroundColor: theme.colors.lightOffWhite,
    display: 'flex',

    [theme.breakpoints.mobileAndLower]: {
        flexDirection: 'column',
    },
}));

export interface PortalContainerProps {
    backLinkText?: string;
    backLink?: string;
}

export const PortalContainer: React.FC<PortalContainerProps> = ({ children, backLinkText, backLink }) => {
    return (
        <>
            <BackBar linkText={backLinkText} link={backLink} />
            <Container>{children}</Container>
        </>
    );
};
