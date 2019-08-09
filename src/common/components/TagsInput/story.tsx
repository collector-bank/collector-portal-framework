import React from 'react';
import uniqid from 'uniqid';
import { State, Store } from '@sambego/storybook-state';
import { array, boolean, text, withKnobs } from '@storybook/addon-knobs';
import { storiesOf } from '@storybook/react';
import { TagsInput, AutocompleteItem } from './';
import notes from './README.md';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

const store = new Store({
    tags: [{ label: 'Example Tag', id: uniqid() }, { label: 'Example Tag', id: uniqid() }, { label: 'Example Tag', id: uniqid() }],
});

components.add(
    'Tags Input',
    () => {
        const autoCompleteItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'];

        return (
            <State store={store}>
                <TagsInput
                    autocompleteItems={array('Suggestions', autoCompleteItems)}
                    label={text('Label', 'En label')}
                    placeholder={text('Placeholder', 'Search with autocomplete (try Item)')}
                    canAddAllAutocompleteItemsButton={boolean('Add all button', false)}
                    addAllAutocompleteItemsButtonText={text('Text for add all button', 'Add all suggestions')}
                    clearAllAutocompleteItemsButtonText={text('Text for clearing suggestions', 'Clear')}
                    tags={store.get('tags')}
                    onChange={tags => store.set({ tags })}
                />
            </State>
        );
    },
    { notes }
);

components.add(
    'Object Tags Input',
    () => {
        const autoCompleteItems: AutocompleteItem[] = [
            { label: 'Item 1', searchTerms: ['Item', '1'] },
            { label: 'Item 2', searchTerms: ['Item', '2'] },
        ];

        return (
            <State store={store}>
                <TagsInput
                    autocompleteItems={autoCompleteItems}
                    label={text('Label', 'En label')}
                    placeholder={text('Placeholder', 'Search with autocomplete (try Item)')}
                    canAddAllAutocompleteItemsButton={boolean('Add all button', false)}
                    addAllAutocompleteItemsButtonText={text('Text for add all button', 'Add all suggestions')}
                    clearAllAutocompleteItemsButtonText={text('Text for clearing suggestions', 'Clear')}
                    tags={store.get('tags')}
                    onChange={tags => store.set({ tags })}
                />
            </State>
        );
    },
    { notes }
);
