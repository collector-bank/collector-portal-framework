import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { injectGlobalStyles } from '../';

injectGlobalStyles();

addDecorator(story => (
    <div style={{ padding: 10 }}>
        {story()}
    </div>
));

const loadStories = () => {
    require('../stories');
}

configure(loadStories, module);