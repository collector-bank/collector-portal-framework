import React from 'react';
import { Tooltip } from '../Tooltip';
import { Theme } from '../../../themes';
import { withTheme } from 'emotion-theming';
import styled from '../../../styled';

interface Props {
    description: string;
}

interface State {
    tooltipIsVisible: boolean;
}

const Container = styled("div")(({ theme }) => ({
    display: 'inline-block',
    width: 20,
    height: 20,
    marginLeft: 4,
    position: 'relative',

    [theme.breakpoints.mobileAndLower]: {
        position: 'static',
    },
}));

export class Description_ extends React.Component<Props & { theme: Theme }, State> {
    static displayName = 'Collector.Description';

    state: State = {
        tooltipIsVisible: false
    };

    private showTooltip = () => {
        this.setState({ tooltipIsVisible: true });
    };

    private hideTooltip = () => {
        this.setState({ tooltipIsVisible: false });
    };

    private toggleTooltip = (event: React.MouseEvent<HTMLElement>) => {
        event.preventDefault();

        this.setState(prevState => ({ tooltipIsVisible: !prevState.tooltipIsVisible }));        
    };

    render() {
        return (
            <Container
                onMouseEnter={this.showTooltip}
                onMouseLeave={this.hideTooltip}
                onClick={this.toggleTooltip}
            >
                <svg fill={this.props.theme.colors.primary} viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0 0h24v24H0z" fill="none" />
                    <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
                </svg>
                
                <Tooltip visible={this.state.tooltipIsVisible}>
                    {this.props.description}
                </Tooltip>
            </Container>
        );
    }
}

export const Description = withTheme(Description_ as React.ComponentClass<Props>);
