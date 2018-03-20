import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text } from '@storybook/addon-knobs';
import { DatePicker } from './';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Date picker', () => {
    return (
        <DatePicker
            locale="sv"
            label={text('Label', 'En label')}
            onChange={action('date picker changed')}
            invalidMessage="Felaktigt datum!"
            minDate={new Date()}
            selectedDate={new Date()}
        />
    );
});