import * as React from 'react';
import glamorous from 'glamorous';
import { Theme } from '../../../themes';

export type BadgeColor = 'primary' | 'yellow' | 'green' | 'red' | 'blue' | 'lightGray';

export interface BadgeProps {
    label: string;
    color?: BadgeColor;
    tooltip?: string;
}

const Container = glamorous.div<{ theme: Theme }>(
    {
        display: 'inline-block',
        position: 'relative',
        fontWeight: 500,
        marginLeft: '1em',
        marginRight: '1em',
    },
    ({ theme }) => ({
        font: theme.fonts.desktop.small,
    })
);

const Label = glamorous.span<{ color: BadgeColor, theme: Theme }>(
    {
        padding: '4px 8px',
        whiteSpace: 'nowrap',
        position: 'relative',

        '&:hover + span': {
            visibility: 'visible',
            opacity: 1,
            transform: 'translateY(0)',
        },
    },
    ({ color, theme }) => ({
        borderRadius: theme.borderRadius.small,
        background: theme.colors[color],
        color: color === 'yellow' || color === 'green' || color === 'lightGray' ? theme.colors.black : theme.colors.white,
    })
);

const Tooltip = glamorous.span<{ theme: Theme }>(
    {
        padding: '4px 8px',
        maxWidth: 350,
        position: 'absolute',
        zIndex: 20,
        left: 0,
        top: 'calc(100% + 8px)',
        visibility: 'hidden',
        opacity: 0,
        transform: 'translateY(-5px)',
        transitionDuration: '200ms',
        transitionProperty: 'opacity, visibility, transform',

        '&:before': {
            content: '""',
            borderLeft: '5px solid transparent',
            borderRight: '5px solid transparent',
            position: 'absolute',
            left: 10,
            top: -5,
        },
    },
    ({ theme }) => ({
        background: theme.colors.lightGray,
        color: theme.colors.black,
        borderRadius: theme.borderRadius.small,

        '&:before': {
            borderBottom: `5px solid ${theme.colors.lightGray}`,
        },
    })
);

export const Badge: React.StatelessComponent<BadgeProps> = ({ label, tooltip, color = 'primary' }) => (
    <Container>
        <Label color={color}>{label}</Label>
        {tooltip && <Tooltip>{tooltip}</Tooltip>}
    </Container>
);

Badge.displayName = 'Collector.Badge';
