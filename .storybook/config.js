import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'glamorous'
import { injectGlobalStyles } from '../src';
import * as theme from '../src/themes/collector';

injectGlobalStyles(theme);

addDecorator(story => (
    <ThemeProvider theme={theme}>
        <div style={{ padding: 10 }}>
            {story()}
        </div>
    </ThemeProvider>
));

const loadStory = require.context('../src', true, /(story|stories)\.tsx$/);
const loadStories = () => loadStory.keys().forEach(loadStory);

configure(loadStories, module);