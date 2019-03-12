import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number } from '@storybook/addon-knobs';
import { State, Store } from '@sambego/storybook-state';
import { Paginator } from './';
import notes from './README.md';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

const store = new Store({
    activePage: 2,
});

components.add(
    'Paginator',
    () => {
        return (
            <State store={store}>
                <Paginator
                    numberOfItems={number('Number of items', 500)}
                    numbersInMiddle={number('Numbers in middle', 5)}
                    pageSize={number('Page size', 25)}
                    activePage={store.get('activePage')}
                    onChange={activePage => store.set({ activePage })}
                />
            </State>
        );
    },
    { notes }
);
