export const colors = {
    black: '#111111',
    darkGray: '#424242',
    mediumGray: '#ABABAB',
    lightGray: '#E3E3E3',
    offWhite: '#F4F4F4',
    lightOffWhite: '#F9F9F9',
    white: '#FFFFFF',

    primary: '#6B1FAF',
    green: '#43CA43',
    red: '#F02C2C',
    blue: '#0672DF',
    yellow: '#FFBE2C',

    sidebarBlue: '#2C303E',
    sidebarBlueLight: '#323644',
    sidebarBlueDark: '#1E212B',
};

const fontStack = 'ProximaNova, sans-serif';

export const fonts = {
    desktop: {
        small: `0.875rem/1.5rem ${fontStack}`,
        medium: `1rem/1.5rem ${fontStack}`,
        large: `1.3125rem/1.5rem ${fontStack}`,
        xl: `1.75rem/2rem ${fontStack}`,
        xxl: `2.375rem/2.5rem ${fontStack}`,
    },
    mobile: {
        small: `14rem/1.5rem ${fontStack}`,
        medium: `1rem/1.5rem ${fontStack}`,
        large: `18rem/1.5rem ${fontStack}`,
        xl: `1.3125rem/1.75rem ${fontStack}`,
        xxl: `1.5rem/2rem ${fontStack}`,
    },
};

export const breakpoints = {
    mobileAndLower: '@media only screen and (max-width: 700px)',
    tabletAndLower: '@media only screen and (max-width: 1023px)',
};

export const borderRadius = {
    small: 4,
    large: 12,
};
