# Button

Buttons are used to invoke an event.

## Props

| Name            | Required | Type          | Possible values                                                                     | Notes                                                            |
| --------------- | -------- | ------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------- |
| `kind`          |          | string        | `'primary'`, `'secondary'`, `'secondaryNegative'`, `'success'`, `'warn'`, `'text'`, | Use `secondaryNegative` only if you have an off white background |
| `size`          |          | string        | `'small'`, `'medium'`, `'large'`                                                    |                                                                  |
| `icon`          |          | `JSX.Element` |                                                                                     | Icon _must_ contain a height in the SVG to show up.              |
| `iconAlignment` |          | string        | `'start'`, `'end'`                                                                  | Defaults to `start`                                              |
| `onClick`       |          | `() => void`  |                                                                                     |                                                                  |
| `disabled`      |          | boolean       |                                                                                     |                                                                  |
| `loading`       |          | boolean       |                                                                                     |                                                                  |

## Example

```jsx
<Button>Foobar</Button>
```
