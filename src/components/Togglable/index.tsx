import React from 'react';
import Collapse from 'react-css-collapse';
import glamorous from 'glamorous';
import uniqid from 'uniqid';
import { css } from 'glamor';
import { H2, H3 } from '../../components';

const expandIcon = require('./expand.svg');
const collapseIcon = require('./collapse.svg');

const Container = glamorous.div({
    padding: '16px 0',
    maxWidth: 900,
});

const Header = glamorous.div({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    '> h2, > h3': {
        margin: 0,
    },
});

const ToggleButton = glamorous.button<{ expanded: boolean; iconSize: Size }>(
    {
        fontFamily: 'inherit',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 0,
        marginRight: 12,
        backgroundRepeat: 'no-repeat',
    },
    ({ expanded, iconSize }) => ({
        backgroundImage: expanded ? `url(${collapseIcon})` : `url(${expandIcon})`,
        width: iconSize === 'medium' ? 24 : 21,
        height: iconSize === 'medium' ? 24 : 21,
        backgroundSize: iconSize === 'medium' ? undefined : 18,
    })
);

const transition = css({
    transition: 'height 150ms',
});

export interface TogglableProps {
    title: string;
    defaultExpanded?: boolean;
    size?: Size;
}

type Size = 'small' | 'medium';

export interface TogglableState {
    isExpanded: boolean;
    id: string;
}

export class Togglable extends React.Component<TogglableProps, TogglableState> {
    state: TogglableState = {
        isExpanded: false,
        id: uniqid(),
    };

    componentWillMount() {
        if (this.props.defaultExpanded) {
            this.setState({ isExpanded: true });
        }
    }

    private toggle = () => {
        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded,
        }));
    };

    render() {
        const { children, title } = this.props;

        const size: Size = this.props.size ? this.props.size : 'medium';

        return (
            <Container>
                <Header onClick={this.toggle} aria-expanded={this.state.isExpanded} aria-controls={this.state.id}>
                    <ToggleButton expanded={this.state.isExpanded} iconSize={size} />
                    {size === 'medium' ? <H2>{title}</H2> : <H3>{title}</H3>}
                </Header>
                <Collapse isOpen={this.state.isExpanded} className={`${transition}`}>
                    <div id={this.state.id}>{children}</div>
                </Collapse>
            </Container>
        );
    }
}
