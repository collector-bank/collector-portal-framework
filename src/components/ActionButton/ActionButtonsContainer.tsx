import React from 'react';
import styled from '../..';

const Container = styled.div(({ theme }) => ({
    display: 'flex',
    overflowX: 'auto',
    maxWidth: '100vw',
    alignItems: 'flex-start',

    button: {
        '&:not(:last-child)': {
            marginRight: 40,

            [theme.breakpoints.mobileAndLower]: {
                marginRight: 0,
            },
        },
    },
}));

export const ActionButtonsContainer: React.FC = ({ children }) => {
    return <Container>{children}</Container>;
};
