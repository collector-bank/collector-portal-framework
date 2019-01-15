import styled from '../../../styled';

export const CardGroup = styled('div')<{}>({
    display: 'flex',
    flexWrap: 'wrap',
    marginRight: -10,
    marginLeft: -10,

    '> *': {
        flexShrink: 0,
        marginRight: 10,
        marginLeft: 10,
    },
});