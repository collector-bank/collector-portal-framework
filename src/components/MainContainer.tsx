import glamorous, { GlamorousComponent } from 'glamorous';
import { Theme } from '../themes';

export const MainContainer: GlamorousComponent<React.HTMLProps<HTMLDivElement>, {}> = glamorous.div<{ theme: Theme }>(
    {
        boxSizing: 'border-box',
        width: '100%',
        padding: 40,
    },
    ({ theme }) => ({
        [theme.breakpoints.tabletAndLower]: {
            padding: 24,
        },

        [theme.breakpoints.mobileAndLower]: {
            padding: 16,
        },
    })
);
