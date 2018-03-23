# Input

This component can be used for freeform data entry.

## Props

| Name          | Required | Type              | Possible values                               |
|---------------|----------|-------------------|-----------------------------------------------|
| `label`       |          | string            |                                               |
| `value`       |          | string            |                                               |
| `placeholder` |          | string            |                                               |
| `multiline`   |          | boolean           |                                               |
| `disabled`    |          | boolean           |                                               |
| `error`       |          | string or boolean |                                               |
| `maxLength`   |          | number            |                                               |
| `pattern`     |          | string            |                                               |
| `name`        |          | string            |                                               |
| `onChange`    |          | `event => void`   |                                               |
| `innerRef`    |          | `() => void`      |                                               |
| `type`        |          | string            |                                               |

## Example

```jsx
<Input label="Ditt namn" value={this.state.name} disabled={true} />
```
