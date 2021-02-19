import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import { BrowserRouter } from 'react-router-dom';
import { Index } from './Index';
const menuItems = require("./menuItems.json");

const components = storiesOf('Version 2', module);

components.addDecorator(withKnobs);

components.add('Portal', () => {
    return (
        <BrowserRouter>
            <Index portalMenu={menuItems} nrOfUnreadMessages={3} menuFooter={<div>Component Area</div>}>
                Content
            </Index>
        </BrowserRouter>
    );
});
