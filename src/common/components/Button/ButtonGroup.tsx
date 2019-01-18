import styled from '../../../';

export interface ButtonGroupProps {
    align?: 'flex-start' | 'flex-end' | 'center';
}

export const ButtonGroup = styled.div<ButtonGroupProps>(
    {
        display: 'flex',
        flexWrap: 'wrap',
        margin: -8,

        '> *': {
            margin: 8,
        },
    },
    ({ align = 'flex-start' }) => ({
        justifyContent: align,
    })
);

ButtonGroup.displayName = 'Collector.ButtonGroup';
