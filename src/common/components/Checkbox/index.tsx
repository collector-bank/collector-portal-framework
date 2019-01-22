import React from 'react';
import uniqid from 'uniqid';
import styled from '../../../';

const checkboxSvg =
    "'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 9.862 8.198%22%3E%3Cpath fill=%22%23fff%22 d=%22M8.972.188l-5.364 6.72L.883 3.659a.5.5 0 1 0-.766.642l3.117 3.718a.502.502 0 0 0 .383.179h.006a.502.502 0 0 0 .385-.188L9.753.812A.498.498 0 0 0 9.674.11a.498.498 0 0 0-.702.078z%22/%3E%3C/svg%3E%0A'";

const CheckboxContainer = styled.div<{ disabled?: boolean }>(({ disabled }) => ({
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
    marginRight: '1em',
    transition: 'border-color 150ms, background 150ms, opacity 150ms',

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

    '&:checked:after': {
        backgroundImage: `url(${checkboxSvg})`,
    },

    borderRadius: theme.borderRadius.small,

    '&:checked': {
        backgroundColor: theme.colors.primary,
        borderColor: theme.colors.primary,
    },

    '&:disabled': {
        opacity: 0.6,
        borderColor: theme.colors.darkGray,
    },
}));

export interface CheckboxProps {
    label: string;
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
                <Input type="checkbox" id={this.state.id} name={name} checked={checked} disabled={disabled} onChange={onChange} />
                <label htmlFor={this.state.id} dangerouslySetInnerHTML={{ __html: label }} />
            </CheckboxContainer>
        );
    }
}
