# Select

This component allows the user to choose one value from a list. When the component is inactive, it displays a single value. When activated, it displays a list of values, from which the user may select one. When the user selects a new value, the component reverts to its inactive state, displaying the selected value.

## Props

| Name       | Required  | Type              | Possible values                               |
|------------|-----------|-------------------|-----------------------------------------------|
| `label`    |           | string            |                                               |
| `disabled` |           | boolean           |                                               |
| `error`    |           | string or boolean |                                               |
| `items`    |           | `SelectItem[]`    |                                               |
| `value`    |           | string            |                                               |
| `name`     |           | string            |                                               |
| `onChange` |     ✓     | `event => void`   |                                               |


```typescript
interface SelectItem {
    key?: string;
    label: string;
}
```


## Example

```jsx
const items = [
    { label: 'Foo' },
    { label: 'Bar' },
    { label: 'Baz' },
];

return (
    <Select label="Välj en" items={items} />
);
```
