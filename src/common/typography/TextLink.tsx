import { lighten } from 'polished';
import styled from '../../';

export const TextLink = styled.a<{}>(({ theme }) => ({
    textDecoration: 'none',
    borderBottom: '1px solid',
    transition: 'border-color 200ms',
    cursor: 'pointer',

    '&:hover': {
        borderColor: 'currentColor',
    },
    color: theme.colors.primary,
    borderColor: lighten(0.5, theme.colors.primary),
}));
