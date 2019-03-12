import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, number } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import { AmountSelector } from './';
import notes from './README.md';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

const store = new Store({
    value: 1000,
});

components.add(
    'Amount selector',
    () => {
        return (
            <div style={{ maxWidth: 500 }}>
                <State store={store}>
                    <AmountSelector
                        currency={text('Currency', 'SEK')}
                        min={number('Min', 940)}
                        max={number('Max', 2038)}
                        value={store.get('value')}
                        onChange={value => store.set({ value })}
                        stepSize={number('Step size', 100)}
                    />
                </State>
            </div>
        );
    },
    { notes }
);
