import { action } from '@storybook/addon-actions';
import { boolean, number, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { Input } from './';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Input', () => {
    return (
        <Input
            label={text('Label', 'En label')}
            placeholder={text('Placeholder', '')}
            error={text('Error', '')}
            warning={text('Warning', '')}
            description={text('Description', '')}
            multiline={boolean('Multiline', false)}
            disabled={boolean('Disabled', false)}
            rows={number('Rows', 10)}
            onChange={action('input changed')}
        />
    );
});
