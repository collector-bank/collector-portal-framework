import styled from '../../..';
interface CardGroupProps {
    marginRight?: number;
}

export const CardGroup = styled.div<CardGroupProps>(({ marginRight, theme }) => ({
    display: 'flex',
    WebkitOverflowScrolling: 'touch',
    overflowX: 'auto',
    overflowY: 'hidden',
    paddingTop: 12,
    marginLeft: -16,

    '> *': {
        flexShrink: 0,
        marginLeft: 16,

        ':last-child': {
            '&::after': {
                position: 'absolute',
                content: '""',
                width: marginRight ? marginRight : 40,
                height: marginRight ? marginRight : 40,
                right: marginRight ? -marginRight : -40,

                [theme.breakpoints.mobileAndLower]: {
                    width: marginRight ? marginRight : 16,
                    height: marginRight ? marginRight : 16,
                    right: marginRight ? -marginRight : -16,
                },
            },
        },
    },
}));
