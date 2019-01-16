import styled from '../../../styled';

export interface LabelProps {
    error?: boolean;
}

//GlamorousComponent<Pick<LabelProps, 'error'> & React.HTMLProps<HTMLLabelElement>, LabelProps>

export const Label = styled.label<LabelProps>(({ error, theme }) => ({
    display: 'block',
    maxWidth: 540,
    fontWeight: 500,
    marginBottom: '.3em',
    color: error ? theme.colors.red : 'inherit',
}));
