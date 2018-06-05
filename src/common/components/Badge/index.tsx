import * as React from 'react';
import glamorous from 'glamorous';
import { colors, borderRadius, fonts } from '../../../theme';

export type BadgeColor = 'purple' | 'yellow' | 'green' | 'red' | 'blue';

export interface BadgeProps {
    label: string;
    color?: BadgeColor;
    tooltip?: string;
}

const Container = glamorous.div({
    display: 'inline-block',
    position: 'relative',
    font: fonts.desktop.small,
    fontWeight: 500,
    marginLeft: '1em',
    marginRight: '1em',
});

const Label = glamorous.span<{ color: BadgeColor }>(
    {
        color: colors.white,
        borderRadius: borderRadius.small,
        padding: '4px 8px',
        whiteSpace: 'nowrap',
        position: 'relative',
        zIndex: 2,

        '&:hover + span': {
            visibility: 'visible',
            opacity: 1,
            transform: 'translateY(0)',
        }
    },
    ({ color }) => ({
        background: colors[color],
        color: color === 'yellow' || color === 'green' ? colors.black : colors.white
    })
);

const arrow = {
    content: '""',
    borderLeft: '5px solid transparent',
    borderRight: '5px solid transparent',
    borderBottom: `5px solid ${colors.lightGray}`,
    position: 'absolute',
    left: 10,
    top: -5,
};

const Tooltip = glamorous.span({
    background: colors.lightGray,
    color: colors.black,
    borderRadius: borderRadius.small,
    padding: '4px 8px',
    maxWidth: 350,
    position: 'absolute',
    zIndex: 1,
    left: 0,
    top: 'calc(100% + 8px)',
    visibility: 'hidden',
    opacity: 0,
    transform: 'translateY(-10px)',
    transitionDuration: '200ms',
    transitionProperty: 'opacity, visibility, transform',

    '&:before': arrow
});

export const Badge: React.StatelessComponent<BadgeProps> = ({ label, tooltip, color = 'purple' }) => (
    <Container>
        <Label color={color}>{label}</Label>
        {tooltip && <Tooltip>{tooltip}</Tooltip>}
    </Container>
);

Badge.displayName = 'Collector.Badge';
