import { css } from 'glamor';
import glamorous from 'glamorous';
import * as React from 'react';
import * as Autosuggest from 'react-autosuggest';
import * as uniqid from 'uniqid';
import { Button, ButtonGroup, Input, Label } from '../../../common/components';
import { Text } from '../../../common/typography';
import { borderRadius, colors } from '../../../theme';
import { Tag } from './Tag';

export interface TagInputProps {
    tags: Tag[];
    autocompleteItems?: string[];
    placeholder?: string;
    label?: string | JSX.Element;
    canAddAllAutocompleteItemsButton?: boolean;
    addAllAutocompleteItemsButtonText?: string;
    clearAllAutocompleteItemsButtonText?: string;
    tagsDirection?: FlexDirections;
    onChange: (items: Tag[]) => void;
}

export interface TagInputState {
    value: string;
    suggestions: string[];
    id: string;
}

const suggestionsContainerOpen = css({
    position: 'absolute',
    background: colors.white,
    display: 'block',
    maxWidth: 500,
    boxSizing: 'border-box',
    border: '1px solid',
    borderRadius: borderRadius.small,
    borderColor: colors.mediumGray,
    zIndex: 10,
    marginTop: -4,
    width: '100%',
    boxShadow: '0 2px 6px 0 #BAAFC4',
    maxHeight: '70vh',
    overflow: 'scroll',
});

const suggestionsList = css({
    listStyle: 'none',
    padding: 0
});

const suggestionCSS = css({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background-color 150ms',
    paddingTop: 12,
    paddingBottom: 12,
    paddingLeft: 24,
    paddingRight: 24,
    whiteSpace: 'no-wrap',

    '&:hover': {
        background: colors.offWhite,
        cursor: 'pointer'
    },
});

const suggestionHighlighted = css({
    background: colors.offWhite,
});

const theme = {
    suggestionsContainerOpen: `${suggestionsContainerOpen}`,
    suggestionsList: `${suggestionsList}`,
    suggestion: `${suggestionCSS}`,
    suggestionHighlighted: `${suggestionHighlighted}`
};

const TagsContainer = glamorous.div<TagsContainerProps>(
    {
        display: 'inline-flex',
        marginBottom: 24,
        flexWrap: 'wrap',
        minHeight: 56,
    },
    ({ tagsItemsDirection }) => {
        return { flexDirection: tagsItemsDirection }
    }
);

type FlexDirections = 'row' | 'column';

interface TagsContainerProps {
    tagsItemsDirection: FlexDirections;
}

export class TagsInput extends React.Component<TagInputProps, TagInputState> {
    state: TagInputState = {
        id: uniqid(),
        value: '',
        suggestions: [],
    };

    private handleDelete = (id: string) => {
        this.props.onChange(this.props.tags.filter((tag) => tag.id !== id));
    }

    private handleChange = (evt: React.FormEvent<HTMLInputElement>, { newValue }: any) => {
        this.setState({
            value: newValue
        });
    }

    private getSuggestions = (value: string) => {
        if (!this.props.autocompleteItems) {
            return [];
        }

        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return this.props.autocompleteItems
            .filter(item => !this.props.tags.some(tag => tag.label === item))
            .filter(item =>
                item.toLowerCase().slice(0, inputLength) === inputValue
            );
    }

    private getSuggestionValue = (suggestion: string) => suggestion;

    private renderSuggestion = (suggestion: string) => (
        <Text style={{ marginBottom: 0 }}>
            {suggestion}
        </Text>
    )

    private onSuggestionsFetchRequested = ({ value }: any) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    }

    private onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    }

    private renderInputComponent = (inputProps: {}) => <Input {...inputProps} />;

    private onSuggestionSelected = (event: any, { suggestion }: any) => {
        if (suggestion == null || suggestion.length === 0) {
            return;
        }

        this.props.onChange(this.props.tags.concat({ label: suggestion, id: uniqid() }));

        this.setState({
            value: '',
        });
    }

    private renderTag = (tag: Tag) => <Tag key={tag.id} tag={tag} onDelete={this.handleDelete} />;

    private handleKeyDown = (event: React.KeyboardEvent<KeyboardEvent>) => {
        if (event.key === 'Enter') {
            if (!this.state.suggestions.some(suggestion => this.state.value !== suggestion)) {
                this.onSuggestionSelected(null, { suggestion: this.state.value });
            }
        }
    }

    private addAllAutocompleteItems = () => {
        const tags: Tag[] = this.props.autocompleteItems!
            .map((suggestion, index) => ({ label: suggestion, id: index.toString() }));

        this.props.onChange(tags);
    }

    private handleClear = () => {
        this.setState({ value: '' }, () => this.props.onChange([]));
    }

    render() {
        const { value, id, suggestions } = this.state;
        const { placeholder, tags, canAddAllAutocompleteItemsButton, addAllAutocompleteItemsButtonText, clearAllAutocompleteItemsButtonText, label, tagsDirection } = this.props;

        const inputProps: any = {
            placeholder,
            value,
            onChange: this.handleChange,
            onKeyDown: this.handleKeyDown,
            id
        };

        return (
            <>
                {label &&
                    <Label htmlFor={id}>{label}</Label>
                }
                <Autosuggest
                    suggestions={suggestions}
                    getSuggestionValue={this.getSuggestionValue}
                    onSuggestionSelected={this.onSuggestionSelected}
                    renderSuggestion={this.renderSuggestion}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    inputProps={inputProps}
                    focusInputOnSuggestionClick={false}
                    renderInputComponent={this.renderInputComponent}
                    highlightFirstSuggestion={true}
                    theme={theme}
                />

                {canAddAllAutocompleteItemsButton &&
                    <ButtonGroup>
                        <Button onClick={this.addAllAutocompleteItems} size="small" type="secondary">{addAllAutocompleteItemsButtonText}</Button>
                        <Button size="small" type="warn" onClick={this.handleClear}>
                            {clearAllAutocompleteItemsButtonText}
                        </Button>
                    </ButtonGroup>
                }

                {tags && tags.length > 0 &&
                    <TagsContainer tagsItemsDirection={tagsDirection ? tagsDirection : 'row'}>
                        {tags.map(this.renderTag)}
                    </TagsContainer>
                }
            </>
        );
    }
}
