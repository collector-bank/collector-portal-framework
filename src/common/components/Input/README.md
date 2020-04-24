# Input

This component can be used for freeform data entry.

It uses forwardRef to forward a reference to the inner input component.

## Props

| Name          | Required | Type                                 | Possible values                             |
| ------------- | -------- | ------------------------------------ | ------------------------------------------- |
| `label`       |          | string or `React.ReactNode`          |                                             |
| `value`       |          | string                               |                                             |
| `placeholder` |          | string                               |                                             |
| `multiline`   |          | boolean                              |                                             |
| `rows`        |          | number                               | Can be used in combination with `multiline` |
| `disabled`    |          | boolean                              |                                             |
| `error`       |          | string, boolean or `React.ReactNode` |                                             |
| `warning`     |          | `React.ReactNode`                    |                                             |
| `maxLength`   |          | number                               |                                             |
| `pattern`     |          | string                               |                                             |
| `name`        |          | string                               |                                             |
| `onChange`    |          | `event => void`                      |                                             |
| `onBlur`      |          | `event => void`                      |                                             |
| `type`        |          | string                               |                                             |
| `Description` |          | string                               |                                             |
| `togglePassword` |       | boolean                              |                                             |
| `togglePasswordWidth` |  | string | number                      |                                             |

## Example

```jsx
<Input label="Ditt namn" value={this.state.name} disabled={true} />
```
