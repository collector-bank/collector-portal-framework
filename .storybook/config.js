import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { ThemeProvider, injectGlobalStyles } from '../src';
import * as theme from '../src/themes/collector';

addDecorator(withOptions({
    name: 'Collector Portal Framework',
    url: 'https://github.com/collector-bank/collector-portal-framework',
    enableShortcuts: false,
}));

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