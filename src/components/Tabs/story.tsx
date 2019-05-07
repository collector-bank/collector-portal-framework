import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import notes from './README.md';
import { Tabs, TabItem } from '.';
import { BrowserRouter } from 'react-router-dom';

const components = storiesOf('Portal Components', module);

components.addDecorator(withKnobs);

components.add(
    'Tabs',
    () => {
        const tabItems: TabItem[] = [{ label: 'Item 1', path: '' }, { label: 'Item 2', path: '#2' }, { label: 'Item 3', path: '#3' }];

        return (
            <BrowserRouter>
                <Tabs items={tabItems} />
            </BrowserRouter>
        );
    },
    { notes }
);
