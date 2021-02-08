import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';
import { Portal } from './Portal';
const menuItems = require("./menuItems.json");

const components = storiesOf('Version 2', module);

components.addDecorator(withKnobs);

components.add('Portal', () => {
    return (
        <BrowserRouter>
            <Portal portalMenu={menuItems} nrOfUnreadMessages={3} menuFooter={<div>Component Area</div>}>
                Content
            </Portal>
        </BrowserRouter>
    );
});
