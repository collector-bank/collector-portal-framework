# Radio button

This component allows the user to choose only one of a predefined set of mutually exclusive options. The singular property of a radio button makes it distinct from a checkbox, which allows more than one (or no) item to be selected and for the unselected state to be restored.

## Props

| Name       | Required | Type            |
| ---------- | -------- | --------------- |
| `label`    | ✓        | string          |
| `name`     |          | string          |
| `selected` |          | boolean         |
| `disabled` |          | boolean         |
| `onChange` |          | `event => void` |

## Example

```jsx
<RadioButton label="Foo bar" />
```

## Demo

[See a demo here](https://collector-bank.github.io/collector-portal-framework/?selectedKind=Components&selectedStory=Radio%20button)

# Radio button group

A group of radio buttons.

## Props

| Name        | Required | Type                       |
| ----------- | -------- | -------------------------- |
| `label`     |          | string                     |
| `items`     |          | `RadioButtonItem[]`        |
| `direction` |          | Direction (`row | column`) |
| `selected`  |          | any                        |
| `disabled`  |          | boolean                    |
| `error`     |          | string or boolean          |
| `onChange`  |          | `key => void`              |

```typescript
export interface RadioButtonItem {
    key: any;
    label: string;
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

## Demo

[See a demo here](https://collector-bank.github.io/collector-portal-framework/?selectedKind=Components&selectedStory=Radio%20button%20group)
