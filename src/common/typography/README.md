# Typography

Our typographic components are simple to use as they are close to the completely standard HTML counterparts, only using your text styles as defined in the theme.

## Props

Our headings do have a property though

| Component  | Props           |
| ---------- | --------------- |
| H1         | centered?: bool |
| H2         | centered?: bool |
| H3         | centered?: bool |
| Text       | None            |
| TextLink   | None            |

## Example
```jsx
<>
    <H1>{'A heading'}</H1>
    <H2>{'A smaller centered heading'}</H2>

    <Text>{'A 540 pixels wide piece of text'}</Text>
</>
```