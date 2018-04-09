import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, array } from '@storybook/addon-knobs';
import { TagsInput } from './';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Tags Input', () => {
    const autoCompleteItems = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5', 'Item 6', 'Item 7'];

    return (
        <TagsInput
            autocompleteItems={array('Suggestions', autoCompleteItems)}
            label={text('Label', 'En label')}
            placeholder={text('Placeholder', 'Search with autocomplete (try Item)')}
            canAddAllAutocompleteItemsButton={boolean('Add all button', false)}
            addAllAutocompleteItemsButtonText={text('Text for add all button', 'Add all suggestions')}
            onChange={action('input changed')}
        />
    );
});