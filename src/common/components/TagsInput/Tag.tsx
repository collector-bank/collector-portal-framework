import React from 'react';
import { CrossIcon } from './Icons/Cross';
import styled from '../../../';

export interface TagProps {
    tag: Tag;
    onDelete: (id: string) => void;
}

export interface Tag {
    label: string;
    id: string;
}

const TagContainer = styled.div(({ theme }) => ({
    padding: '8px 16px',
    marginRight: 8,
    marginTop: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    borderRadius: theme.borderRadius.large,
    backgroundColor: theme.colors.lightGray,
}));

const IconContainer = styled.div({
    marginLeft: 8,
    display: 'flex',

    '&:hover': {
        cursor: 'pointer',
    },
});

const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>, onDelete: (id: string) => void, tag: Tag) => {
    if (event.key === 'Enter' || event.key === 'Delete' || event.key === 'Backspace') {
        onDelete(tag.id);
    }
};

export const Tag: React.FC<TagProps> = ({ tag, onDelete }) => (
    <TagContainer>
        {tag.label}
        <IconContainer role="button" onKeyDown={evt => handleKeyDown(evt, onDelete, tag)} onClick={() => onDelete(tag.id)}>
            <CrossIcon />
        </IconContainer>
    </TagContainer>
);
