import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from '../../../';

const cross = `'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14"%3E%3Cdefs%3E%3Cpath id="a" d="M13.4142136 12l5.2928932 5.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136-.3905243.3905243-1.0236893.3905243-1.4142136 0L12 13.4142136l-5.29289322 5.2928932c-.39052429.3905243-1.02368927.3905243-1.41421356 0-.39052429-.3905243-.39052429-1.0236893 0-1.4142136L10.5857864 12 5.29289322 6.70710678c-.39052429-.39052429-.39052429-1.02368927 0-1.41421356.39052429-.39052429 1.02368927-.39052429 1.41421356 0L12 10.5857864l5.2928932-5.29289318c.3905243-.39052429 1.0236893-.39052429 1.4142136 0 .3905243.39052429.3905243 1.02368927 0 1.41421356L13.4142136 12z"/%3E%3C/defs%3E%3Cg fill="none" fill-rule="evenodd" transform="translate(-5 -5)"%3E%3Cmask id="b" fill="%23fff"%3E%3Cuse xlink:href="%23a"/%3E%3C/mask%3E%3Cuse fill="%23000" fill-rule="nonzero" xlink:href="%23a"/%3E%3Cg fill="%23000" mask="url(%23b)"%3E%3Cpath d="M0 0h24v24H0z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'`;

const CardContainer = styled.div(({ theme }) => ({
    display: 'block',
    boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.2)',
    boxSizing: 'border-box',
    width: 280,
    padding: 20,
    marginBottom: 20,
    color: 'inherit',
    textDecoration: 'none',
    minHeight: 200,
    borderRadius: theme.borderRadius.large,
    background: theme.colors.white,
}));

const Heading = styled.div(({ color, theme }) => ({
    display: 'inline-block',
    fontWeight: 700,
    marginBottom: 16,
    borderBottom: '3px solid',
    borderColor: color ? theme.colors[color] : 'transparent',
}));

const Body = styled.div({
    overflowWrap: 'break-word',
});

const SubBody = styled.div(({ theme }) => ({
    paddingTop: 16,
    borderColor: theme.colors.lightGray,
}));

const Dismissable = styled.div({
    width: 14,
    height: 14,
    backgroundImage: `url(${cross})`,

    '&:hover': {
        cursor: 'pointer',
    },
});

const Link = styled(RouterLink)({
    display: 'inline-block',
    color: 'inherit',
    textDecoration: 'none',
});

const HeadingContainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
});

export type CardColors = 'primary' | 'green' | 'red' | 'blue' | 'yellow' | undefined;

export interface CardProps {
    heading?: string;
    color?: CardColors;
    body: React.ReactNode;
    subBody?: React.ReactNode;
    onDismiss?: () => void;
    location?: string;
}

export const Card: React.FC<CardProps> = ({ heading, color, body, subBody, onDismiss, location }) => {
    const card = (
        <CardContainer>
            {heading && (
                <HeadingContainer>
                    <Heading color={color}>{heading}</Heading>
                    {onDismiss && <Dismissable onClick={onDismiss} />}
                </HeadingContainer>
            )}
            <Body>{body}</Body>
            {subBody && <SubBody>{subBody}</SubBody>}
        </CardContainer>
    );

    if (location) {
        return <Link to={location}>{card}</Link>;
    } else {
        return card;
    }
};
