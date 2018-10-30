# Input

This component can be used for freeform data entry.

## Props

| Name          | Required | Type                       | Possible values                             |
| ------------- | -------- | -------------------------- | ------------------------------------------- |
| `label`       |          | React.ReactNode            |                                             |
| `value`       |          | string                     |                                             |
| `placeholder` |          | string                     |                                             |
| `multiline`   |          | boolean                    |                                             |
| `rows`        |          | number                     | Can be used in combination with `multiline` |
| `disabled`    |          | boolean                    |                                             |
| `error`       |          | boolean or React.ReactNode |                                             |
| `warning`     |          | React.ReactNode            |                                             |
| `maxLength`   |          | number                     |                                             |
| `pattern`     |          | string                     |                                             |
| `name`        |          | string                     |                                             |
| `onChange`    |          | `event => void`            |                                             |
| `onBlur`      |          | `event => void`            |                                             |
| `innerRef`    |          | `() => void`               |                                             |
| `type`        |          | string                     |                                             |
| `Description` |          | string                     |                                             |

## Example

```jsx
<Input label="Ditt namn" value={this.state.name} disabled={true} />
```

## Demo

[See a demo here](https://collector-bank.github.io/collector-portal-framework/?selectedKind=Components&selectedStory=Input)
