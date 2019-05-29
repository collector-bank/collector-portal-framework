import React from 'react';
import Collapse from 'react-css-collapse';
import { ClassNames, CSSObject } from '@emotion/core';
import uniqid from 'uniqid';
import { Theme } from '../../../themes';
import { Label } from '../Label';
import { Description } from './Description';
import styled from '../../../';

const InputLabel = styled(Label)<React.LabelHTMLAttributes<HTMLLabelElement>>({
    display: 'flex',
    alignItems: 'center',
});

export const InputContainer: any = styled.div({
    maxWidth: 500,
    marginBottom: '1.25em',
});

interface ErrorProps {
    indicateError: boolean;
    theme: Theme;
    showAlertMessage: boolean;
}

const getBorderColor = (indicateError: boolean, showAlertMessage: boolean, theme: Theme) => {
    if (indicateError) {
        return showAlertMessage ? theme.colors.mediumGray : theme.colors.red;
    }

    return theme.colors.mediumGray;
};

export const InputField: any = styled.input<ErrorProps>(({ indicateError, theme, showAlertMessage }) => ({
    font: 'inherit',
    color: 'inherit',
    width: '100%',
    border: '1px solid',
    padding: 11, // To make it 12 pixels when accounting for the 1px border above
    boxSizing: 'border-box',
    appearance: 'none',
    boxShadow: 'none',
    transition: 'border-bottom-left-radius 150ms, border-bottom-right-radius 150ms',
    borderRadius: theme.borderRadius.small,
    borderColor: getBorderColor(indicateError, showAlertMessage, theme),
    borderBottomLeftRadius: showAlertMessage ? 0 : theme.borderRadius.small,
    borderBottomRightRadius: showAlertMessage ? 0 : theme.borderRadius.small,
    borderBottomColor: indicateError ? theme.colors.red : theme.colors.mediumGray,

    '&:disabled': {
        opacity: 1,
        background: theme.colors.offWhite,
        borderColor: theme.colors.lightGray,
    },
}));

const Textarea = styled(InputField.withComponent('textarea'))<ErrorProps>(({ showAlertMessage }) => ({
    resize: 'vertical',
    minHeight: 80,
    marginBottom: showAlertMessage ? -6 : undefined,
}));

const alertStyle = (theme: Theme): CSSObject => ({
    fontWeight: 500,
    padding: 8,
    paddingLeft: 12,
    minHeight: 40,
    boxSizing: 'border-box',
    borderBottomLeftRadius: theme.borderRadius.small,
    borderBottomRightRadius: theme.borderRadius.small,
});

export const InputError: any = styled.div(({ theme }) => ({
    ...alertStyle(theme),

    background: theme.colors.red,
    color: theme.colors.white,
}));

export const InputWarning: any = styled.div(({ theme }) => ({
    ...alertStyle(theme),

    background: theme.colors.yellow,
    color: theme.colors.black,
}));

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string | React.ReactNode;
    value?: string;
    placeholder?: string;
    multiline?: boolean;
    disabled?: boolean;
    error?: string | boolean | React.ReactNode;
    warning?: React.ReactNode;
    maxLength?: number;
    pattern?: string;
    name?: string;
    rows?: number;
    onChange?: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FormEvent<HTMLInputElement> | undefined) => void;
    type?: string;
    description?: string;
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
        const { label, error, warning, multiline, description, ...rest } = this.props;
        const InputElement = multiline ? Textarea : InputField;
        const indicateError = Boolean(this.state.isDirty && error);
        const showErrorMessage = indicateError && typeof error !== 'boolean';
        const showWarningMessage = Boolean(this.state.isDirty && warning);

        return (
            <ClassNames>
                {({ css }) => (
                    <InputContainer>
                        {label && (
                            <InputLabel htmlFor={this.state.id} error={indicateError}>
                                {label}

                                {description && <Description description={description} />}
                            </InputLabel>
                        )}

                        <InputElement
                            id={this.state.id}
                            hasError={indicateError}
                            aria-invalid={indicateError}
                            showAlertMessage={showErrorMessage || showWarningMessage}
                            {...rest}
                            onBlur={this.makeDirty}
                        />

                        <Collapse isOpen={showErrorMessage} className={css({ transition: 'height 150ms' })}>
                            <InputError>{error}</InputError>
                        </Collapse>

                        <Collapse isOpen={showWarningMessage} className={css({ transition: 'height 150ms' })}>
                            <InputWarning>{warning}</InputWarning>
                        </Collapse>
                    </InputContainer>
                )}
            </ClassNames>
        );
    }
}
