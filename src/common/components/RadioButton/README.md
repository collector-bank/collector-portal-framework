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
