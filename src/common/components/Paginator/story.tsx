import { withKnobs, number } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import React from 'react';
import { Paginator } from './';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

const store = new Store({
    activePage: 2
});

components.add('Paginator', () => {
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
});
