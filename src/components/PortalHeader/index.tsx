import React from 'react';
import styled from '../../';
import { MainMenu, MainMenuItem } from './MainMenu';
import { Logo } from './Logo';
import { BackBar } from '../BackBar';

const Container = styled.header(({ theme }) => ({
    position: 'relative',
    width: 280,
    display: 'flex',
    flexDirection: 'column',
    flexShrink: 0,
    minHeight: '100vh',
    background: theme.colors.sidebarBlue,
    color: theme.colors.white,

    [theme.breakpoints.mobileAndLower]: {
        minHeight: 'auto',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'fixed',
        width: '100%',
        zIndex: 60,
    },
}));

const BackBarContainer = styled.div(({ theme }) => ({
    display: 'none',

    [theme.breakpoints.mobileAndLower]: {
        display: 'block',
        marginTop: 46,
    },
}));

interface PortalHeaderProps {
    logoImage?: string;
    logoTarget: string;
    siteName: string;
    menuItems: MainMenuItem[];
    menuFooter?: JSX.Element;
    backLinkText?: string;
    backLink?: string;
}

export const PortalHeader: React.FC<PortalHeaderProps> = ({
    logoImage,
    logoTarget,
    siteName,
    menuItems,
    menuFooter,
    backLinkText,
    backLink,
}) => (
    <>
        <Container>
            <Logo image={logoImage} siteName={siteName} location={logoTarget} />
            <MainMenu items={menuItems} menuFooter={menuFooter} />
        </Container>

        <BackBarContainer>
            <BackBar linkText={backLinkText} link={backLink} />
        </BackBarContainer>
    </>
);
