# Checkbox group

A group of checkboxes.

## Props

| Name          | Required  | Type                                      |
|---------------|-----------|-------------------------------------------|
| `label`       |     ✓     | string                                    |
| `items`       |           | `CheckboxItem[]`                          |
| `checked`     |           | string[]                                  |
| `disabled`    |           | boolean                                   |
| `error`       |           | string or boolean                         |
| `onChange`    |           | `(key: string, checked: boolean) => void` |

```typescript
interface CheckboxItem {
    key: string;
    label: string;
    child?: React.ReactNode;
}
```

## Example

```jsx
const items = [
    {
        key: 'foo',
        label: 'Alternativ 1'
    },
    {
        key: 'bar',
        label: 'Alternativ 2',
    },
    {
        key: 'baz',
        label: 'Alternativ 3',
        child: <div>Här är ett barn-element, som bara syns om "Alternativ 3" är markerat</div>
    }
];

return (
    <CheckboxGroup label="En label" items={items} />
);
```
