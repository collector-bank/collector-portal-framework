import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, array, boolean } from '@storybook/addon-knobs';
import { Checkbox } from './';
import { CheckboxGroup } from './CheckboxGroup';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Checkbox', () => {
    return (
        <Checkbox
            label={text('Label', 'En label')}
            checked={boolean('Checked', false)}
            disabled={boolean('Disabled', false)}
            onChange={action('checkbox changed')}
        />
    );
});

components.add('Checkbox group', () => {
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
        <CheckboxGroup
            label={text('Label', 'En label')}
            items={items}
            checked={array('Checked items', ['foo', 'baz'])}
            disabled={boolean('Disabled', false)}
            error={text('Error', '')}
            onChange={action('checkbox group changed')}
        />
    );
});
