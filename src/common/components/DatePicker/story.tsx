import { text, withKnobs } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { DatePicker } from './';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

const store = new Store({
    selectedDate: new Date()
});

components.add('Date picker', () => {
    return (
        <State store={store}>
            <DatePicker
                locale="sv"
                label={text('Label', 'En label')}
                invalidMessage="Felaktigt datum!"
                minDate={new Date()}
                selectedDate={store.get('selectedDate')}
                onChange={selectedDate => store.set({ selectedDate: selectedDate! })}
            />
        </State>
    );
});
