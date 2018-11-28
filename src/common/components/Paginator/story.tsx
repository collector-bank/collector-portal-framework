import { withKnobs, select } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import React from 'react';
import { Paginator } from './';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Paginator', () => {
    let list = [];
    for (let i = 1; i <= 20; i++) list.push(`${i}`);

    return (
        <Paginator
            numberOfItems={500}
            numbersInMiddle={5}
            pageSize={25}
            activePage={parseInt(select('Page', list, '1'))}
            onChange={activePage => null}
        />
    );
});
