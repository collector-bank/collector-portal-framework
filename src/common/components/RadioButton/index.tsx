import React from 'react';
import styled from '../../../';
import uniqid from 'uniqid';

const RadioButtonContainer = styled.div<{ disabled?: Boolean }>(({ disabled }) => ({
    display: 'flex',
    marginBottom: 8,
    opacity: disabled ? 0.5 : 1,
}));

const Input = styled.input(({ theme }) => ({
    appearance: 'none',
    position: 'relative',
    background: 'none',
    border: '1px solid currentColor',
    width: 20,
    height: 20,
    flexShrink: 0,
    borderRadius: '100%',
    marginRight: '1em',
    transition: 'border-color 150ms',

    '&:after': {
        content: '""',
        position: 'absolute',
        top: 3,
        bottom: 3,
        left: 3,
        right: 3,
        borderRadius: '100%',
        transition: 'background-color 150ms',
    },

    '&:checked': {
        borderColor: theme.colors.purple,
    },

    '&:checked:after': {
        backgroundColor: theme.colors.purple,
    },

    '&:disabled': {
        borderColor: theme.colors.darkGray,
        backgroundColor: theme.colors.lightGray,
    },

    '&:disabled:checked:after': {
        backgroundColor: theme.colors.darkGray,
    },
}));

export interface RadioButtonProps {
    label: string | JSX.Element;
    name?: string;
    selected?: boolean;
    disabled?: boolean;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

export interface RadioButtonState {
    id: string;
}

export class RadioButton extends React.Component<RadioButtonProps, RadioButtonState> {
    static displayName = 'Collector.RadioButton';

    state: RadioButtonState = {
        id: uniqid(),
    };

    render() {
        const { label, name, selected, disabled, onChange, ...rest } = this.props;

        return (
            <RadioButtonContainer disabled={disabled} {...rest}>
                <Input type="radio" id={this.state.id} name={name} checked={selected} disabled={disabled} onChange={onChange} />
                {typeof label === 'string' ? (
                    <label htmlFor={this.state.id} dangerouslySetInnerHTML={{ __html: label }} />
                ) : (
                    <label>{label}</label>
                )}
            </RadioButtonContainer>
        );
    }
}
