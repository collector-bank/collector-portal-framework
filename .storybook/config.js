import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { injectGlobalStyles } from '../src';

injectGlobalStyles();

addDecorator(story => (
    <div style={{ padding: 10 }}>
        {story()}
    </div>
));

const loadStory = require.context('../src', true, /(story|stories)\.tsx$/);
const loadStories = () => loadStory.keys().forEach(loadStory);

configure(loadStories, module);