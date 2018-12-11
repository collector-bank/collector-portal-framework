import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { Select } from './';
import readme from './README.md';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

const store = new Store({
    value: ''
});

components.add('Select', withReadme(readme, () => {
    const items = [
        { label: 'Foo' },
        { label: 'Bar' },
        { label: 'Baz' }
    ];

    return (
        <State store={store}>
            <Select
                label={text('Label', 'En label')}
                disabled={boolean('Disabled', false)}
                items={items}
                error={text('Error', '')}
                placeholder={text('Placeholder', '')}
                value={store.get('value')}
                onChange={event => store.set({ value: event.currentTarget.value })}
            />
        </State>
    );
}));
