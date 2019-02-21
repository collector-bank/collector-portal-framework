import React from 'react';
import styled from '../../';
import { MainMenu, MainMenuItem } from './MainMenu';
import { Logo } from './Logo';

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

interface PortalHeaderProps {
    logoImage?: string;
    logoTarget: string;
    siteName: string;
    menuItems: MainMenuItem[];
    menuFooter?: JSX.Element;
}

export const PortalHeader: React.StatelessComponent<PortalHeaderProps> = ({ logoImage, logoTarget, siteName, menuItems, menuFooter }) => (
    <Container>
        <Logo image={logoImage} siteName={siteName} location={logoTarget} />
        <MainMenu items={menuItems} menuFooter={menuFooter} />
    </Container>
);
