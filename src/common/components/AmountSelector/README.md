# Amount Selector

This component allows users to input an amount in 3 different ways; using a slider, increase/decrease buttons or keyboard input.

## Props

| Name        | Required | Type             | Possible values                               |
|-------------|----------|------------------|-----------------------------------------------|
| `currency`  | ✓        | string           |                                               |
| `min`       | ✓        | number           |                                               |
| `max`       | ✓        | number           |                                               |
| `value`     | ✓        | number           |                                               |
| `onChange`  | ✓        | `number => void` |                                               |
| `stepSize`  | ✓        | number           |                                               |

## Example

```jsx
<AmountSelector
    currency="SEK"
    min={100}
    max={1000}
    value={500}
    onChange={val => console.log(val)}
    stepSize={100}
/>
```
