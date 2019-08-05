import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import notes from './README.md';
import { Modal } from '.';
import styled from '../..';

const components = storiesOf('Portal Components', module);

const Container = styled.div({
    minHeight: 250,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
});

components.addDecorator(withKnobs);

components.add(
    'Modal',
    () => {
        return (
            <Modal isOpen={true}>
                <Container>A nice modal that is always</Container>
            </Modal>
        );
    },
    { notes }
);
