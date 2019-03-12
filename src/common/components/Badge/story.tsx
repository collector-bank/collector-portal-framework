import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Badge, BadgeColor } from './';
import notes from './README.md';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add(
    'Badge',
    () => {
        const colors: BadgeColor[] = ['primary', 'yellow', 'green', 'red', 'blue', 'lightGray'];

        return (
            <Badge label={text('Label', 'En badge')} color={select('Color', colors, 'primary')} tooltip={text('Tooltip', 'En tooltip')} />
        );
    },
    { notes }
);
