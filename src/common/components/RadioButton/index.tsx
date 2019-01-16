import React from 'react';
import styled from '@emotion/styled';
import uniqid from 'uniqid';

const RadioButtonContainer = styled.div<{ disabled?: Boolean }>(
    {
        display: 'flex',
        marginBottom: 8,
    },
    ({ disabled }) => (disabled ? { opacity: 0.5 } : {})
);

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
        borderColor: theme.colors.primary,
    },

    '&:checked:after': {
        backgroundColor: theme.colors.primary,
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
    label: string;
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
        const { label, name, selected, disabled, onChange } = this.props;

        return (
            <RadioButtonContainer disabled={disabled}>
                <Input type="radio" id={this.state.id} name={name} checked={selected} disabled={disabled} onChange={onChange} />
                <label htmlFor={this.state.id} dangerouslySetInnerHTML={{ __html: label }} />
            </RadioButtonContainer>
        );
    }
}
