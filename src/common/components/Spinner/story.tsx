import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, number, boolean } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { Spinner } from './';
import readme from './README.md';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Spinner', withReadme(readme, () => {
    return (
        <Spinner
            size={number('Size', 80)}
            centered={boolean('Centered', false)}
        />
    );
}));
