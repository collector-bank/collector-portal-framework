import * as React from 'react';
import * as Autosuggest from 'react-autosuggest';
import { Input, Button, ButtonGroup, Label } from '../../../common/components';
import glamorous from 'glamorous';
import { Tag } from './Tag';
import { Text } from '../../../common/typography';
import { css, CSSProperties } from 'glamor';
import { borderRadius, colors } from '../../../theme';
import * as CSSTransitionGroup from 'react-addons-css-transition-group'; // ES6
import * as uniqid from 'uniqid';

export interface TagInputProps {
    autocompleteItems?: string[];
    placeholder?: string;
    label?: string | JSX.Element;
    canAddAllAutocompleteItemsButton?: boolean;
    addAllAutocompleteItemsButtonText?: string;
    onChange: (items: string[]) => void;
}

export interface TagInputState {
    tags: Tag[];
    value: string;
    suggestions: string[];
    id: string;
}

interface InputContainerProps {
    hasButton?: boolean;
}

const TagsInputContainer = glamorous.div<InputContainerProps>(
    {
        minHeight: 124,
    },
    ({ hasButton }) => {
        return {
            minHeight: 157
        };
    }
);

const TagsTransitionContainer = css({
    display: 'flex'
});

const TagsTransitionEnter = css({
    opacity: 0.01,
});

const TagsTransitionEnterActive = css({
    opacity: 1,
    transition: 'opacity 200ms ease-in',
});

const TagsTransitionLeave = css({
    opacity: 1,
});

const TagsTransitionLeaveActive = css({
    opacity: 0.01,
    transition: 'opacity 300ms ease-out',
});

const suggestionsContainerOpen: CSSProperties = css({
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

const suggestionsList: CSSProperties = css({
    listStyle: 'none',
    padding: 0
});

const suggestionCSS: CSSProperties = css({
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

const suggestionHighlighted: CSSProperties = css({
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
});

export class TagsInput extends React.Component<TagInputProps, TagInputState> {
    state: TagInputState = {
        id: uniqid(),
        value: '',
        suggestions: [],
        tags: [],
    };

    getNextId = (tags: Tag[]): number => tags.length === 0 ? tags.length : tags[tags.length - 1].id + 1;

    triggerUpdate() {
        this.props.onChange(this.state.tags.map(e => e.label));
    }

    handleDelete = (id: number) => {
        this.setState(({ tags }) => ({
            tags: tags.filter((tag) => tag.id !== id),
        }));
    }

    handleChange = (evt: React.FormEvent<HTMLInputElement>, { newValue }: any) => {
        this.setState({
            value: newValue
        });
    }

    getSuggestions = (value: string) => {
        if (!this.props.autocompleteItems) {
            return [];
        }

        const inputValue = value.trim().toLowerCase();
        const inputLength = inputValue.length;

        return this.props.autocompleteItems
            .filter(item => !this.state.tags.some(tag => tag.label === item))
            .filter(item =>
                item.toLowerCase().slice(0, inputLength) === inputValue
            );
    }

    getSuggestionValue = (suggestion: string) => suggestion;

    renderSuggestion = (suggestion: string) => (
        <Text style={{ marginBottom: 0 }}>
            {suggestion}
        </Text>
    )

    onSuggestionsFetchRequested = ({ value }: { value: string, reason: any }) => {
        this.setState({
            suggestions: this.getSuggestions(value)
        });
    }

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    }

    renderInputComponent = (inputProps: {}) => <Input {...inputProps} />;

    onSuggestionSelected = (event: any, { suggestion }: { suggestion: string }) => {
        this.setState(prevState => ({
            tags: [...prevState.tags.concat({ label: suggestion, id: this.getNextId(prevState.tags) })],
            value: '',
        }), this.triggerUpdate); // tslint:disable-line
    }

    renderTag = (tag: Tag) => <Tag key={tag.id} tag={tag} onDelete={this.handleDelete} />;

    handleKeyDown = (event: React.KeyboardEvent<KeyboardEvent>) => {
        if (event.key === 'Enter') {
            if (!this.state.suggestions.some(suggestion => this.state.value !== suggestion)) {
                this.onSuggestionSelected(null, { suggestion: this.state.value });
            }
        }
    }

    addAllScopes = () => {
        const tags: Tag[] = this.props.autocompleteItems!
            .map((suggestion, index) => {
                return { label: suggestion, id: index };
            });

        this.setState({ tags }, this.triggerUpdate);
    }

    render() {
        const { value, tags, id, suggestions } = this.state;
        const { placeholder, canAddAllAutocompleteItemsButton, addAllAutocompleteItemsButtonText, label } = this.props;

        const inputProps: any = {
            placeholder: placeholder,
            value,
            onChange: this.handleChange,
            onKeyDown: this.handleKeyDown,
        };

        return (
            <TagsInputContainer>
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
                            <Button onClick={this.addAllScopes} size="small" type="secondary">{addAllAutocompleteItemsButtonText}</Button>
                            <Button size="small" type="warn" onClick={() => this.setState({ tags: [], value: '' }, this.triggerUpdate)}>Rensa</Button>
                        </ButtonGroup>
                    }
                </>

                <TagsContainer>
                    <CSSTransitionGroup
                        transitionName={{
                            enter: `${TagsTransitionEnter}`,
                            enterActive: `${TagsTransitionEnterActive}`,
                            leave: `${TagsTransitionLeave}`,
                            leaveActive: `${TagsTransitionLeaveActive}`,
                        }}
                        className={`${TagsTransitionContainer}`}
                        transitionEnter={true}
                        transitionEnterTimeout={200}
                        transitionLeave={true}
                        transitionLeaveTimeout={300}
                    >
                        {tags.map(tag => this.renderTag(tag))}
                    </CSSTransitionGroup>
                </TagsContainer>
            </TagsInputContainer>
        );
    }
}
