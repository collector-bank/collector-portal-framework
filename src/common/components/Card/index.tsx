import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import styled from '../../../';
import { Badge } from '..';
import { BadgeColor } from '../Badge';

const cross = `'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="14" height="14"%3E%3Cdefs%3E%3Cpath id="a" d="M13.4142136 12l5.2928932 5.2928932c.3905243.3905243.3905243 1.0236893 0 1.4142136-.3905243.3905243-1.0236893.3905243-1.4142136 0L12 13.4142136l-5.29289322 5.2928932c-.39052429.3905243-1.02368927.3905243-1.41421356 0-.39052429-.3905243-.39052429-1.0236893 0-1.4142136L10.5857864 12 5.29289322 6.70710678c-.39052429-.39052429-.39052429-1.02368927 0-1.41421356.39052429-.39052429 1.02368927-.39052429 1.41421356 0L12 10.5857864l5.2928932-5.29289318c.3905243-.39052429 1.0236893-.39052429 1.4142136 0 .3905243.39052429.3905243 1.02368927 0 1.41421356L13.4142136 12z"/%3E%3C/defs%3E%3Cg fill="none" fill-rule="evenodd" transform="translate(-5 -5)"%3E%3Cmask id="b" fill="%23fff"%3E%3Cuse xlink:href="%23a"/%3E%3C/mask%3E%3Cuse fill="%23000" fill-rule="nonzero" xlink:href="%23a"/%3E%3Cg fill="%23000" mask="url(%23b)"%3E%3Cpath d="M0 0h24v24H0z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E'`;

type CardBackgroundColors = 'white' | 'darkPurple';

const BodyContainer = styled.div<{ backgroundColor?: CardBackgroundColors }>(({ theme, backgroundColor }) => ({
    display: 'block',
    boxShadow: 'rgba(17,6,19, 0.3) 0px 1px 3px 0px, rgba(17,6,19, 0.12) 0px 15px 25px -10px',
    boxSizing: 'border-box',
    width: 290,
    padding: 24,
    paddingTop: 32,
    marginBottom: 20,
    color: backgroundColor !== 'darkPurple' ? theme.colors.black : theme.colors.white,
    textDecoration: 'none',
    minHeight: 200,
    borderRadius: theme.borderRadius.large,
    background: theme.colors[backgroundColor ? backgroundColor : theme.colors.white], // If default is changed here, change the text color default as well
}));

const Body = styled.div({
    overflowWrap: 'break-word',
});

const SubBody = styled.div(({ theme }) => ({
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

const Link = styled(RouterLink)(({ theme }) => ({
    display: 'inherit',
    color: 'inherit',
    textDecoration: 'none',
    position: 'relative',

    '&:hover::after': {
        opacity: 1,
    },

    '&:focus': {
        outline: 'none',

        'div:nth-of-type(2)': {
            outline: '-webkit-focus-ring-color auto 5px',
        },
    },

    // '&::after': { Removed temporarily until our designers can figure out what this should look like. This is the hover effect.
    //     minHeight: 180,
    //     borderRadius: theme.borderRadius.large,
    //     content: '""',
    //     width: '100% !important',
    //     height: 'calc(100% - 20px) !important',
    //     boxSizing: 'border-box',
    //     boxShadow: 'rgba(17,6,19, 0.4) 0px 1px 3px 0px, rgba(17,6,19, 0.22) 0px 15px 25px -10px',
    //     opacity: 0,
    //     position: 'absolute',
    //     left: 0,
    //     top: 0,
    //     transition: 'opacity 250ms ease-in-out',
    // },
}));

const HeadingContainer = styled.div({
    display: 'flex',
    justifyContent: 'space-between',
});

export interface CardProps {
    heading?: string;
    badgeColor?: BadgeColor;
    body: React.ReactNode;
    subBody?: React.ReactNode;
    onDismiss?: () => void;
    backgroundColor?: CardBackgroundColors;
    location?: string;
}

const BadgeContainer = styled.div({
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 2,
    transform: 'translate(-1px, -50%)',
});

const CardContainer = styled.div({
    position: 'relative',
});

export const Card: React.FC<CardProps> = ({ heading, badgeColor, body, subBody, onDismiss, location, ...rest }) => {
    const card = (
        <CardContainer>
            {heading && (
                <HeadingContainer>
                    <BadgeContainer>
                        <Badge color={badgeColor} label={heading} />
                    </BadgeContainer>

                    {onDismiss && <Dismissable onClick={onDismiss} />}
                </HeadingContainer>
            )}

            <BodyContainer {...rest}>
                <Body>{body}</Body>
                {subBody && <SubBody>{subBody}</SubBody>}
            </BodyContainer>
        </CardContainer>
    );

    if (location) {
        return <Link to={location}>{card}</Link>;
    } else {
        return card;
    }
};
