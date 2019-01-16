import styled from '../../../styled';

export const DatePickerGroup = styled.div<{}>({
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: -8,
    marginRight: -8,
    '> *': { marginLeft: 8, marginRight: 8 },
});

DatePickerGroup.displayName = 'Collector.DatePickerGroup';
