import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { Alert, AlertSize, AlertType } from './';
import readme from './README.md';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Alert', withReadme(readme, () => {
    const sizes: AlertSize[] = ['small', 'large'];
    const types: AlertType[] = ['error', 'warning', 'info', 'success'];

    return (
        <Alert
            type={select('Type', types, 'error')}
            heading={text('Heading', '')}
            message={
                boolean('Use list instead of message', false) ? (
                    <>
                        <ul style={{ margin: 0, paddingLeft: 16 }}>
                            <li>Message 1</li>
                            <li>Message 2</li>
                        </ul>
                    </>
                ) : (
                    text('Message', 'Ett felmeddelande')
                )
            }
            alertSize={select('Size', sizes, 'large')}
            wide={boolean('Wide', false)}
        />
    );
}));
