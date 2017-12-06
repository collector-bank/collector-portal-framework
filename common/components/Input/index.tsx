import * as React from 'react';
import glamorous, { CSSProperties } from 'glamorous';
import * as uniqid from 'uniqid';
import { borderRadius, colors } from '../../../theme';
import { Alert } from '../Alert';
import { Label } from '../Label';

export const InputContainer = glamorous.div({
    maxWidth: 500,
    marginBottom: '1.25em',
});

const inputStyles: CSSProperties = {
    font: 'inherit',
    color: 'inherit',
    width: '100%',
    borderRadius: borderRadius.small,
    border: '1px solid',
    padding: 11,
    boxSizing: 'border-box',
    appearance: 'none',

    '&:disabled': {
        background: colors.offWhite,
        borderColor: colors.lightGray,
        opacity: 1,
    },
};

export const InputField = glamorous.input<{ hasError?: boolean }>(
    inputStyles,
    ({ hasError }) => ({
        borderColor: hasError ? colors.red : colors.mediumGray,
        backgroundColor: hasError ? '#FFFCFC' : 'transparent',
    })
);

const Textarea = glamorous.textarea<{ hasError?: boolean }>(
    {
        ...inputStyles,
        resize: 'vertical',
        minHeight: 80,
    },
    ({ hasError }) => ({
        borderColor: hasError ? colors.red : colors.mediumGray,
    }),
);

interface Props {
    label?: string;
    value?: string;
    placeholder?: string;
    multiline?: boolean;
    disabled?: boolean;
    error?: string | boolean;
    maxLength?: number;
    pattern?: string;
    name?: string;
    optional?: boolean;
    onChange?: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

interface State {
    id: string;
}

export class Input extends React.Component<Props, State> {
    static displayName = 'Collector.Input';

    state: State = {
        id: uniqid(),
    };

    render() {
        const { label, value, error, multiline, optional, onChange } = this.props;

        return (
            <InputContainer>
                {label && <Label htmlFor={this.state.id} optional={optional} error={Boolean(error)}>{label}</Label>}
                {multiline ? (
                    <Textarea
                        id={this.state.id}
                        value={value}
                        hasError={Boolean(error)}
                        aria-invalid={Boolean(error)}
                        onChange={onChange}
                        {...this.props}
                    />
                ) : (
                    <InputField
                        id={this.state.id}
                        value={value}
                        hasError={Boolean(error)}
                        aria-invalid={Boolean(error)}
                        onChange={onChange}
                        {...this.props}
                    />
                )}
                {error && typeof error === 'string' && <Alert type="error" message={error} alertSize="small" />}
            </InputContainer>
        );
    }
}
