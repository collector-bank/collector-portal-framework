import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import { RadioButton } from './';
import { RadioButtonGroup } from './RadioButtonGroup';
import notes from './README.md';
import groupReadme from './GroupREADME.md';
import { Text } from '../../typography';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

const state = new Store({
    selected: false,
});

components.add(
    'Radio button',
    () => {
        return (
            <State store={state}>
                <RadioButton
                    label={text('Label', 'En label')}
                    disabled={boolean('Disabled', false)}
                    selected={state.get('selected')}
                    onChange={() => state.set({ selected: !state.get('selected') })}
                />
            </State>
        );
    },
    { notes }
);

const groupStore = new Store({
    selected: 'foo',
});

components.add(
    'Radio button group',
    () => {
        let items = [
            {
                key: 'foo',
                label: 'Alternativ 1',
            },
            {
                key: 'bar',
                label: (
                    <div style={{ display: 'block' }}>
                        <Text style={{ marginBottom: -2, fontWeight: 700 }}>Alternativ 2</Text>
                        <Text style={{ marginBottom: 0 }}>Här är ett syskon-element, som alltid syns.</Text>
                    </div>
            )},
            {
                key: 'baz',
                label: 'Alternativ 3',
                child: <div>Här är ett barn-element, som bara syns om "Alternativ 3" är markerat</div>,
            }, 
        ];

        return (
            <State store={groupStore}>
                <RadioButtonGroup
                    label={text('Label', 'En label')}
                    items={items}
                    disabled={boolean('Disabled', false)}
                    direction={boolean('Display items in row', false) ? 'row' : undefined}
                    error={text('Error', '')}
                    selected={groupStore.get('selected')}
                    onChange={selected => groupStore.set({ selected })}
                />
            </State>
        );
    },
    { groupReadme }
);
