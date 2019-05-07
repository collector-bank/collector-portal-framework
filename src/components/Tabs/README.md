# Tabs
Tabs is a route based tab component that helps you quickly set up really nice tabs that are responsive.

## Props
| Name    | Required | Type      | Possible values |
| ------- | -------- | --------- | --------------- |
| `items` |          | `TabItem` |                 |

## Example
To use them, you must first set up your route component
```jsx
    <Route
        path="/customer/profile/account-number"
        render={<AccountNumber/>}
    />
```

Then it's as easy as having your `TabItem` set up to go to that path


```jsx
const tabItem = [{
    path: '/customer/profile/account-number',
    label: translations.accountNumberView.accountNumberForDisbursement
}];

<Tabs items={tabItem} />
```