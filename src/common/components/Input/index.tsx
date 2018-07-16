import * as React from 'react';
import Collapse from 'react-css-collapse';
import glamorous, { CSSProperties, GlamorousComponent } from 'glamorous';
import * as uniqid from 'uniqid';
import { borderRadius, colors } from '../../../theme';
import { Label } from '../Label';
import { css } from 'glamor';

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
    borderColor: colors.mediumGray,
    padding: 11, // To make it 12 pixels when accounting for the 1px border above
    boxSizing: 'border-box',
    appearance: 'none',
    transition: 'border-bottom-left-radius 150ms, border-bottom-right-radius 150ms',

    '&:disabled': {
        background: colors.offWhite,
        borderColor: colors.lightGray,
        opacity: 1,
    },
};

const inputErrorTransition = css({
    transition: 'height 150ms',
});

export const InputField = glamorous.input<{ hasError?: boolean }>(inputStyles, ({ hasError }) => ({
    borderBottomLeftRadius: hasError ? 0 : borderRadius.small,
    borderBottomRightRadius: hasError ? 0 : borderRadius.small,
    borderBottomColor: hasError ? colors.red : colors.mediumGray,
}));

export const InputError = glamorous.div({
    background: colors.red,
    fontWeight: 500,
    borderBottomLeftRadius: borderRadius.small,
    borderBottomRightRadius: borderRadius.small,
    color: colors.white,
    padding: 8,
    paddingLeft: 12,
    minHeight: 40,
    boxSizing: 'border-box',
});

const Textarea = glamorous.textarea<{ hasError?: boolean }>(
    {
        ...inputStyles,
        resize: 'vertical',
        minHeight: 80,
    },
    ({ hasError }) => ({
        borderColor: hasError ? colors.red : colors.mediumGray,
        backgroundColor: hasError ? '#FFFCFC' : colors.white,
    })
);

export interface InputProps {
    label?: string | React.ReactNode;
    value?: string;
    placeholder?: string;
    multiline?: boolean;
    disabled?: boolean;
    error?: string | boolean;
    maxLength?: number;
    pattern?: string;
    name?: string;
    onChange?: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    innerRef?: (inputElement: HTMLInputElement) => void;
    type?: string;
}

export interface InputState {
    id: string;
    isDirty: boolean;
}

export class Input extends React.Component<InputProps, InputState> {
    static displayName = 'Collector.Input';

    state: InputState = {
        id: uniqid(),
        isDirty: false,
    };

    makeDirty = () => {
        this.setState({ isDirty: true });
    };

    render() {
        const { label, error, multiline, ...rest } = this.props;
        const InputElement = multiline ? Textarea : InputField;
        const showError = Boolean(this.state.isDirty && error);

        return (
            <InputContainer>
                {label && (
                    <Label htmlFor={this.state.id} error={showError}>
                        {label}
                    </Label>
                )}
                <InputElement id={this.state.id} onBlur={this.makeDirty} hasError={showError} aria-invalid={showError} {...rest} />

                <Collapse isOpen={showError && typeof error === 'string'} className={`${inputErrorTransition}`}>
                    <InputError>{error}</InputError>
                </Collapse>
            </InputContainer>
        );
    }
}
