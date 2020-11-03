export const colors = {
    black: '#111111',
    darkGray: '#737373',
    mediumGray: '#AEAEAE',
    lightGray: '#D7D7D7',
    offWhite: '#E7E7E7',
    lightOffWhite: '#F7F7F7',
    white: '#FFFFFF',

    lavender: '#F4E8FF',
    purple: '#6B1FAF',
    green: '#198038',
    red: '#DA1E28',
    blue: '#0F62FE',
    yellow: '#F1C21B',
    darkIndigo: '#411A7E',
    pink: '#E30B80',
    darkPurple: '#28154E',

    disabledText: '#AEAEAE',
    disabledBackground: '#D7D7D7',
    sidebarBlue: '#2C303E',
    sidebarBlueLight: '#323644',
    sidebarBlueDark: '#1E212B',
};

const fontStack = 'ProximaNova, sans-serif';

export const fonts = {
    desktop: {
        small: `14px/24px ${fontStack}`,
        medium: `16px/20px ${fontStack}`,
        large: `20px/24px ${fontStack}`,
        xl: `24px/28px ${fontStack}`,
        xxl: `32px/36px ${fontStack}`,
    },
    mobile: {
        small: `14px/16px ${fontStack}`,
        medium: `16px/20px ${fontStack}`,
        large: `18px/24px ${fontStack}`,
        xl: `20px/24px ${fontStack}`,
        xxl: `24px/28px ${fontStack}`,
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
