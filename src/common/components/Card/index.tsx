import * as React from 'react';
import glamorous from 'glamorous';
import { colors, borderRadius } from '../../../theme';

const CardContainer = glamorous.div({
    display: 'block',
    boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.2)',
    borderRadius: borderRadius.large,
    boxSizing: 'border-box',
    width: 280,
    padding: 20,
    marginRight: 20,
    marginBottom: 20,
    color: 'inherit',
    textDecoration: 'none',
    minHeight: 200,
});

const Heading = glamorous.div<{ color: CardColors }>(
    {
        display: 'inline-block',
        fontWeight: 600,
        marginBottom: 16,
        borderBottom: '3px solid',
    },
    ({ color }) => ({
        borderColor: color ? colors[color] : 'transparent',
    })
);

const Body = glamorous.div({});

const SubBody = glamorous.div({
    borderTop: '1px solid',
    borderColor: colors.lightGray,
    marginTop: 16,
    paddingTop: 16,
});

export type CardColors = 'purple' | 'green' | 'red' | 'blue' | 'yellow' | undefined;

export interface CardProps {
    heading?: string;
    color?: CardColors;
    body: React.ReactNode;
    subBody?: React.ReactNode;
}

export const Card: React.StatelessComponent<CardProps> = ({ heading, color, body, subBody }) => {
    return (
        <CardContainer>
            {heading && <Heading color={color}>{heading}</Heading>}
            <Body>{body}</Body>
            {subBody && <SubBody>{subBody}</SubBody>}
        </CardContainer>
    );
};
