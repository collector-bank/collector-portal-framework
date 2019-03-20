import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import { Slider } from './';
import notes from './README.md';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

const store = new Store({
    value: 500,
});

components.add(
    'Slider',
    () => {
        return (
            <div style={{ maxWidth: 500 }}>
                <State store={store}>
                    <Slider
                        type="range"
                        min={number('Min', 100)}
                        max={number('Max', 1000)}
                        value={store.get('value')}
                        onChange={event => store.set({ value: Number(event.currentTarget.value) })}
                    />
                </State>
            </div>
        );
    },
    { notes }
);
