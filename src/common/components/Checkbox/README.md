# Checkbox

A checkbox is a component that permits the user to make a binary choice, i.e. a choice between one of two possible mutually exclusive options. For example, the user may have to answer 'yes' (checked) or 'no' (not checked) on a simple yes/no question.

## Props

| Name          | Required  | Type            |
|---------------|-----------|-----------------|
| `label`       |     ✓     | string          |
| `name`        |           | string          |
| `checked`     |           | boolean         |
| `disabled`    |           | boolean         |
| `onChange`    |           | `event => void` |

## Example

```jsx
<Checkbox label="Jag har förstått villkoren" />
```
