import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import notes from './README.md';
import { InformationContainer } from '.';

const components = storiesOf('Portal Components', module);

components.addDecorator(withKnobs);

components.add(
    'InformationContainer',
    () => {
        return <InformationContainer>A nice looking container for information that you need with a consistent style</InformationContainer>;
    },
    { notes }
);
