# Paginator

This component allows a user to paginate an arbitrary list, with user defined items in the middle. It's meant to simply be used to slice an array of items for presentation, and can be used for server-side or local pagination.

## Props

| Name              | Required | Type            | Should contain                                                           |
| ----------------- | -------- | --------------- | ------------------------------------------------------------------------ |
| `numberOfItems`   | ✓        | number          | Length of item array                                                     |
| `pageSize`        | ✓        | number          | Number of items per page                                                 |
| `numbersInMiddle` | ✓        | number          | Number of items in the middle of paginator. **Should be an odd number!** |
| `onChange`        | ✓        | `event => void` | Takes in a page number, which is used with pageSize to get your slice    |

## Example

```jsx
State = {
    originalList: ['Item 1'...'Item 100']
};

const paginatedList = this.state.originalList.slice((this.state.activePage - 1) * this.pageSize , this.state.activePage * this.pageSize);

<Paginator onChange={this.handleChange} numbersInMiddle={5} pageSize={this.pageSize} length={this.state.originalList.length} />

<Items>
    {paginatedList.map(item => <Item>item</Item>)}
</Items>
```
