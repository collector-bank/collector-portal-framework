import React from 'react';
import { configure, addDecorator, addParameters } from '@storybook/react';
import { CollectorPortalFramework } from '../src';

addParameters({
    option: {
        brandTitle: 'Collector Portal Framework',
        brandUrl: 'https://github.com/collector-bank/collector-portal-framework',
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