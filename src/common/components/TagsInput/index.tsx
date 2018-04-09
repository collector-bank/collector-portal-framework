import * as React from 'react';
import * as Autosuggest from 'react-autosuggest';
import { Input, Button, ButtonGroup, Label } from '../../../common/components';
import glamorous from 'glamorous';
import { Tag } from './Tag';
import { Text } from '../../../common/typography';
import { css } from 'glamor';
import { borderRadius, colors } from '../../../theme';
import * as CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
import * as uniqid from 'uniqid';

export interface TagInputProps {
    tags: Tag[];
    autocompleteItems?: string[];
    placeholder?: string;
    label?: string | JSX.Element;
    canAddAllAutocompleteItemsButton?: boolean;
    addAllAutocompleteItemsButtonText?: string;
    clearAllAutocompleteItemsButtonText?: string;
    onChange: (items: Tag[]) => void;
}

export interface TagInputState {
    value: string;
    suggestions: string[];
    id: string;
}

const tagsTransitionContainer = css({
    display: 'flex',
    flexWrap: 'wrap',
});

const tagsTransitionEnter = css({
    opacity: 0,
});

const tagsTransitionEnterActive = css({
    opacity: 1,
    transition: 'opacity 200ms ease-in',
});

const tagsTransitionLeave = css({
    opacity: 1,
});

const tagsTransitionLeaveActive = css({
    opacity: 0,
    transition: 'opacity 300ms ease-out',
});

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

const TagsContainer = glamorous.div({
    display: 'flex',
    marginBottom: 24,
    flexWrap: 'wrap',
    minHeight: 56
});

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
        const { placeholder, tags, canAddAllAutocompleteItemsButton, addAllAutocompleteItemsButtonText, clearAllAutocompleteItemsButtonText, label } = this.props;

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

                <TagsContainer>
                    <CSSTransitionGroup
                        transitionName={{
                            enter: `${tagsTransitionEnter}`,
                            enterActive: `${tagsTransitionEnterActive}`,
                            leave: `${tagsTransitionLeave}`,
                            leaveActive: `${tagsTransitionLeaveActive}`,
                        }}
                        className={`${tagsTransitionContainer}`}
                        transitionEnter={true}
                        transitionEnterTimeout={200}
                        transitionLeave={true}
                        transitionLeaveTimeout={300}
                    >
                        {tags.map(this.renderTag)}
                    </CSSTransitionGroup>
                </TagsContainer>
            </>
        );
    }
}
