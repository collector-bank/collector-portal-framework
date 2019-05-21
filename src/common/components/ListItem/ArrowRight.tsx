import * as React from 'react';
import styled from '../../..';

const GrayArrow: React.StatelessComponent = () => (
    <svg width="24" height="24" fill="currentColor">
        <path
            id="a"
            d="M13.5857864,12 L8.29289322,17.2928932 C7.90236893,17.6834175 7.90236893,18.3165825 8.29289322,18.7071068 C8.68341751,19.0976311 9.31658249,19.0976311 9.70710678,18.7071068 L15.7071068,12.7071068 C16.0976311,12.3165825 16.0976311,11.6834175 15.7071068,11.2928932 L9.70710678,5.29289322 C9.31658249,4.90236893 8.68341751,4.90236893 8.29289322,5.29289322 C7.90236893,5.68341751 7.90236893,6.31658249 8.29289322,6.70710678 L13.5857864,12 Z"
        />
    </svg>
);

const ArrowRightContainer = styled.div<{ isHovered: boolean }>(({ isHovered, theme }) => ({
    transition: 'transform 150ms ease-in-out',
    color: theme.colors.mediumGray,
    transform: isHovered ? 'translateX(4px)' : 'none',
    alignSelf: 'center',
    marginLeft: 12,

    [theme.breakpoints.mobileAndLower]: {
        marginLeft: 8,
    },
}));

export const ArrowRight: React.StatelessComponent<{ isHovered: boolean }> = ({ isHovered }) => (
    <ArrowRightContainer isHovered={isHovered}>
        <GrayArrow />
    </ArrowRightContainer>
);
