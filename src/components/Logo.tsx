import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import glamorous from 'glamorous';
import { colors, breakpoints } from '../theme';

const Container = glamorous.div({
    background: colors.sidebarBlueLight,
    color: colors.white,
    height: 128,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: 600,

    [breakpoints.mobileAndLower]: {
        height: 44,
        background: 'none',
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

const Heading = glamorous.div({
    fontSize: 26,

    [breakpoints.mobileAndLower]: {
        fontSize: 18,
    },
});

const SubHeading = glamorous.div({
    display: 'block',
    color: '#E50C81',
    fontSize: 18,

    [breakpoints.mobileAndLower]: {
        fontSize: 14,
        display: 'initial',
        marginLeft: '.5em',
    },
});

export interface LogoProps {
    location: string;
    companyName: string;
    siteName: string;
}

export const Logo: React.StatelessComponent<LogoProps> = ({ location, companyName, siteName }) => (
    <Container>
        <Link to={location}>
            <Heading>{companyName}</Heading>
            <SubHeading>{siteName}</SubHeading>
        </Link>
    </Container>
);
