import styled from '../../../';

export const CardGroup = styled.div<{}>({
    display: 'flex',
    WebkitOverflowScrolling: 'touch',
    overflowX: 'auto',
    paddingTop: 12,
    marginLeft: -10,
    marginRight: 10,

    '> *': {
        flexShrink: 0,
        marginLeft: 10,

        ':last-child': {
            paddingRight: 16,
        },
    },
});
