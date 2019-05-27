import React from 'react';
import styled from '../..';
interface InformationContainerProps {}

const Container = styled.div(({ theme }) => ({
    border: `1px solid ${theme.colors.lightGray}`,
    borderRadius: theme.borderRadius.large,
    padding: 32,
    marginTop: 40,
    maxWidth: 500,

    [theme.breakpoints.mobileAndLower]: {
        padding: 16,
    },
}));

export const InformationContainer: React.FC<InformationContainerProps> = ({ children }) => <Container>{children}</Container>;
