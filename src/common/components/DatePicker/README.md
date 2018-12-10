# Date picker

This compoment can be used to capture a date. It provides an input field which, when clicked upon to enter a date, pops up a calendar below the field, allowing the user to populate the field with an appropriate date.

## Props

| Name             | Required  | Type    | Possible values                              |
|------------------|-----------|---------|----------------------------------------------|
| `locale`         |     ✓     | string                        | `'sv'`, `'fi'`, `'nb'` |
| `label`          |           | string                        |                        |
| `selectedDate`   |           | Date                          |                        |
| `minDate`        |           | Date                          |                        |
| `maxDate`        |           | Date                          |                        |
| `invalidMessage` |           | string                        |                        |
| `onChange`       |           | `(date: Date | null) => void` |                        |

## Example

```jsx
<DatePicker locale="sv" label="Bokföringsdatum" />
```

...or if you want multiple...

```jsx
<DatePickerGroup>
    <DatePicker locale="sv" label="Transaktionsdatum" />
    <DatePicker locale="sv" label="Bokföringsdatum" />
</DatePickerGroup>
```

## Demo

[See a demo here](https://collector-bank.github.io/collector-portal-framework/?selectedKind=Components&selectedStory=Date%20picker)
