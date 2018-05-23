import * as React from 'react';
import glamorous from 'glamorous';
import { colors, borderRadius, fonts } from '../../../theme';

export type BadgeColor = 'purple' | 'yellow';

export interface BadgeProps {
    label: string;
    color?: BadgeColor;
}

const BadgeContainer = glamorous.span<{ color: BadgeColor }>(
    {
        color: colors.white,
        borderRadius: borderRadius.small,
        padding: '4px 8px',
        font: fonts.desktop.small,
        fontWeight: 500,
        whiteSpace: 'nowrap',
        marginLeft: '1em',
        marginRight: '1em',
    },
    ({ color }) => ({
        background: colors[color],
        color: color === 'yellow' ? colors.black : colors.white
    })
);

export const Badge: React.StatelessComponent<BadgeProps> = ({ label, color = 'purple' }) => (
    <BadgeContainer color={color}>
        {label}
    </BadgeContainer>
);

Badge.displayName = 'Collector.Badge';
