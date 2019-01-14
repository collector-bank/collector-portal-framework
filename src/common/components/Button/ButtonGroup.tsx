import styled from '../../../styled';

export interface ButtonGroupProps {
    align?: 'flex-start' | 'flex-end' | 'center';
}

// GlamorousComponent<ButtonGroupProps & React.HTMLProps<HTMLDivElement>, ButtonGroupProps>

export const ButtonGroup = styled('div')<ButtonGroupProps>(
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
