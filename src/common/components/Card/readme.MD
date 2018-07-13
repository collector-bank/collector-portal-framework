# Checkbox

A checkbox is a component that is meant to house content in a clean and concise format, with freedom to be used either as merely an information display or contain CTA in form of a button in the sub-body

## Props

| Name      | Required | Type                             | Notes                                                                                                                    |
| --------- | -------- | -------------------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `heading` |          | string                           | Heading in the corner of the card with an underlined colour, indicated in `color`                                        |
| `color`   |          | `portal-framework/theme/colours` | This must correspond to a portal framework colour, and is typed as such                                                  |
| `body`    |          | JSX.Element                      | This contains the main body to render in the upper part of the card. <br/>Should be width: 280px, height: 320px ideally. |
| `subBody` |          | JSX.Element                      | This is for secondary information or a CTA, with a Button                                                                |

## Example

```jsx
return (
    <Card
        color="purple"
        heading="Heading"
        body={
            <BodyContainer>
                <Body>Content</Body>
            </BodyContainer>
        }
        subBody={
            <SubBodyContainer>
                <Button>Secondary part</Button>
            </SubBodyContainer>
        }
    />
);
```
