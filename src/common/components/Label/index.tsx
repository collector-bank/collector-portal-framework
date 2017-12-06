import glamorous, { CSSProperties, GlamorousComponent } from 'glamorous';
import { colors } from '../../../theme';

export interface LabelProps {
    error?: boolean;
    optional?: boolean;
}

export const Label: GlamorousComponent<LabelProps & React.HTMLProps<HTMLLabelElement>, LabelProps> = glamorous.label<LabelProps>(
    {
        display: 'block',
        maxWidth: 540,
        fontWeight: 500,
        marginBottom: '.3em',
    },
    ({ error, optional }) => {
        let styles: CSSProperties = {};

        if (error) {
            styles = {
                color: colors.red,
            };
        }

        if (optional) {
            styles = {
                ...styles,
                '&:after': {
                    content: ' (frivilligt)',
                    fontWeight: 400,
                    color: colors.darkGray,
                }
            };
        }

        return styles;
    }
);
