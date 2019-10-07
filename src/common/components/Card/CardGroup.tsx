import styled from '../../../';

export const CardGroup = styled.div<{}>({
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: -10,
    marginRight: -10,

    '> *': {
        flexShrink: 0,
        marginRight: 10,
        marginLeft: 10,

        ':last-child': {
            marginRight: 16,
        },
    },
});
