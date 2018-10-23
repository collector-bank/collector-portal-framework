import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Button, ButtonType, ButtonSize } from './';
import { ButtonGroup } from './ButtonGroup';
import { CrossIcon } from '../TagsInput/Icons/Cross';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Button', () => {
    const types: ButtonType[] = ['primary', 'secondary', 'secondaryNegative', 'warn', 'text', 'success'];
    const sizes: ButtonSize[] = ['small', 'medium', 'large'];

    return (
        <>
            <Button
                type={select('Type', types, 'primary')}
                size={select('Size', sizes, 'medium')}
                disabled={boolean('Disabled', false)}
                loading={boolean('Loading', false)}
                onClick={action('button clicked')}
                icon={boolean('Show icon', false) ? <CrossIcon /> : undefined}
                iconAlignment={select('Icon alignment', ['start', 'end'], 'start')}
            >
                {text('Label', 'En knapp')}
            </Button>

            {boolean('Show button group', false) && (
                <ButtonGroup style={{ marginTop: 32 }}>
                    <Button
                        type={select('Type', types, 'primary')}
                        size={select('Size', sizes, 'medium')}
                        disabled={boolean('Disabled', false)}
                        loading={boolean('Loading', false)}
                        onClick={action('button clicked')}
                    >
                        {text('Label', 'En knapp')}
                    </Button>

                    <Button
                        type={select('Type', types, 'primary')}
                        size={select('Size', sizes, 'medium')}
                        disabled={boolean('Disabled', false)}
                        loading={boolean('Loading', false)}
                        onClick={action('button clicked')}
                    >
                        {text('Label', 'En knapp')}
                    </Button>
                </ButtonGroup>
            )}
        </>
    );
});
