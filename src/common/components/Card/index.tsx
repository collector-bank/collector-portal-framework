import * as React from 'react';
import glamorous from 'glamorous';
import { Theme } from '../../../themes';

const CardContainer = glamorous.div<{ theme: Theme }>(
    {
        display: 'block',
        boxShadow: '0 2px 7px 0 rgba(0, 0, 0, 0.2)',
        boxSizing: 'border-box',
        width: 280,
        padding: 20,
        marginBottom: 20,
        color: 'inherit',
        textDecoration: 'none',
        minHeight: 200,
    },
    ({ theme }) => ({
        borderRadius: theme.borderRadius.large,
        background: theme.colors.white,
    })
);

const Heading = glamorous.div<{ color: CardColors; theme: Theme }>(
    {
        display: 'inline-block',
        fontWeight: 600,
        marginBottom: 16,
        borderBottom: '3px solid',
    },
    ({ color, theme }) => ({
        borderColor: color ? theme.colors[color] : 'transparent',
    })
);

const Body = glamorous.div({
    overflowWrap: 'break-word',
});

const SubBody = glamorous.div<{ theme: Theme }>(
    {
        borderTop: '1px solid',
        marginTop: 16,
        paddingTop: 16,
    },
    ({ theme }) => ({
        borderColor: theme.colors.lightGray,
    })
);

export type CardColors = 'primary' | 'green' | 'red' | 'blue' | 'yellow' | undefined;

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
