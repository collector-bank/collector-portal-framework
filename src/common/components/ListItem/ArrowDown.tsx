import * as React from 'react';
import styled from '../../..';

const GrayArrow: React.FC = () => (
    <svg width="24" height="24" fill="currentColor">
        <path
            id="a"
            d="M12,13.5857864 L6.70710678,8.29289322 C6.31658249,7.90236893 5.68341751,7.90236893 5.29289322,8.29289322 C4.90236893,8.68341751 4.90236893,9.31658249 5.29289322,9.70710678 L11.2928932,15.7071068 C11.6834175,16.0976311 12.3165825,16.0976311 12.7071068,15.7071068 L18.7071068,9.70710678 C19.0976311,9.31658249 19.0976311,8.68341751 18.7071068,8.29289322 C18.3165825,7.90236893 17.6834175,7.90236893 17.2928932,8.29289322 L12,13.5857864 Z"
        />
    </svg>
);

const getTransform = ({ isExpanded, isHovered }: { isExpanded: boolean; isHovered: boolean }) => {
    if (isExpanded) {
        return 'rotate(180deg)';
    }

    if (isHovered) {
        return 'translateY(4px)';
    }

    return undefined;
};

const ArrowDownContainer = styled.div<{ isExpanded: boolean; isHovered: boolean }>(({ isExpanded, isHovered, theme }) => ({
    transition: 'transform 150ms ease-in-out',
    color: theme.colors.mediumGray,
    transform: getTransform({ isExpanded, isHovered }),
    alignSelf: 'center',
    marginLeft: 12,

    [theme.breakpoints.mobileAndLower]: {
        marginLeft: 8,
    },
}));

export const ArrowDown: React.FC<{ isExpanded: boolean; isHovered: boolean }> = ({ isExpanded, isHovered }) => (
    <ArrowDownContainer isExpanded={isExpanded} isHovered={isHovered}>
        <GrayArrow />
    </ArrowDownContainer>
);
