import glamorous, { GlamorousComponent } from 'glamorous';
import { colors } from '../../../theme';

export interface LabelProps {
    error?: boolean;
}

export const Label: GlamorousComponent<LabelProps & React.HTMLProps<HTMLLabelElement>, LabelProps> = glamorous.label<LabelProps>(
    {
        display: 'block',
        maxWidth: 540,
        fontWeight: 500,
        marginBottom: '.3em',
    },
    ({ error }) => ({
        color: error ? colors.red : 'inherit',
    })
);
