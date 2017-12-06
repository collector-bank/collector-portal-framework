import * as React from 'react';
const Collapse = require('react-css-collapse'); // `require` to suppress "missing declaration file warning"
import glamorous from 'glamorous';
import { css } from 'glamor';
import * as uniqid from 'uniqid';
import { Checkbox } from './';
import { Alert } from '../Alert';
import { Label } from '../Label';

const CheckboxGroupContainer = glamorous.div({
    marginBottom: '1.25em',
});

const CheckboxList = glamorous.ul({
    listStyleType: 'none',
    padding: 0,
    margin: 0,
});

const KidsContainer = glamorous.div({
    overflow: 'hidden',
    marginLeft: 34,
    maxWidth: 500 - 34,
});

const transition = css({
    transition: 'height 150ms',
});

interface CheckboxItem {
    key: string;
    label: string;
    child?: JSX.Element;
}

interface Props {
    label: string;
    items: CheckboxItem[];
    checked?: string[];
    disabled?: boolean;
    optional?: boolean;
    error?: string | boolean;
    onChange: (key: string, checked: boolean) => void;
}

interface State {
    name: string;
}

export class CheckboxGroup extends React.Component<Props, State> {
    static displayName = 'Collector.CheckboxGroup';

    state: State = {
        name: uniqid(),
    };

    private handleChange = (key: string, event: React.FormEvent<HTMLInputElement>) => {
        this.props.onChange(key, event.currentTarget.checked);
    }

    private isChecked = (optionId: string) => {
        if (this.props.checked) {
            return this.props.checked.some(x => x === optionId);
        } else {
            return false;
        }
    }

    render() {
        const { label, items, disabled, optional, error } = this.props;

        return (
            <CheckboxGroupContainer>
                <Label optional={optional}>{label}</Label>
                <CheckboxList>
                    {items.map(item => (
                        <li key={item.key}>
                            <Checkbox
                                label={item.label}
                                name={this.state.name}
                                checked={this.isChecked(item.key)}
                                disabled={disabled}
                                onChange={event => this.handleChange(item.key, event)}
                            />
                            <Collapse isOpen={this.isChecked(item.key)} className={`${transition}`}>
                                <KidsContainer>{item.child}</KidsContainer>
                            </Collapse>
                        </li>
                    ))}
                </CheckboxList>
                {error && typeof error === 'string' && <Alert type="error" message={error} alertSize="small" />}
            </CheckboxGroupContainer>
        );
    }
}
