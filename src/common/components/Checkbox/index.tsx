import * as React from 'react';
import glamorous from 'glamorous';
import * as uniqid from 'uniqid';
import { borderRadius, colors } from '../../../theme';

const checkmark = require('./checkmark.svg');

const CheckboxContainer = glamorous.div<{ disabled?: boolean }>(
    {
        display: 'flex',
        marginBottom: 8,
    },
    ({ disabled }) => ({
        opacity: disabled ? 0.5 : 1,
    }),
);

const Input = glamorous.input({
    appearance: 'none',
    position: 'relative',
    background: 'none',
    border: '1px solid currentColor',
    width: 20,
    height: 20,
    flexShrink: 0,
    borderRadius: borderRadius.small,
    marginRight: '1em',
    transition: 'border-color 150ms',

    '&:after': {
        content: '""',
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: '50%',
        backgroundSize: '75%',
        transition: 'background 150ms',
    },

    '&:checked': {
        borderColor: colors.purple,
    },

    '&:checked:after': {
        backgroundImage: `url(${checkmark})`,
        backgroundColor: colors.purple,
    },

    '&:disabled': {
        borderColor: colors.darkGray,
        opacity: 0.6,
    },
});

export interface CheckboxProps {
    label: string | JSX.Element;
    name?: string;
    checked?: boolean;
    disabled?: boolean;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export interface CheckboxState {
    id: string;
}

export class Checkbox extends React.Component<CheckboxProps, CheckboxState> {
    static displayName = 'Collector.Checkbox';

    state: CheckboxState = {
        id: uniqid(),
    };

    render() {
        const { label, name, checked, disabled, onChange } = this.props;

        return (
            <CheckboxContainer disabled={disabled}>
                <Input
                    type="checkbox"
                    id={this.state.id}
                    name={name}
                    checked={checked}
                    disabled={disabled}
                    onChange={onChange}
                />
                <label htmlFor={this.state.id}>{label}</label>
            </CheckboxContainer>
        );
    }
}
