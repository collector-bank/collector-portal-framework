import React from 'react';
import { storiesOf } from '@storybook/react';
import { State, Store } from '@sambego/storybook-state';
import { withKnobs, text, boolean } from '@storybook/addon-knobs';
import { BoxMessage } from './';
import notes from './README.md';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

const store = new Store({
    value: '',
});

components.add(
    'BoxMessage',
    () => {
        return (
            <State store={store}>
                <BoxMessage
                    label={text('Label', 'En label')}
                    buttonLabel={text('buttonLabel', 'En knapp label')}
                    showLogo={boolean('Disabled', false)}
                    onClick={() => {}}
                    buttonKind="primary"
                />
            </State>
        );
    },
    { notes }
);
