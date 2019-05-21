import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import notes from './README.md';
import { ListItem, Text, Badge } from '../../../components';
import { formatMoney } from '../../../formatters';
import { isAfter } from 'date-fns';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);
const apiExample = [
    {
        grantedAmount: { value: 30000, currencySymbol: 'SEK' },
        type: 'Payment',
        paymentStatus: 'Outstanding',
        status: 'Partially paid',
        date: '2018-09-20',
    },
    {
        grantedAmount: { value: 31000, currencySymbol: 'SEK' },
        type: 'Payment',
        paymentStatus: 'Outstanding',
        status: 'Partially paid',
        date: '2018-08-20',
    },
    {
        grantedAmount: { value: 345000, currencySymbol: 'SEK' },
        type: 'Payment',
        paymentStatus: 'Outstanding',
        status: 'Partially paid',
        date: '2018-07-20',
    },
    {
        grantedAmount: { value: 30300, currencySymbol: 'SEK' },
        type: 'Payment',
        paymentStatus: 'Recieved',
        status: 'Paid',
        date: '2018-06-20',
    },
    {
        grantedAmount: { value: 32000, currencySymbol: 'SEK' },
        type: 'Payment',
        paymentStatus: 'Recieved',
        status: 'Paid',
        date: '2018-05-20',
    },
];

components.add(
    'List',
    () => {
        const getItem = (apiItem: any) => ({
            title: (
                <>
                    <span>{apiItem.type}</span>
                    <Badge label={apiItem.status} />
                </>
            ),
            subTitle: apiItem.paymentStatus,
            details: formatMoney(apiItem.grantedAmount.value, apiItem.grantedAmount.currencySymbol),
            subDetails: (
                <span style={{ color: isAfter(new Date(apiItem.date), new Date('2018-07-01')) ? 'red' : undefined }}>{apiItem.date}</span>
            ),
        });

        return (
            <ul style={{ maxWidth: 420, padding: 0, margin: 0 }}>
                {apiExample.map((item, index) => (
                    <ListItem key={index} location={isEvenItem(index) ? 'https://dn.se' : undefined} item={getItem(item)}>
                        {!isEvenItem(index) && (
                            <Text style={{ background: '#F4F4F4', padding: 16, borderRadius: 8, marginBottom: 0 }}>Details</Text>
                        )}
                    </ListItem>
                ))}
            </ul>
        );
    },
    { notes }
);

function isEvenItem(index: number) {
    return index % 2 === 0;
}
