import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select, array, number } from '@storybook/addon-knobs';

import {
    Button,
    Checkbox,
    CheckboxGroup,
    Alert,
    Input,
    RadioButton,
    RadioButtonGroup,
    Select,
    Spinner,
    DatePicker,
} from '../src/common/components';

import {
    H1,
    H2,
    H3,
    Text,
    TextLink,
} from '../src/common/typography';

const components = storiesOf('Components', module);

components.addDecorator(withKnobs);

components.add('Button', () => {
    const types: any[] = ['primary', 'secondary', 'warn', 'text'];
    const sizes: any[] = ['small', 'medium', 'large'];
    const icons: any[] = ['', 'bank-id', 'plus', 'cross'];

    return (
        <Button
            type={select('Type', types, 'primary')}
            size={select('Size', sizes, 'medium')}
            disabled={boolean('Disabled', false)}
            loading={boolean('Loading', false)}
            icon={select('Icon', icons, '')}
            onClick={action('button clicked')}
        >
            {text('Label', 'En knapp')}
        </Button>
    );
});

components.add('Select', () => {
    const items = [
        { label: 'Foo' },
        { label: 'Bar' },
        { label: 'Baz' },
    ];

    return (
        <Select
            label={text('Label', 'En label')}
            disabled={boolean('Disabled', false)}
            optional={boolean('Optional', false)}
            value={text('Selected item', 'Bar')}
            items={items}
            error={text('Error', '')}
            onChange={action('select changed')}
        />
    );
});

components.add('Alert', () => {
    const sizes: any[] = ['small', 'large'];
    const types: any[] = ['error', 'warning', 'info', 'success'];

    return (
        <Alert
            type={select('Type', types, 'error')}
            message={text('Message', 'Ett felmeddelande')}
            alertSize={select('Size', sizes, 'large')}
        />
    );
});

components.add('Input', () => {
    return (
        <Input
            label={text('Label', 'En label')}
            placeholder={text('Placeholder', '')}
            error={text('Error', '')}
            multiline={boolean('Multiline', false)}
            disabled={boolean('Disabled', false)}
            optional={boolean('Optional', false)}
            onChange={action('input changed')}
        />
    );
});

components.add('Radio button', () => {
    return (
        <RadioButton
            label={text('Label', 'En label')}
            selected={boolean('Selected', false)}
            disabled={boolean('Disabled', false)}
            onChange={action('radio button changed')}
        />
    );
});

components.add('Radio button group', () => {
    let items = [
        {
            key: 'foo',
            label: 'Alternativ 1'
        },
        {
            key: 'bar',
            label: 'Alternativ 2',
        },
        {
            key: 'baz',
            label: 'Alternativ 3 (med ett barn-element)',
            child: <Input label="En label" />
        }
    ];

    return (
        <RadioButtonGroup
            label={text('Label', 'En label')}
            items={items}
            selected={select('Option', items.map(x => x.key), 'foo')}
            disabled={boolean('Disabled', false)}
            optional={boolean('Optional', false)}
            error={text('Error', '')}
            onChange={action('radio button group changed')}
        />
    );
});

components.add('Checkbox', () => {
    return (
        <Checkbox
            label={text('Label', 'En label')}
            checked={boolean('Checked', false)}
            disabled={boolean('Disabled', false)}
            onChange={action('checkbox changed')}
        />
    );
});

components.add('Checkbox group', () => {
    let items = [
        {
            key: 'foo',
            label: 'Alternativ 1'
        },
        {
            key: 'bar',
            label: 'Alternativ 2',
        },
        {
            key: 'baz',
            label: 'Alternativ 3 (med ett barn-element)',
            child: <Input label="En label" />
        }
    ];

    return (
        <CheckboxGroup
            label={text('Label', 'En label')}
            items={items}
            checked={array('Checked items', ['foo', 'baz'])}
            disabled={boolean('Disabled', false)}
            optional={boolean('Optional', false)}
            error={text('Error', '')}
            onChange={action('checkbox group changed')}
        />
    );
});

components.add('Date picker', () => {
    return (
        <DatePicker
            locale="sv"
            label={text('Label', 'En label')}
            onChange={action('date picker changed')}
            minDate={new Date()}
            selectedDate={new Date()}
        />
    );
});

components.add('Spinner', () => {
    return (
        <Spinner
            size={number('Size', 80)}
            centered={boolean('Centered', false)}
        />
    );
});

const typography = storiesOf('Typography', module);

typography.addDecorator(withKnobs);

const loremIpsum = `
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam bibendum nibh, ut euismod magna. Curabitur
    interdum, metus ac auctor fringilla, leo neque semper leo, non faucibus sapien nisl in dolor. Duis magna turpis,
    congue vel efficitur vitae, elementum eu orci. Etiam augue turpis, malesuada quis tincidunt sed, accumsan ut augue.
    Suspendisse tellus lectus, ullamcorper eget rhoncus sodales, hendrerit quis metus. Sed porta mattis nisl, sed vehicula
    eros elementum vitae. Curabitur sagittis nulla in nisl vulputate, a semper est imperdiet.
`;

typography.add('Heading 1', () => <H1>{text('Heading', 'Heading 1')}</H1>);
typography.add('Heading 2', () => <H2>{text('Heading', 'Heading 2')}</H2>);
typography.add('Heading 3', () => <H3>{text('Heading', 'Heading 3')}</H3>);
typography.add('Body text', () => <Text>{text('Text', loremIpsum)}</Text>);
typography.add('Text link', () => <TextLink href="#">{text('Link text', 'This is a link')}</TextLink>);
