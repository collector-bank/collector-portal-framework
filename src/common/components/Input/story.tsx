import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { Input } from './';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Input', () => {
    return (
        <Input
            label={text('Label', 'En label')}
            placeholder={text('Placeholder', '')}
            error={text('Error', '')}
            multiline={boolean('Multiline', false)}
            disabled={boolean('Disabled', false)}
            onChange={action('input changed')}
        />
    );
});