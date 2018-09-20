import glamorous, { GlamorousComponent } from 'glamorous';
import { Theme } from '../../../themes';

export interface LabelProps {
    error?: boolean;
    theme: Theme;
}

export const Label: GlamorousComponent<Pick<LabelProps, "error"> & React.HTMLProps<HTMLLabelElement>, LabelProps> = glamorous.label<LabelProps>(
    {
        display: 'block',
        maxWidth: 540,
        fontWeight: 500,
        marginBottom: '.3em',
    },
    ({ error, theme }) => ({
        color: error ? theme.colors.red : 'inherit',
    })
);
