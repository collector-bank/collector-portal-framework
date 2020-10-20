export const colors = {
    black: '#111111',
    darkGray: '#737373',
    mediumGray: '#AEAEAE',
    lightGray: '#D7D7D7',
    offWhite: '#F4F4F4',
    lightOffWhite: '#F9F9F9',
    white: '#FFFFFF',

    lavender: '#f4e8ff',
    purple: '#6B1FAF',
    green: '#30AB30',
    red: '#DA1E28',
    blue: '#0672DF',
    yellow: '#FFBE2C',
    darkIndigo: '#2C0A4A',
    pink: '#F11DB8',
    darkPurple: '#2C1031',

    disabledText: '#9B9B9B',
    disabledBackground: '#E9E9E9',
    sidebarBlue: '#2C303E',
    sidebarBlueLight: '#323644',
    sidebarBlueDark: '#1E212B',
};

const fontStack = 'ProximaNova, sans-serif';

export const fonts = {
    desktop: {
        small: `14px/24px ${fontStack}`,
        medium: `16px/24px ${fontStack}`,
        large: `21px/24px ${fontStack}`,
        xl: `28px/32px ${fontStack}`,
        xxl: `38px/40px ${fontStack}`,
    },
    mobile: {
        small: `14px/24px ${fontStack}`,
        medium: `16px/24px ${fontStack}`,
        large: `18px/24px ${fontStack}`,
        xl: `21px/28px ${fontStack}`,
        xxl: `24px/32px ${fontStack}`,
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
