# Alert

This component can be used to provide contextual feedback messages for typical user actions.

## Props

| Name        | Required | Type                  | Possible values                               |
| ----------- | -------- | --------------------- | --------------------------------------------- |
| `heading`   |          | string                |                                               |
| `message`   | ✓        | string or JSX.Element | 'message' or `{<element />}`                  |
| `type`      | ✓        | string                | `'error'`, `'warning'`, `'info'`, `'success'` |
| `alertSize` |          | string                | `'small'`, `'large'`                          |
| `fadeIn`    |          | boolean               |                                               |
| `wide`      |          | boolean               |                                               |

## Example

```jsx
<Alert type="error" message="An error has occurred" />
```
