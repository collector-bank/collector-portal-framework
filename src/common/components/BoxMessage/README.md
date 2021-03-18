# BoxMessage

This component allows the user display a message with a button linking towards another page or site. 

## Props

| Name          | Required  | Type                                      |
|---------------|-----------|-------------------------------------------|
| `label`       |           | string                                    |
| `buttonLabel` |           | string                                    |
| `buttonKind`  |           | `'primary'`, `'cta'`, `'secondary'`,          `'secondaryNegative'`, `'success'`, `'warn'` `'text'`                   |
| `showLogo`    |           | boolean                                   |
| `onClick`     |           | `() => void`                              |

## Example

```jsx
    <BoxMessage 
        label="Jag är ett meddelande" 
        buttonLabel="Klicka här" 
        onClick={() => {}} 
        buttonKind="cta"
        showLogo 
    />
```
