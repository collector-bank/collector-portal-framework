# Card

A card is a component that is meant to house content in a clean and concise format, with freedom to be used either as merely an information display or contain CTA in form of a button in the sub-body

## Props

| Name         | Required | Type                            | Notes                                                                                                                   |
| ------------ | -------- | ------------------------------- | ----------------------------------------------------------------------------------------------------------------------- |
| `heading`    |          | string                          | Heading in a badge                                                                                                      |
| `badgeColor` |          | `portal-framework/theme/colors` | This sets the color of the badge described by the heading                                                               |
| `body`       |          | `React.ReactNode`               | This contains the main body to render in the upper part of the card. <br/>Should be width: 280px, height: 320px ideally |
| `subBody`    |          | `React.ReactNode`               | This is for secondary information or a CTA, with a Button                                                               |
| `onDismiss`  |          | `() => void`                    | This is for handling dismissing the card, showing a small cross in the corner of the card, to let parent hides it       |
| `location`   |          | string                          |                                                                                                                         |

# CardGroup

Whenever using a Card in a situation where you may have more than one Card in a row, one should wrap Card in a `CardGroup` to get the margins correct.

## Example

```jsx
<CardGroup>
    <Card
        heading="First card"
        color="purple"
        body={<Body>Content</Body>}
        subBody={<Button>Secondary part</Button>}
    />
    <Card
        heading="Second card"
        color="purple"
        body={<Body>Content</Body>}
        subBody={<Button>Secondary part</Button>}
    />
</CardGroup>
```
