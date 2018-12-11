import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { withReadme } from 'storybook-readme';
import { Badge, BadgeColor } from './';
import readme from './README.md';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Badge', withReadme(readme, () => {
    const colors: BadgeColor[] = ['primary', 'yellow', 'green', 'red', 'blue', 'lightGray'];

    return (
        <Badge
            label={text('Label', 'En badge')}
            color={select('Color', colors, 'primary')}
            tooltip={text('Tooltip', 'En tooltip')}
        />
    );
}));
