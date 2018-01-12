import * as React from 'react';
import Collapse from 'react-css-collapse';
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

export interface CheckboxItem {
    key: string;
    label: string;
    child?: JSX.Element;
}

export interface CheckboxGroupProps {
    label: string | JSX.Element;
    items: CheckboxItem[];
    checked?: string[];
    disabled?: boolean;
    error?: string | boolean;
    onChange: (key: string, checked: boolean) => void;
}

export interface CheckboxGroupState {
    name: string;
}

export class CheckboxGroup extends React.Component<CheckboxGroupProps, CheckboxGroupState> {
    static displayName = 'Collector.CheckboxGroup';

    state: CheckboxGroupState = {
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
        const { label, items, disabled, error } = this.props;

        return (
            <CheckboxGroupContainer>
                <Label>{label}</Label>
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
