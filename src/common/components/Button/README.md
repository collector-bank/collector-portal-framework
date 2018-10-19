# Button

Buttons are used to invoke an event.

## Props

| Name       | Required | Type          | Possible values                                                                     | Notes                                                           |
| ---------- | -------- | ------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------------- |
| `type`     |          | string        | `'primary'`, `'secondary'`, `'secondaryNegative'`, `'success'`, `'warn'`, `'text'`, | Use secondary negative only if you have an off-white background |
| `size`     |          | string        | `'small'`, `'medium'`, `'large'`                                                    |                                                                 |
| `icon`     |          | `JSX.Element` |                                                                                     |                                                                 |
| `onClick`  |          | `() => void`  |                                                                                     |                                                                 |
| `disabled` |          | boolean       |                                                                                     |                                                                 |
| `loading`  |          | boolean       |                                                                                     |                                                                 |

## Example

```jsx
<Button onClick={() => console.log('the button was clicked')}>Foobar</Button>
```

## Demo

[See a demo here](https://collector-bank.github.io/collector-portal-framework/?selectedKind=Components&selectedStory=Button)
