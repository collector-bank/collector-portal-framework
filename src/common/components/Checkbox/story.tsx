import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import { Checkbox } from './';
import { CheckboxGroup } from './CheckboxGroup';
import notes from './README.md';
import groupReadme from './GroupREADME.md';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

const store = new Store({
    checked: false,
});

components.add(
    'Checkbox',
    () => {
        return (
            <State store={store}>
                <Checkbox
                    label={text('Label', 'En label')}
                    disabled={boolean('Disabled', false)}
                    checked={store.get('checked')}
                    onChange={() => store.set({ checked: !store.get('checked') })}
                />
            </State>
        );
    },
    { notes }
);

const groupStore = new Store({
    checked: ['foo', 'baz'],
});

components.add(
    'Checkbox group',
    () => {
        let items = [
            {
                key: 'foo',
                label: 'Alternativ 1',
            },
            {
                key: 'bar',
                label: 'Alternativ 2',
            },
            {
                key: 'baz',
                label: 'Alternativ 3',
                child: <div>Här är ett barn-element, som bara syns om "Alternativ 3" är markerat</div>,
            },
        ];

        return (
            <State store={groupStore}>
                <CheckboxGroup
                    label={text('Label', 'En label')}
                    items={items}
                    disabled={boolean('Disabled', false)}
                    error={text('Error', '')}
                    checked={groupStore.get('checked')}
                    onChange={(optionId, selected) => {
                        groupStore.set({
                            checked: selected
                                ? [...groupStore.get('checked'), optionId]
                                : groupStore.get('checked').filter((x: string) => x !== optionId),
                        });
                    }}
                />
            </State>
        );
    },
    { notes: groupReadme }
);
