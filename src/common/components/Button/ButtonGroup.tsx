import glamorous, { GlamorousComponent } from 'glamorous';

export interface ButtonGroupProps {
    align?: 'flex-start' | 'flex-end' | 'center';
}

export const ButtonGroup: GlamorousComponent<ButtonGroupProps & React.HTMLProps<HTMLDivElement>, ButtonGroupProps> = glamorous.div<
    ButtonGroupProps
>(
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
