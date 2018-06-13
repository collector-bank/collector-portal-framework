import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Select } from './';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Select', () => {
    const items = [{ label: 'Foo' }, { label: 'Bar' }, { label: 'Baz' }];

    return (
        <Select
            label={text('Label', 'En label')}
            disabled={boolean('Disabled', false)}
            value={text('Selected item', 'Bar')}
            items={items}
            error={text('Error', '')}
            onChange={action('select changed')}
        />
    );
});
