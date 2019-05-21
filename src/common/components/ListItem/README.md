# List Item

This component allows a user to create an arbitrary amount of ListItems to be used as a List or Table-like.

The API is simple and very unopinionated on how to present if necessary, but has default styles and margins applied for easy use in a portal framework site.

The list item also has support for being either a link or expandable to show detail content in a React Collapse frame.

## Props

| Name       | Required | Type       | Purpose                                                                                             |
| ---------- | -------- | ---------- | --------------------------------------------------------------------------------------------------- |
| `item`     |          | `ListItem` | Item to render in list                                                                              |
| `link`     |          | number     | Link to use as navigation link item. *Cannot be used in conjunction with link*                      |
| `children` |          | number     | React children is used to send in details to be expanded. *Cannot be used in conjunction with link* |

## Example

```jsx
const apiExample = [
    {
        grantedAmount: { value: 30000, currencySymbol: 'SEK' },
        type: 'Payment',
        status: 'Paid',
        date: '2018-09-20',
    },
        {
        grantedAmount: { value: 55000, currencySymbol: 'SEK' },
        type: 'Invoice',
        status: 'Unpaid',
        date: '2018-10-20',
    }
];

<ul>
    {apiExample.map(apiItem =>
        <ListItem
            key={index}
            item={{
                title: apiItem.type,
                subTitle: apiItem.status,
                details: formatMoney(apiItem.grantedAmount.value, apiItem.grantedAmount.currencySymbol),
                subDetails: <span style={{ color: 'red' }}>{apiItem.date}</span>,
            }}
        />
    )}
</ul>

```
