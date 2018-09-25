import * as React from 'react';
import Collapse from 'react-css-collapse';
import glamorous from 'glamorous';
import { css } from 'glamor';
import * as uniqid from 'uniqid';
import { Theme } from '../../../themes';
import { Label } from '../Label';

const inputErrorTransition = css({
    transition: 'height 150ms',
});

export const InputContainer: any = glamorous.div({
    maxWidth: 500,
    marginBottom: '1.25em',
});

export const InputField: any = glamorous.input<{ hasError?: boolean, theme: Theme }>(
    {
        font: 'inherit',
        color: 'inherit',
        width: '100%',
        border: '1px solid',
        padding: 11, // To make it 12 pixels when accounting for the 1px border above
        boxSizing: 'border-box',
        appearance: 'none',
        transition: 'border-bottom-left-radius 150ms, border-bottom-right-radius 150ms',
    
        '&:disabled': {
            opacity: 1,
        },
    },
    ({ hasError, theme }) => ({
        borderRadius: theme.borderRadius.small,
        borderColor: theme.colors.mediumGray,
        borderBottomLeftRadius: hasError ? 0 : theme.borderRadius.small,
        borderBottomRightRadius: hasError ? 0 : theme.borderRadius.small,
        borderBottomColor: hasError ? theme.colors.red : theme.colors.mediumGray,
    
        '&:disabled': {
            background: theme.colors.offWhite,
            borderColor: theme.colors.lightGray,
        },
    })
);

const Textarea = glamorous.textarea<{ hasError?: boolean, theme: Theme }>(
    {
        font: 'inherit',
        color: 'inherit',
        width: '100%',
        border: '1px solid',
        padding: 11, // To make it 12 pixels when accounting for the 1px border above
        boxSizing: 'border-box',
        appearance: 'none',
        transition: 'border-bottom-left-radius 150ms, border-bottom-right-radius 150ms',
        resize: 'vertical',
        minHeight: 80,
    
        '&:disabled': {
            opacity: 1,
        },
    },
    ({ hasError, theme }) => ({
        borderRadius: theme.borderRadius.small,
        borderColor: hasError ? theme.colors.red : theme.colors.mediumGray,
        backgroundColor: hasError ? '#FFFCFC' : theme.colors.white,
    
        '&:disabled': {
            background: theme.colors.offWhite,
            borderColor: theme.colors.lightGray,
        },
    })
);

export const InputError: any = glamorous.div<{ theme: Theme }>(
    {
        fontWeight: 500,
        padding: 8,
        paddingLeft: 12,
        minHeight: 40,
        boxSizing: 'border-box',
    },
    ({ theme }) => ({
        background: theme.colors.red,
        color: theme.colors.white,
        borderBottomLeftRadius: theme.borderRadius.small,
        borderBottomRightRadius: theme.borderRadius.small,
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
    rows?: number;
    onChange?: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FormEvent<HTMLInputElement> | undefined) => void;
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

    makeDirty = (event: React.FormEvent<HTMLInputElement> | undefined) => {
        if (this.props.onBlur) {
            this.props.onBlur(event);
        }

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
