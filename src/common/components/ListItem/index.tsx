import React, { useState } from 'react';
import styled from '../../..';
import { ArrowDown } from './ArrowDown';
import { Collapse } from 'react-collapse';
import { ArrowRight } from './ArrowRight';
import { breakpoints } from '../../../themes/collector';
import { Link as RouterLink } from 'react-router-dom';

export interface ListItem {
    title: React.ReactNode;
    subTitle?: React.ReactNode;
    details?: React.ReactNode;
    subDetails?: React.ReactNode;
}

export interface ListItemProps {
    item: ListItem;
    location?: string;
}

const LinkItemContainer = styled.li(({ theme }) => ({
    borderBottom: `1px solid ${theme.colors.lightGray}`,
    width: '100%',
}));

const Container = styled.div<{ others: { isClickable: boolean } }>(({ theme, others }) => ({
    display: 'flex',
    padding: '21px 16px',
    textDecoration: 'none',
    color: 'initial',
    transition: 'background ease-in 100ms',

    '&:hover': {
        background: others.isClickable ? theme.colors.lightOffWhite : 'initial',
        cursor: others.isClickable ? 'pointer' : 'inherit',
    },

    [theme.breakpoints.mobileAndLower]: {
        padding: '16px 8px',
    },
}));

const LinkContainer = Container.withComponent(RouterLink);

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
    color: theme.colors.darkGray,

    [theme.breakpoints.mobileAndLower]: {
        font: theme.fonts.mobile.small,
    },
}));

const SubDetailsContainer = styled.div(({ theme }) => ({
    color: theme.colors.darkGray,

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
    textAlign: 'right',
});

export const ListItem: React.FC<ListItemProps> = ({ item, location, children }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isHovered, setIsHovered] = useState(false);

    if (location && children) {
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
            {location && <ArrowRight isHovered={isHovered} />}
        </>
    );

    return (
        <LinkItemContainer onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            {location ? (
                <LinkContainer others={{ isClickable: true }} to={location}>
                    {renderBody()}
                </LinkContainer>
            ) : (
                <Container others={{ isClickable: !!children }} onClick={children ? () => setIsExpanded(prev => !prev) : undefined}>
                    {renderBody()}
                </Container>
            )}

            {children && (
                <Collapse isOpened={isExpanded}>
                    <ExpandedContainer>{children}</ExpandedContainer>
                </Collapse>
            )}
        </LinkItemContainer>
    );
};
