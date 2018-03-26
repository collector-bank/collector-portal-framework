import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import glamorous from 'glamorous';
import { colors, breakpoints, fonts } from '../theme';

const Container = glamorous.div({
    background: colors.sidebarBlueLight,
    color: colors.white,
    boxSizing: 'border-box',
    height: 128,
    padding: 16,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 600,

    [breakpoints.mobileAndLower]: {
        height: 76,
        background: 'none',
        justifyContent: 'flex-start',
    },
});

const Link = glamorous(RouterLink)({
    color: 'inherit',
    textDecoration: 'none',

    [breakpoints.mobileAndLower]: {
        display: 'flex',
        alignItems: 'center',
    },
});

const Image = glamorous.img({
    display: 'block',

    [breakpoints.mobileAndLower]: {
        width: '90%',
    },
});

const SiteName = glamorous.div({
    textAlign: 'center',
    font: fonts.desktop.xl,
    fontWeight: 600,

    [breakpoints.mobileAndLower]: {
        font: fonts.desktop.medium,
        fontWeight: 600,
    },
});

export interface LogoProps {
    location: string;
    image?: string;
    siteName: string;
}

export const Logo: React.StatelessComponent<LogoProps> = ({ location, image, siteName }) => (
    <Container>
        <Link to={location}>
            {image
                ? <Image src={image} alt={siteName} />
                : <SiteName>{siteName}</SiteName>
            }
        </Link>
    </Container>
);
