import glamorous from 'glamorous';
import * as React from 'react';
import { borderRadius, colors } from '../../../theme';
import { CrossIcon } from './Icons/Cross';

export interface TagProps {
    tag: Tag;
    onDelete: (id: string) => void;
}

export interface Tag {
    label: string;
    id: string;
}

const TagContainer = glamorous.div({
    padding: '8px 16px',
    borderRadius: borderRadius.large,
    backgroundColor: colors.lightGray,
    marginRight: 8,
    marginTop: 16,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
});

const IconContainer = glamorous.div({
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

export const Tag: React.StatelessComponent<TagProps> = ({ tag, onDelete }) => (
    <TagContainer>
        {tag.label}
        <IconContainer role="button" tabIndex={0} onKeyDown={evt => handleKeyDown(evt, onDelete, tag)} onClick={() => onDelete(tag.id)}>
            <CrossIcon />
        </IconContainer>
    </TagContainer>
);
