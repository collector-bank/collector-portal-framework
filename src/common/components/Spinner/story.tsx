import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { Spinner } from './';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Spinner', () => {
    return <Spinner size={number('Size', 80)} centered={boolean('Centered', false)} />;
});
