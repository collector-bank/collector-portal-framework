import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from '../../';

const Container = styled.div(({ theme }) => ({
    boxSizing: 'border-box',
    height: 128,
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    flexShrink: 0,
    alignItems: 'center',
    fontWeight: 600,
    background: theme.colors.sidebarBlueLight,
    color: theme.colors.white,

    [theme.breakpoints.mobileAndLower]: {
        height: 46,
        background: 'none',
    },
}));

const Link = styled(RouterLink)(({ theme }) => ({
    color: 'inherit',
    textDecoration: 'none',
    position: 'relative',
    zIndex: 2,

    [theme.breakpoints.mobileAndLower]: {
        transform: 'scale(0.6)',
    },
}));

const Image = styled.img({
    display: 'block',
});

const SiteName = styled.div(({ theme }) => ({
    textAlign: 'center',
    font: theme.fonts.desktop.xl,
    fontWeight: 600,

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.xl,
        fontWeight: 600,
    },
}));

interface Props {
    location: string;
    image?: string;
    siteName: string;
}

export const Logo: React.StatelessComponent<Props> = ({ location, image, siteName }) => (
    <Container>
        <Link to={location}>
            {image
                ? <Image src={image} alt={siteName} />
                : <SiteName>{siteName}</SiteName>
            }
        </Link>
    </Container>
);
