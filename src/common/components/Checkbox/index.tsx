import * as React from 'react';
import glamorous from 'glamorous';
import * as uniqid from 'uniqid';
import { borderRadius, colors } from '../../../theme';

const checkboxSvg = 'data:image/svg+xml;base64,ICAgIDxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgOS44NjIgOC4xOTgiPg0KICAgICAgICA8cGF0aA0KICAgICAgICAgICAgZmlsbD0iI2ZmZiINCiAgICAgICAgICAgIGQ9Ik04Ljk3Mi4xODhsLTUuMzY0IDYuNzJMLjg4MyAzLjY1OWEuNS41IDAgMSAwLS43NjYuNjQybDMuMTE3IDMuNzE4YS41MDIuNTAyIDAgMCAwIC4zODMuMTc5aC4wMDZhLjUwMi41MDIgMCAwIDAgLjM4NS0uMTg4TDkuNzUzLjgxMkEuNDk4LjQ5OCAwIDAgMCA5LjY3NC4xMWEuNDk4LjQ5OCAwIDAgMC0uNzAyLjA3OHoiDQogICAgICAgIC8+DQogICAgPC9zdmc+';
const CheckboxContainer = glamorous.div<{ disabled?: boolean }>(
    {
        display: 'flex',
        marginBottom: 8,
    },
    ({ disabled }) => ({
        opacity: disabled ? 0.5 : 1,
    })
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

    '&:checked': {
        backgroundColor: colors.purple,
        borderColor: colors.purple,
    },

    '&:checked:after': {
        backgroundImage: `url(${checkboxSvg})`,
    },

    '&:disabled': {
        borderColor: colors.darkGray,
        opacity: 0.6,
    },
});

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
