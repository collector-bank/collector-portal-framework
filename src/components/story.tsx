import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { PortalHeader } from './PortalHeader';
import { BrowserRouter } from 'react-router-dom';
import { PortalContainer, PortalMain, PageHeader, PageContainer } from '.';

const components = storiesOf('Portal Components', module);

components.addDecorator(withKnobs);

components.add('Portal Example', () => {
    return (
        <BrowserRouter>
            <PortalContainer backLinkText="Tillbaka till översikten">
                <PortalHeader
                    logoTarget="aftonbladet.se"
                    siteName="Storybook"
                    menuItems={[{ icon: 'haus', path: '/', label: 'Storybook' }]}
                    backLinkText="Tillbaka till översikten"
                />

                <PortalMain>
                    <PageHeader title="Test" />
                    <PageContainer>
                        <div style={{ height: 1200 }}>Content!</div>
                    </PageContainer>
                </PortalMain>
            </PortalContainer>
        </BrowserRouter>
    );
});
