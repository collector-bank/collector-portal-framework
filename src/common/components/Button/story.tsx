import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Button } from './';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Button', () => {
    const types: any[] = ['primary', 'secondary', 'warn', 'text'];
    const sizes: any[] = ['small', 'medium', 'large'];

    return (
        <Button
            type={select('Type', types, 'primary')}
            size={select('Size', sizes, 'medium')}
            disabled={boolean('Disabled', false)}
            loading={boolean('Loading', false)}
            onClick={action('button clicked')}
        >
            {text('Label', 'En knapp')}
        </Button>
    );
});