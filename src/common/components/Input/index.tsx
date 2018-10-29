import { css } from 'glamor';
import glamorous, { CSSProperties } from 'glamorous';
import * as React from 'react';
import Collapse from 'react-css-collapse';
import * as uniqid from 'uniqid';
import { Theme } from '../../../themes';
import { Label } from '../Label';
import { Description } from './Description';

const inputErrorTransition = css({
    transition: 'height 150ms',
});

const InputLabel = glamorous(Label)({
    display: 'flex',
    alignItems: 'center',
});

export const InputContainer: any = glamorous.div({
    maxWidth: 500,
    marginBottom: '1.25em',
});

interface ErrorProps {
    hasError: boolean;
    theme: Theme;
    hasErrorNode: boolean;
}

const getBorderColor = (hasError: boolean, hasErrorNode: boolean, theme: Theme) => {
    if (hasError) {
        return hasErrorNode ? theme.colors.mediumGray : theme.colors.red;
    }

    return theme.colors.mediumGray;
};

const commonStyles = (hasError: boolean, theme: Theme, hasErrorNode: boolean): CSSProperties => ({
    font: 'inherit',
    color: 'inherit',
    width: '100%',
    border: '1px solid',
    padding: 11, // To make it 12 pixels when accounting for the 1px border above
    boxSizing: 'border-box',
    appearance: 'none',
    transition: 'border-bottom-left-radius 150ms, border-bottom-right-radius 150ms',
    borderRadius: theme.borderRadius.small,
    borderColor: getBorderColor(hasError, hasErrorNode, theme),
    borderBottomLeftRadius: hasErrorNode ? 0 : theme.borderRadius.small,
    borderBottomRightRadius: hasErrorNode ? 0 : theme.borderRadius.small,
    borderBottomColor: hasError ? theme.colors.red : theme.colors.mediumGray,

    '&:disabled': {
        opacity: 1,
        background: theme.colors.offWhite,
        borderColor: theme.colors.lightGray,
    },
});

export const InputField: any = glamorous.input<ErrorProps>(({ hasError, theme, hasErrorNode }) => ({
    ...commonStyles(hasError, theme, hasErrorNode),
}));

const Textarea = glamorous.textarea<ErrorProps>(({ hasError, theme, hasErrorNode }) => ({
    ...commonStyles(hasError, theme, hasErrorNode),

    resize: 'vertical',
    minHeight: 80,
    marginBottom: hasErrorNode ? -6 : undefined,
}));

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
    label?: React.ReactNode;
    value?: string;
    placeholder?: string;
    multiline?: boolean;
    disabled?: boolean;
    error?: boolean | React.ReactNode;
    maxLength?: number;
    pattern?: string;
    name?: string;
    rows?: number;
    onChange?: (event: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onBlur?: (event: React.FormEvent<HTMLInputElement> | undefined) => void;
    innerRef?: (inputElement: HTMLInputElement) => void;
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
        const { label, error, multiline, description, ...rest } = this.props;
        const InputElement = multiline ? Textarea : InputField;
        const showError = Boolean(this.state.isDirty && error);
        const hasErrorNode = showError && typeof error !== 'boolean';

        return (
            <InputContainer>
                {label && (
                    <InputLabel htmlFor={this.state.id} error={showError}>
                        {label}

                        {description && <Description description={description} />}
                    </InputLabel>
                )}

                <InputElement
                    id={this.state.id}
                    onBlur={this.makeDirty}
                    hasError={showError}
                    aria-invalid={showError}
                    hasErrorNode={hasErrorNode}
                    {...rest}
                />

                <Collapse isOpen={hasErrorNode} className={`${inputErrorTransition}`}>
                    <InputError>{error}</InputError>
                </Collapse>
            </InputContainer>
        );
    }
}
