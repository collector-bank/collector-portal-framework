import React, { useState } from 'react';
import styled from '../../..';
import { ArrowDown } from './ArrowDown';
import { Collapse } from 'react-collapse';
import { ArrowRight } from './ArrowRight';
import { breakpoints } from '../../../themes/collector';

export interface ListItem {
    title: React.ReactNode;
    subTitle?: React.ReactNode;
    details?: React.ReactNode;
    subDetails?: React.ReactNode;
}

export interface ListItemProps {
    item: ListItem;
    link?: string;
}

const SuperContainer = styled.li(({ theme }) => ({
    borderBottom: `1px solid ${theme.colors.lightGray}`,
}));

const Container = styled.div<{ isClickable: boolean }>(({ theme, isClickable }) => ({
    display: 'flex',
    padding: '21px 16px',
    textDecoration: 'none',
    color: 'initial',
    transition: 'background ease-in 100ms',

    '&:hover': {
        background: theme.colors.lightOffWhite,
        cursor: isClickable ? 'pointer' : 'inherit',
    },

    [theme.breakpoints.mobileAndLower]: {
        padding: '16px 8px',
    },
}));

const LinkContainer = Container.withComponent('a');

const TitleContainer = styled.div(({ theme }) => ({
    font: theme.fonts.mobile.large,

    [breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.medium,
    },
}));

const DetailsContainer = styled.div(({ theme }) => ({
    font: theme.fonts.mobile.large,

    [breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.medium,
        fontWeight: 'bold',
    },

    fontWeight: 'bold',
}));

const SubTitleContainer = styled.div(({ theme }) => ({
    color: theme.colors.mediumGray,

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.small,
    },
}));

const SubDetailsContainer = styled.div(({ theme }) => ({
    color: theme.colors.mediumGray,

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.small,
    },
}));

const ExpandedContainer = styled.div(({ theme }) => ({
    padding: '8px 16px',

    [theme.breakpoints.mobileAndLower]: {
        padding: 8,
    },

    paddingTop: 0,
}));

const LeftColumn = styled.div({ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' });
const RightColumn = styled.div({
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    justifyContent: 'center',
});

export const ListItem: React.FC<ListItemProps> = ({ item, link, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    if (link && children) {
        throw new Error('Listitem cannot be expandable and linkable at the same time');
    }

    const renderBody = () => (
        <>
            {(item.title || item.subTitle) && (
                <LeftColumn>
                    {item.title && <TitleContainer>{item.title}</TitleContainer>}
                    {item.subTitle && <SubTitleContainer>{item.subTitle}</SubTitleContainer>}
                </LeftColumn>
            )}
            {(item.details || item.subDetails) && (
                <RightColumn>
                    {item.details && <DetailsContainer>{item.details}</DetailsContainer>}
                    {item.subDetails && <SubDetailsContainer>{item.subDetails}</SubDetailsContainer>}
                </RightColumn>
            )}

            {children && <ArrowDown isHovered={isHovered} isExpanded={isExpanded} />}
            {link && <ArrowRight isHovered={isHovered} />}
        </>
    );

    return (
        <SuperContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {link ? (
                <LinkContainer isClickable={true} href={link}>
                    {renderBody()}
                </LinkContainer>
            ) : (
                <Container isClickable={!!children} onClick={children ? () => setIsExpanded(prev => !prev) : undefined}>
                    {renderBody()}
                </Container>
            )}

            {children && (
                <Collapse isOpened={isExpanded}>
                    <ExpandedContainer>{children}</ExpandedContainer>
                </Collapse>
            )}
        </SuperContainer>
    );
};
