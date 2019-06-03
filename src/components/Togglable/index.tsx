import React, { useState } from 'react';
import Collapse from 'react-css-collapse';
import { ClassNames } from '@emotion/core';
import uniqid from 'uniqid';
import { H2, H3 } from '../../components';
import styled from '../../';

const expandIcon = require('./expand.svg');
const collapseIcon = require('./collapse.svg');

const Container = styled.div({
    padding: '16px 0',
    maxWidth: 900,
});

const Header = styled.div({
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',

    '> h2, > h3': {
        margin: 0,
    },
});

const ToggleButton = styled.button<{ expanded: boolean; iconSize: Size }>(({ expanded, iconSize }) => ({
    fontFamily: 'inherit',
    cursor: 'pointer',
    backgroundColor: 'transparent',
    border: 0,
    marginRight: 12,
    backgroundRepeat: 'no-repeat',
    backgroundImage: expanded ? `url(${collapseIcon})` : `url(${expandIcon})`,
    width: iconSize === 'medium' ? 24 : 21,
    height: iconSize === 'medium' ? 24 : 21,
    backgroundSize: iconSize === 'medium' ? undefined : 18,
}));

type Size = 'small' | 'medium';

export interface TogglableProps {
    title: string;
    defaultExpanded?: boolean;
    size?: Size;
    onClick?: (isExpanded: boolean) => void;
}

export const Togglable: React.FC<TogglableProps> = ({ defaultExpanded, size, title, children, onClick }) => {
    const [isExpanded, setIsExpanded] = useState(!!defaultExpanded);
    const id = uniqid();
    const toggleSize: Size = size ? size : 'medium';

    const toggle = () => {
        setIsExpanded(prevExpanded => !prevExpanded);
        if (onClick) {
            onClick(isExpanded);
        }
    };

    return (
        <ClassNames>
            {({ css }) => (
                <Container>
                    <Header onClick={toggle} aria-expanded={isExpanded} aria-controls={id}>
                        <ToggleButton expanded={isExpanded} iconSize={toggleSize} />
                        {toggleSize === 'medium' ? <H2>{title}</H2> : <H3>{title}</H3>}
                    </Header>

                    <Collapse isOpen={isExpanded} className={css({ transition: 'height 150ms' })}>
                        <div id={id}>{children}</div>
                    </Collapse>
                </Container>
            )}
        </ClassNames>
    );
};
