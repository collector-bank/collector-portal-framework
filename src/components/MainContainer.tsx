import glamorous, { GlamorousComponent } from 'glamorous';
import { breakpoints } from '../theme';

export const MainContainer: GlamorousComponent<React.HTMLProps<HTMLDivElement>, {}> = glamorous.div({
    boxSizing: 'border-box',
    width: '100%',
    padding: 40,

    [breakpoints.tabletAndLower]: {
        padding: 24,
    },

    [breakpoints.mobileAndLower]: {
        padding: 16,
    },
});
