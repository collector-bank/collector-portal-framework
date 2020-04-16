import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import notes from './README.md';
import { ActionButtonsContainer } from '..';
import { ActionButton } from '.';

const components = storiesOf('Portal Components', module);

const Icon: React.FC = () => (
    <svg width="16px" height="16px" viewBox="0 0 16 16" version="1.1">
        <defs>
            <path
                d="M2.24,11.52 C3.47076923,11.52 4.48,12.5292308 4.48,13.76 C4.48,14.9907692 3.49538462,16 2.24,16 C1.00923077,16 0,14.9907692 0,13.76 C0,12.5292308 1.00923077,11.52 2.24,11.52 Z M8,11.52 C9.23076923,11.52 10.24,12.5292308 10.24,13.76 C10.24,14.9907692 9.23076923,16 8,16 C6.76923077,16 5.76,14.9907692 5.76,13.76 C5.76,12.5292308 6.76923077,11.52 8,11.52 Z M2.24,5.76 C3.47076923,5.76 4.48,6.76923077 4.48,8 C4.48,9.23076923 3.49538462,10.24 2.24,10.24 C1.00923077,10.24 0,9.23076923 0,8 C0,6.76923077 1.00923077,5.76 2.24,5.76 Z M8,5.76 C9.23076923,5.76 10.24,6.76923077 10.24,8 C10.24,9.23076923 9.23076923,10.24 8,10.24 C6.76923077,10.24 5.76,9.23076923 5.76,8 C5.76,6.76923077 6.76923077,5.76 8,5.76 Z M13.76,5.76 C14.9907692,5.76 16,6.76923077 16,8 C16,9.23076923 14.9907692,10.24 13.76,10.24 C12.5292308,10.24 11.52,9.23076923 11.52,8 C11.52,6.76923077 12.5292308,5.76 13.76,5.76 Z M2.24,0 C3.47076923,0 4.48,1.00923077 4.48,2.24 C4.48,3.47076923 3.49538462,4.48 2.24,4.48 C1.00923077,4.48 0,3.47076923 0,2.24 C0,1.00923077 1.00923077,0 2.24,0 Z M8,0 C9.23076923,0 10.24,1.00923077 10.24,2.24 C10.24,3.47076923 9.23076923,4.48 8,4.48 C6.76923077,4.48 5.76,3.47076923 5.76,2.24 C5.76,1.00923077 6.76923077,0 8,0 Z M13.76,0 C14.9907692,0 16,1.00923077 16,2.24 C16,3.47076923 14.9907692,4.48 13.76,4.48 C12.5292308,4.48 11.52,3.47076923 11.52,2.24 C11.52,1.00923077 12.5292308,0 13.76,0 Z"
                id="path-1"
            ></path>
        </defs>
        <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="Artboard">
                <mask id="mask-2" fill="white">
                    <use xlinkHref="#path-1"></use>
                </mask>
                <use id="Combined-Shape" fill="currentColor" fillRule="nonzero" xlinkHref="#path-1"></use>
            </g>
        </g>
    </svg>
);

components.addDecorator(withKnobs);

components.add(
    'Actionbutton',
    () => {
        return (
            <ActionButtonsContainer>
                <ActionButton label="Example" icon={<Icon />} />
                <ActionButton label="A longer example" icon={<Icon />} />
                <ActionButton label="Example" icon={<Icon />} />
                <ActionButton label="Example" icon={<Icon />} />
            </ActionButtonsContainer>
        );
    },
    { notes }
);
