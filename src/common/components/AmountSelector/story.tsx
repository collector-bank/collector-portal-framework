import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { AmountSelector } from './';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Amount selector', () => {
    return (
        <AmountSelector
            currency={text('Currency', 'SEK')}
            min={number('Min', 100)}
            max={number('Max', 1000)}
            value={number('Value', 500)}
            onChange={action('input changed')}
            stepSize={number('Step size', 100)}
        />
    );
});
