import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { create } from '@storybook/theming';
import { CollectorPortalFramework } from '../src';

addParameters({
    options: {
        theme: create({
            base: 'light',
            brandTitle: 'Collector Portal Framework',
            brandUrl: 'https://github.com/collector-bank/collector-portal-framework',
            brandImage: null,
          }),
        enableShortcuts: false,
    }
});

addDecorator(story => (
    <CollectorPortalFramework>
        <div style={{ padding: 10 }}>
            {story()}
        </div>
    </CollectorPortalFramework>
));

const loadStory = require.context('../src', true, /(story|stories)\.tsx$/);
const loadStories = () => loadStory.keys().forEach(loadStory);

configure(loadStories, module);