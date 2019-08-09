# Tags Input

This component can be used for freeform data entry with autocomplete and tags.

## Props

| Name                                  | Required | Type                                    |
| ------------------------------------- | -------- | --------------------------------------- |
| `tags`                                | ✓        | `Tag[]`                                 |
| `onChange`                            | ✓        | `Tag => void`                           |
| `autocompleteItems`                   |          | `string[]`      \| `AutocompleteItem[]` |
| `label`                               |          | `string`                                |
| `placeholder`                         |          | `string`                                |
| `canAddAllAutocompleteItemsButton`    |          | `string`                                |
| `addAllAutocompleteItemsButtonText`   |          | `string`                                |
| `clearAllAutocompleteItemsButtonText` |          | `string`                                |

## Example

```jsx
<TagsInput
    label="Marknader"
    autocompleteItems={this.allMarkets}
    placeholder="Välj aktuella marknader"
    onChange={items => this.setState({ items })}
/>
```

### Autocomplete items
If you have separate parts of the search term to make a fuzzy-like experience, you can make a