import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select } from '@storybook/addon-knobs';
import { Badge, BadgeColor } from './';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Badge', () => {
    const colors: BadgeColor[] = ['purple', 'yellow', 'green', 'red', 'blue'];

    return (
        <Badge
            label={text('Label', 'En badge')}
            color={select('Color', colors, 'purple')}
            tooltip={text('Tooltip', 'En tooltip')}
        />
    );
});