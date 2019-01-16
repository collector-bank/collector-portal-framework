import React from 'react';
import { Tooltip } from '../Tooltip';
import styled from '../../../styled';

export type BadgeColor = 'primary' | 'yellow' | 'green' | 'red' | 'blue' | 'lightGray';

export interface BadgeProps {
    label: string;
    color?: BadgeColor;
    tooltip?: string;
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
    padding: '4px 8px',
    whiteSpace: 'nowrap',
    position: 'relative',
    borderRadius: theme.borderRadius.small,
    background: theme.colors[color],
    color: color === 'yellow' || color === 'green' || color === 'lightGray' ? theme.colors.black : theme.colors.white,
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
        const { label, tooltip, color = 'primary' } = this.props;

        return (
            <Container>
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
