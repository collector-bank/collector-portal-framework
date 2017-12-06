import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { withKnobs, text, boolean, select, array, number } from '@storybook/addon-knobs';
import { Button, Checkbox, CheckboxGroup, Alert, Input, RadioButton, RadioButtonGroup, Select, Spinner, DatePicker, } from '../common/components';
import { H1, H2, H3, Text, TextLink, } from '../common/typography';
var components = storiesOf('Components', module);
components.addDecorator(withKnobs);
components.add('Button', function () {
    var types = ['primary', 'secondary', 'warn', 'text'];
    var sizes = ['small', 'medium', 'large'];
    var icons = ['', 'bank-id', 'plus', 'cross'];
    return (React.createElement(Button, { type: select('Type', types, 'primary'), size: select('Size', sizes, 'medium'), disabled: boolean('Disabled', false), loading: boolean('Loading', false), icon: select('Icon', icons, ''), onClick: action('button clicked') }, text('Label', 'En knapp')));
});
components.add('Select', function () {
    var items = [
        { label: 'Foo' },
        { label: 'Bar' },
        { label: 'Baz' },
    ];
    return (React.createElement(Select, { label: text('Label', 'En label'), disabled: boolean('Disabled', false), optional: boolean('Optional', false), value: text('Selected item', 'Bar'), items: items, error: text('Error', ''), onChange: action('select changed') }));
});
components.add('Alert', function () {
    var sizes = ['small', 'large'];
    var types = ['error', 'warning', 'info', 'success'];
    return (React.createElement(Alert, { type: select('Type', types, 'error'), message: text('Message', 'Ett felmeddelande'), alertSize: select('Size', sizes, 'large') }));
});
components.add('Input', function () {
    return (React.createElement(Input, { label: text('Label', 'En label'), placeholder: text('Placeholder', ''), error: text('Error', ''), multiline: boolean('Multiline', false), disabled: boolean('Disabled', false), optional: boolean('Optional', false), onChange: action('input changed') }));
});
components.add('Radio button', function () {
    return (React.createElement(RadioButton, { label: text('Label', 'En label'), selected: boolean('Selected', false), disabled: boolean('Disabled', false), onChange: action('radio button changed') }));
});
components.add('Radio button group', function () {
    var items = [
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
            child: React.createElement(Input, { label: "En label" })
        }
    ];
    return (React.createElement(RadioButtonGroup, { label: text('Label', 'En label'), items: items, selected: select('Option', items.map(function (x) { return x.key; }), 'foo'), disabled: boolean('Disabled', false), optional: boolean('Optional', false), error: text('Error', ''), onChange: action('radio button group changed') }));
});
components.add('Checkbox', function () {
    return (React.createElement(Checkbox, { label: text('Label', 'En label'), checked: boolean('Checked', false), disabled: boolean('Disabled', false), onChange: action('checkbox changed') }));
});
components.add('Checkbox group', function () {
    var items = [
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
            child: React.createElement(Input, { label: "En label" })
        }
    ];
    return (React.createElement(CheckboxGroup, { label: text('Label', 'En label'), items: items, checked: array('Checked items', ['foo', 'baz']), disabled: boolean('Disabled', false), optional: boolean('Optional', false), error: text('Error', ''), onChange: action('checkbox group changed') }));
});
components.add('Date picker', function () {
    return (React.createElement(DatePicker, { locale: "sv", label: text('Label', 'En label'), onChange: action('date picker changed'), minDate: new Date(), selectedDate: new Date() }));
});
components.add('Spinner', function () {
    return (React.createElement(Spinner, { size: number('Size', 80), centered: boolean('Centered', false) }));
});
var typography = storiesOf('Typography', module);
typography.addDecorator(withKnobs);
var loremIpsum = "\n    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse aliquam bibendum nibh, ut euismod magna. Curabitur\n    interdum, metus ac auctor fringilla, leo neque semper leo, non faucibus sapien nisl in dolor. Duis magna turpis,\n    congue vel efficitur vitae, elementum eu orci. Etiam augue turpis, malesuada quis tincidunt sed, accumsan ut augue.\n    Suspendisse tellus lectus, ullamcorper eget rhoncus sodales, hendrerit quis metus. Sed porta mattis nisl, sed vehicula\n    eros elementum vitae. Curabitur sagittis nulla in nisl vulputate, a semper est imperdiet.\n";
typography.add('Heading 1', function () { return React.createElement(H1, null, text('Heading', 'Heading 1')); });
typography.add('Heading 2', function () { return React.createElement(H2, null, text('Heading', 'Heading 2')); });
typography.add('Heading 3', function () { return React.createElement(H3, null, text('Heading', 'Heading 3')); });
typography.add('Body text', function () { return React.createElement(Text, null, text('Text', loremIpsum)); });
typography.add('Text link', function () { return React.createElement(TextLink, { href: "#" }, text('Link text', 'This is a link')); });
//# sourceMappingURL=index.js.map