import glamorous from 'glamorous';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Theme } from '../themes';

const Container = glamorous.div<{ theme: Theme }>(
    {
        boxSizing: 'border-box',
        height: 128,
        padding: 16,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 600,
    },
    ({ theme }) => ({
        background: theme.colors.sidebarBlueLight,
        color: theme.colors.white,

        [theme.breakpoints.mobileAndLower]: {
            height: 76,
            background: 'none',
            justifyContent: 'flex-start',
        },
    })
);

const Link = glamorous(RouterLink)<{ theme: Theme }>(
    {
        color: 'inherit',
        textDecoration: 'none',
    },
    ({ theme }) => ({
        [theme.breakpoints.mobileAndLower]: {
            display: 'flex',
            alignItems: 'center',
        },
    })
);

const Image = glamorous.img<{ theme: Theme }>(
    {
        display: 'block',
    },
    ({ theme }) => ({
        [theme.breakpoints.mobileAndLower]: {
            width: '90%',
        },
    })
);

const SiteName = glamorous.div<{ theme: Theme }>(({ theme }) => ({
    textAlign: 'center',
    font: theme.fonts.desktop.xl,
    fontWeight: 600,

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.xl,
        fontWeight: 600,
    },
}));

export interface LogoProps {
    location: string;
    image?: string;
    siteName: string;
}

export const Logo: React.StatelessComponent<LogoProps> = ({ location, image, siteName }) => (
    <Container>
        <Link to={location}>{image ? <Image src={image} alt={siteName} /> : <SiteName>{siteName}</SiteName>}</Link>
    </Container>
);
