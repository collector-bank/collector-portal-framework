import * as React from 'react';
import glamorous, { CSSProperties, GlamorousComponent } from 'glamorous';
import * as uniqid from 'uniqid';
import { borderRadius, colors } from '../../../theme';
import { Alert } from '../Alert';
import { Label } from '../Label';

export const InputContainer: GlamorousComponent<React.HTMLProps<HTMLDivElement>, {}> = glamorous.div({
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
        backgroundColor: hasError ? '#FFFCFC' : colors.white,
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
        backgroundColor: hasError ? '#FFFCFC' : colors.white,
    }),
);

export interface InputProps {
    label?: string | JSX.Element;
    value?: string;
    placeholder?: string;
    multiline?: boolean;
    disabled?: boolean;
    error?: string | boolean;
    maxLength?: number;
    pattern?: string;
    name?: string;
    onChange?: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    innerRef?: () => void;
    type?: string;
}

export interface InputState {
    id: string;
}

export class Input extends React.Component<InputProps, InputState> {
    static displayName = 'Collector.Input';

    state: InputState = {
        id: uniqid(),
    };

    render() {
        const { label, error, multiline, ...rest } = this.props;
        const InputElement = multiline ? Textarea : InputField;

        return (
            <InputContainer>
                {label && <Label htmlFor={this.state.id} error={Boolean(error)}>{label}</Label>}
                <InputElement
                    id={this.state.id}
                    hasError={Boolean(error)}
                    aria-invalid={Boolean(error)}
                    {...rest}
                />
                {error && typeof error === 'string' && <Alert type="error" message={error} alertSize="small" />}
            </InputContainer>
        );
    }
}
