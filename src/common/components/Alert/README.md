# Alert

This component can be used to provide contextual feedback messages for typical user actions.

## Props

| Name          | Required  | Type    | Possible values                               |
|---------------|-----------|---------|-----------------------------------------------|
| `message`     |     ✓     | string  |                                               |
| `type`        |     ✓     | string  | `'error'`, `'warning'`, `'info'`, `'success'` |
| `alertSize`   |           | string  | `'small'`, `'large'`                          |
| `fadeIn`      |           | boolean |                                               |

## Example

```jsx
<Alert type="error" message="An error has occurred" />
```

## Demo

[See a demo here](https://collector-bank.github.io/collector-portal-framework/?selectedKind=Components&selectedStory=Alert)
