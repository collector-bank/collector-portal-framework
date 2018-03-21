# Button

Buttons are used to invoke an event.

## Props

| Name          | Required  | Type          | Possible values                                |
|---------------|-----------|---------------|------------------------------------------------|
| `type`        |           | string        | `'primary'`, `'secondary'`, `'warn'`, `'text'` |
| `size`        |           | string        | `'small'`, `'medium'`, `'large'`               |
| `icon`        |           | `JSX.Element` |                                                |
| `onClick`     |           | `() => void`  |                                                |
| `disabled`    |           | boolean       |                                                |
| `loading`     |           | boolean       |                                                |

## Example

```jsx
<Button onClick={() => console.log('the button was clicked')}>Foobar</Button>
```
