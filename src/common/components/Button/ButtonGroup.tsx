import styled from '../../../';

export interface ButtonGroupProps {
    align?: 'flex-start' | 'flex-end' | 'center';
}

export const ButtonGroup = styled.div<ButtonGroupProps>(({ align = 'flex-start' }) => ({
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: align,
    margin: -8,

    '> *': {
        margin: 8,
    },
}));

ButtonGroup.displayName = 'Collector.ButtonGroup';
