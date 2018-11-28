import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select } from '@storybook/addon-knobs';
import { RadioButton } from './';
import { RadioButtonGroup } from './RadioButtonGroup';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Radio button', () => {
    return (
        <RadioButton
            label={text('Label', 'En label')}
            selected={boolean('Selected', false)}
            disabled={boolean('Disabled', false)}
            onChange={action('radio button changed')}
        />
    );
});

components.add('Radio button group', () => {
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
        <RadioButtonGroup
            label={text('Label', 'En label')}
            items={items}
            selected={select('Option', items.map(x => x.key), 'foo')}
            disabled={boolean('Disabled', false)}
            direction={boolean('Display items in row', false) ? 'row' : undefined}
            error={text('Error', '')}
            onChange={action('radio button group changed')}
        />
    );
});
