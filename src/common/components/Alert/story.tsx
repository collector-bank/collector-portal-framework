import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Alert, AlertSize, AlertType } from './';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Alert', () => {
    const sizes: AlertSize[] = ['small', 'large'];
    const types: AlertType[] = ['error', 'warning', 'info', 'success'];

    return (
        <Alert
            type={select('Type', types, 'error')}
            message={text('Message', 'Ett felmeddelande')}
            alertSize={select('Size', sizes, 'large')}
        />
    );
});
