import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withOptions } from '@storybook/addon-options';
import { CollectorPortalFramework } from '../src';

addDecorator(withOptions({
    name: 'Collector Portal Framework',
    url: 'https://github.com/collector-bank/collector-portal-framework',
    enableShortcuts: false,
}));

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