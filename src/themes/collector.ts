export const colors = {
    black: '#111111',
    darkGray: '#424242',
    mediumGray: '#ABABAB',
    lightGray: '#E3E3E3',
    offWhite: '#F4F4F4',
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
        small: `14px/24px ${fontStack}`,
        medium: `16px/24px ${fontStack}`,
        large: `21px/24px ${fontStack}`,
        xl: `28px/32px ${fontStack}`,
        xxl: `38px/40px ${fontStack}`,
    },
    mobile: {
        small: `14px/24px ${fontStack}`,
        medium: `16px/24px ${fontStack}`,
        large: `19px/24px ${fontStack}`,
        xl: `23px/32px ${fontStack}`,
        xxl: `28px/32px ${fontStack}`,
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
