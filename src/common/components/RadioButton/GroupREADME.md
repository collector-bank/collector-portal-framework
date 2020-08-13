# Radio button group

A group of radio buttons.

## Props

| Name        | Required | Type                |
| ----------- | -------- | ------------------- |
| `label`     |          | string or JSX.Element |
| `items`     |          | `RadioButtonItem[]` |
| `direction` |          | `'row'`, `'column'` |
| `selected`  |          | any                 |
| `disabled`  |          | boolean             |
| `error`     |          | string or boolean   |
| `onChange`  |          | `key => void`       |

```typescript
export interface RadioButtonItem {
    key: any;
    label: string | JSX.Element;
    child?: React.ReactNode;
}
```

## Example

```jsx
const items = [
    {
        key: 'foo',
        label: 'Alternativ 1',
    },
    {
        key: 'bar',
        label: 'Alternativ 2',
    },
    {
        key: 'baz',
        label: 'Alternativ 3',
        child: <div>Här är ett barn-element, som bara syns om "Alternativ 3" är markerat</div>,
    },
];

return <RadioButtonGroup label="En label" items={items} />;
```
