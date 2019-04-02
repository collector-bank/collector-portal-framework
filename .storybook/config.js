import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { CollectorPortalFramework } from '../src';
import portalTheme from './portalTheme';

addParameters({
    options: {
        theme: portalTheme,
        enableShortcuts: false,
    },
});

addDecorator(story => (
    <CollectorPortalFramework>
        <div style={{ padding: 10 }}>{story()}</div>
    </CollectorPortalFramework>
));

const loadStory = require.context('../src', true, /(story|stories)\.tsx$/);
const loadStories = () => loadStory.keys().forEach(loadStory);

configure(loadStories, module);
