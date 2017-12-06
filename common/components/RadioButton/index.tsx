import * as React from 'react';
import glamorous from 'glamorous';
import * as uniqid from 'uniqid';
import { colors } from '../../../theme';

const RadioButtonContainer = glamorous.div<{ disabled?: boolean }>(
    {
        display: 'flex',
        marginBottom: 8,
    },
    ({ disabled }) => (disabled ? { opacity: 0.5 } : {}),
);

const Input = glamorous.input({
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
        borderColor: colors.purple,
    },

    '&:checked:after': {
        backgroundColor: colors.purple,
    },

    '&:disabled': {
        borderColor: colors.darkGray,
        backgroundColor: colors.lightGray,
    },

    '&:disabled:checked:after': {
        backgroundColor: colors.darkGray,
    },
});

interface Props {
    label: string | JSX.Element;
    name?: string;
    selected?: boolean;
    disabled?: boolean;
    onChange: (event: React.FormEvent<HTMLInputElement>) => void;
}

interface State {
    id: string;
}

export class RadioButton extends React.Component<Props, State> {
    static displayName = 'Collector.RadioButton';

    state: State = {
        id: uniqid(),
    };

    render() {
        const { label, name, selected, disabled, onChange } = this.props;

        return (
            <RadioButtonContainer disabled={disabled}>
                <Input
                    type="radio"
                    id={this.state.id}
                    name={name}
                    checked={selected}
                    disabled={disabled}
                    onChange={onChange}
                />
                <label htmlFor={this.state.id}>{label}</label>
            </RadioButtonContainer>
        );
    }
}
