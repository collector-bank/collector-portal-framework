import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text, select, boolean } from '@storybook/addon-knobs';
import { Notification, NotificationType } from './index';

const components = storiesOf('Version 2', module);

components.addDecorator(withKnobs);

components.add('Notification', () => {
    const types: NotificationType[] = ['cui-is-success', 'cui-is-info', 'cui-is-warning', 'cui-is-danger'];

    return (
        <Notification title={text('Title', 'Senaste info gick inte att visa')}
                      description={text('Description', 'Felet kan åtgärdas om du laddar om sidan.')}
                      hasIcon={boolean('Icon', true)}
                      type={select('Type', types, 'cui-is-success')}
                      isOutlined={boolean('Outline', false)}
                      linkHref={text('Link', 'https://collector.se')}
                      linkText={text('Button text', 'Läs mer')}
        />
    );
});
