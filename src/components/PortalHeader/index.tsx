import React from 'react';
import styled from '../../';
import { MainMenu, MainMenuItem, Tracking } from './MainMenu';
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
    menuTracking?: Tracking[];
}

export const PortalHeader: React.FC<PortalHeaderProps> = ({ logoImage, logoTarget, siteName, menuItems, menuFooter, menuTracking }) => (
    <>
        <Container>
            <Logo image={logoImage} siteName={siteName} location={logoTarget} />
            <MainMenu items={menuItems} menuFooter={menuFooter} menuTracking={menuTracking} />
        </Container>
    </>
);
