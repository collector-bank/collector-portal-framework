import styled from '../../../';

export interface LabelProps {
    error?: boolean;
}

export const Label = styled.label<LabelProps>(({ error, theme }) => ({
    display: 'block',
    maxWidth: 540,
    fontWeight: 500,
    marginBottom: '.3em',
    color: error ? theme.colors.red : 'inherit',
}));
