import * as React from 'react';
import Collapse from 'react-css-collapse';
import glamorous from 'glamorous';
import { css } from 'glamor';
import * as uniqid from 'uniqid';
import { Alert } from '../Alert';
import { Label } from '../Label';
import { RadioButton } from './';

const RadioButtonGroupContainer = glamorous.div({
    marginBottom: '1.25em',
});

const RadioButtonList = glamorous.ul({
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

export type Key = any;

export interface RadioButtonItem {
    key: Key;
    label: string;
    child?: React.ReactNode;
}

export interface RadioButtonGroupProps {
    label: string | React.ReactNode;
    items: RadioButtonItem[];
    selected?: Key;
    disabled?: boolean;
    error?: string | boolean;
    onChange: (key: Key) => void;
}

export interface RadioButtonGroupState {
    name: string;
}

export class RadioButtonGroup extends React.Component<RadioButtonGroupProps, RadioButtonGroupState> {
    static displayName = 'Collector.RadioButtonGroup';

    state: RadioButtonGroupState = {
        name: uniqid(),
    };

    private handleChange = (key: string) => {
        this.props.onChange(key);
    };

    render() {
        const { label, items, selected, disabled, error } = this.props;

        return (
            <RadioButtonGroupContainer>
                <Label>{label}</Label>
                <RadioButtonList>
                    {items.map((item, i) => (
                        <li key={i}>
                            <RadioButton
                                label={item.label}
                                name={this.state.name}
                                selected={item.key === selected}
                                disabled={disabled}
                                onChange={() => this.handleChange(item.key)}
                            />
                            <Collapse isOpen={item.key === selected} className={`${transition}`}>
                                <KidsContainer aria-hidden={item.key !== selected}>{item.child}</KidsContainer>
                            </Collapse>
                        </li>
                    ))}
                </RadioButtonList>
                {error && typeof error === 'string' && <Alert type="error" message={error} alertSize="small" />}
            </RadioButtonGroupContainer>
        );
    }
}
