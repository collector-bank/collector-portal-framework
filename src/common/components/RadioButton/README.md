# Radio button

This component allows the user to choose only one of a predefined set of mutually exclusive options. The singular property of a radio button makes it distinct from a checkbox, which allows more than one (or no) item to be selected and for the unselected state to be restored.

## Props

| Name          | Required  | Type            |
|---------------|-----------|-----------------|
| `label`       |     ✓     | string          |
| `name`        |           | string          |
| `selected`    |           | boolean         |
| `disabled`    |           | boolean         |
| `onChange`    |           | `event => void` |

## Example

```jsx
<RadioButton label="Foo bar" />
```

# Radio button group

A group of radio buttons.

## Props

| Name          | Required  | Type                  |
|---------------|-----------|-----------------------|
| `label`       |     ✓     | string                |
| `items`       |           | `RadioButtonItem[]`   |
| `selected`    |           | string                |
| `disabled`    |           | boolean               |
| `error`       |           | string | boolean      |
| `onChange`    |           | `key => void`         |

```typescript
export interface RadioButtonItem {
    key: string;
    label: string;
    child?: JSX.Element;
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
    <RadioButtonGroup label="En label" items={items} />
);
```
