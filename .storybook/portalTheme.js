import { create } from '@storybook/theming';

export default create({
    base: 'light',

    colorPrimary: '#8528d9',
    colorSecondary: '#8528d9',

    // UI
    appBg: '#f9f9f9',
    appContentBg: 'white',
    appBorderColor: '#d4d4d4',
    appBorderRadius: 4,

    // Typography
    fontBase: '"Proxima Nova", "Open Sans", sans-serif',
    fontCode: 'monospace',

    // Text colors
    textColor: 'black',
    textInverseColor: 'rgba(255,255,255,0.9)',

    // Toolbar default and active colors
    barTextColor: '#8e8e8e',
    barSelectedColor: '#8528d9',
    barBg: 'white',

    // Form colors
    inputBg: 'white',
    inputBorder: '#E3E3E3',
    inputTextColor: '#111',
    inputBorderRadius: 4,

    brandTitle: 'Collector Portal Framework',
    brandUrl: 'https://github.com/collector-bank/collector-portal-framework',
    brandImage: 'https://www.collector.se/img/logos/collector-bank.svg',
});
