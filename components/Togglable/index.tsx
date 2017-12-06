import * as React from 'react';
const Collapse = require('react-css-collapse'); // `require` to suppress "missing declaration file warning"
import glamorous from 'glamorous';
import * as uniqid from 'uniqid';
import { css } from 'glamor';
import { colors } from '../../theme';
import { H2 } from '../../components';

const expandIcon = require('./expand.svg');
const collapseIcon = require('./collapse.svg');

const Container = glamorous.div<{ expanded: boolean }>(
    {
        borderTop: `1px solid ${colors.lightGray}`,
        borderBottom: '1px solid',
        transition: 'border-color 200ms linear',
        padding: '16px 0',
        maxWidth: 900,
    },
    ({ expanded }) => ({
        borderBottomColor: expanded ? 'transparent' : colors.lightGray,
    }),
);

const Header = glamorous.div({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    '> *': {
        margin: 0,
    },
});

const ToggleButton = glamorous.button<{ expanded: boolean }>(
    {
        fontFamily: 'inherit',
        cursor: 'pointer',
        backgroundColor: 'transparent',
        border: 0,
        width: 24,
        height: 24,
        marginRight: 12,
    },
    ({ expanded }) => ({
        backgroundImage: expanded ? `url(${collapseIcon})` : `url(${expandIcon})`,
    }),
);

const transition = css({
    transition: 'height 150ms',
});

interface Props {
    title: string;
}

interface State {
    isExpanded: boolean;
    id: string;
}

export class Togglable extends React.Component<Props, State> {
    state: State = {
        isExpanded: false,
        id: uniqid(),
    };

    private toggle = () => {
        this.setState(prevState => ({
            isExpanded: !prevState.isExpanded,
        }));
    }

    render() {
        const { children, title } = this.props;

        return (
            <Container expanded={this.state.isExpanded}>
                <Header onClick={this.toggle} aria-expanded={this.state.isExpanded} aria-controls={this.state.id}>
                    <ToggleButton expanded={this.state.isExpanded} />
                    <H2>{title}</H2>
                </Header>
                <Collapse isOpen={this.state.isExpanded} className={`${transition}`}>
                    <div id={this.state.id}>{children}</div>
                </Collapse>
            </Container>
        );
    }
}
