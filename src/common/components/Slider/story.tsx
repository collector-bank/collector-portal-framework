import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';
import { Slider } from './';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Slider', () => {
    return (
        <Slider
            type="range"
            min={number('Min', 100)}
            max={number('Max', 1000)}
            value={number('Value', 500)}
            onChange={action('value changed')}
        />
    );
});
