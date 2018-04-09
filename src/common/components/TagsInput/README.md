# Input

This component can be used for freeform data entry with autocomplete and tags.

## Props

| Name                                 | Required  | Type            |
|------------------------------------- |-----------|-----------------|
| `tags`                               |     ✓     | `Tag[]`         |
| `onChange`                           |     ✓     |   `Tag => void` |
| `autocompleteItems`                  |           | string[]        |
| `label`                              |           | string          |
| `placeholder`                        |           | string          |
| `canAddAllAutocompleteItemsButton`   |           | string          |
| `addAllAutocompleteItemsButtonText`  |           | string          |
| `clearAllAutocompleteItemsButtonText`|           | string          |
## Example

```jsx
const handleChange = (items: Tag[]) => {
    this.setState({ items });
}

<TagsInput
    label="Marknader"
    autocompleteItems={this.allMarkets}
    placeholder="Välj aktuella marknader"
    onChange={this.handleChange}
/>
```
