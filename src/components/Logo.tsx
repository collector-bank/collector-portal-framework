import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import glamorous from 'glamorous';
import { colors, breakpoints } from '../theme';

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
    [breakpoints.mobileAndLower]: {
        width: '90%',
    },
});

export interface LogoProps {
    location: string;
    image: string;
    siteName: string;
}

export const Logo: React.StatelessComponent<LogoProps> = ({ location, image, siteName }) => (
    <Container>
        <Link to={location}>
            <Image src={image} alt={siteName} />
        </Link>
    </Container>
);
