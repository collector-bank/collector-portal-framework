# Card

A card is a component that is meant to house content in a clean and concise format, with freedom to be used either as merely an information display or contain CTA in form of a button in the sub-body

## Props

| Name      | Required | Type                             | Notes                                                                                                                    |
| --------- | -------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `heading` |          | string                           | Heading in the corner of the card with an underlined color, indicated in `color`                                         |
| `color`   |          | `portal-framework/theme/colors`  | This must correspond to a portal framework color, and is typed as such                                                   |
| `body`    |          | `React.ReactNode`                | This contains the main body to render in the upper part of the card. <br/>Should be width: 280px, height: 320px ideally. |
| `subBody` |          | `React.ReactNode`                | This is for secondary information or a CTA, with a Button                                                                |

## Example

```jsx
return (
    <Card
        color="purple"
        heading="Heading"
        body={
            <div>
                <Body>Content</Body>
            </div>
        }
        subBody={
            <div>
                <Button>Secondary part</Button>
            </div>
        }
    />
);
```
