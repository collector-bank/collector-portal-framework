# Checkbox

A checkbox is a component that permits the user to make a binary choice, i.e. a choice between one of two possible mutually exclusive options. For example, the user may have to answer 'yes' (checked) or 'no' (not checked) on a simple yes/no question.

## Props

| Name          | Required  | Type            |
|---------------|-----------|-----------------|
| `label`       |     ✓     | string          |
| `name`        |           | string          |
| `checked`     |           | boolean         |
| `disabled`    |           | boolean         |
| `onChange`    |           | `event => void` |

## Example

```jsx
<Checkbox label="Jag har förstått villkoren" />
```

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
