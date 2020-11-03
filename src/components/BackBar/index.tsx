import React from 'react';
import { BackArrow } from './BackArrow';
import styled from '../..';
import { TextLink } from '../../common/typography';

const Container = styled.div(({ theme }) => ({
    width: '100%',
    height: 52,
    background: theme.colors.lightOffWhite,
    color: theme.colors.purple,
    fontWeight: 300,

    [theme.breakpoints.mobileAndLower]: {
        height: 46,
    },
}));

const Description = styled.div({
    marginLeft: 16,
});

const Link = styled(TextLink)(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: 24,
    paddingRight: 24,
    maxWidth: 200,
    color: theme.colors.purple,
    transition: 'color 200ms ease-in',

    '&:hover': {
        color: theme.colors.darkIndigo,
    },
}));

interface BackBarProps {
    linkText?: string;
    link?: string;
}

export const BackBar: React.FC<BackBarProps> = ({ linkText, link }) => {
    return linkText !== undefined && link !== undefined ? (
        <Container>
            <Link href={link}>
                <BackArrow />
                <Description>{linkText}</Description>
            </Link>
        </Container>
    ) : null;
};
