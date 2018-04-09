# Input

This component can be used for freeform data entry with autocomplete .

## Props

| Name                                | Required  | Type              | Possible values                               |
|-------------------------------------|-----------|-------------------|-----------------------------------------------|
| `autocompleteItems`                 |           |       string[]    |                                               |
| `label`                             |           |       string      |                                               |
| `placeholder`                       |           |       string      |                                               |
| `canAddAllAutocompleteItemsButton`  |           |       string      |                                               |
| `addAllAutocompleteItemsButtonText` |           |       string      |                                               |
| `onChange`                          |           |   `event => void` |                                               |

## Example

```jsx
const handleChange = (items: string[]) => {
    this.setState({ items });
}

<TagsInput
    label="Marknader"
    autocompleteItems={this.allMarkets}
    placeholder="Välj aktuella marknader"
    onChange={this.handleChange}
/>
```
