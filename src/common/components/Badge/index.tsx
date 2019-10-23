import React from 'react';
import { Tooltip } from '../Tooltip';
import styled from '../../../';

export type BadgeColor = 'purple' | 'yellow' | 'green' | 'red' | 'blue' | 'pink' | 'lightGray';

export interface BadgeProps extends React.ComponentProps<'div'> {
    label: string;
    color?: BadgeColor;
    tooltip?: string;
    className?: string;
}

interface BadgeState {
    tooltipIsVisible: boolean;
}

const Container = styled.div(({ theme }) => ({
    display: 'inline-block',
    font: theme.fonts.desktop.small,
    fontWeight: 500,
    marginLeft: '1em',
    marginRight: '1em',
    position: 'relative',

    [theme.breakpoints.mobileAndLower]: {
        position: 'static',
    },
}));

const Label = styled.span<{ color: BadgeColor }>(({ color, theme }) => ({
    padding: '4px 12px',
    whiteSpace: 'nowrap',
    position: 'relative',
    borderRadius: theme.borderRadius.large,
    background: theme.colors[color],
    color: color === 'yellow' || color === 'green' || color === 'lightGray' ? theme.colors.darkIndigo : theme.colors.white,
}));

export class Badge extends React.Component<BadgeProps, BadgeState> {
    static displayName = 'Collector.Badge';

    state: BadgeState = {
        tooltipIsVisible: false,
    };

    private showTooltip = () => {
        this.setState({ tooltipIsVisible: true });
    };

    private hideTooltip = () => {
        this.setState({ tooltipIsVisible: false });
    };

    private toggleTooltip = () => {
        this.setState(prevState => ({ tooltipIsVisible: !prevState.tooltipIsVisible }));
    };

    render() {
        const { label, tooltip, color = 'purple', ...rest } = this.props;

        return (
            <Container {...rest}>
                <Label
                    color={color}
                    onMouseEnter={tooltip ? this.showTooltip : undefined}
                    onMouseLeave={tooltip ? this.hideTooltip : undefined}
                    onClick={tooltip ? this.toggleTooltip : undefined}
                >
                    {label}
                </Label>
                {tooltip && <Tooltip visible={this.state.tooltipIsVisible}>{tooltip}</Tooltip>}
            </Container>
        );
    }
}
