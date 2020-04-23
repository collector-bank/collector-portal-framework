import React, { useState, forwardRef } from 'react';
import Collapse from 'react-css-collapse';
import { ClassNames, CSSObject } from '@emotion/core';
import uniqid from 'uniqid';
import { Theme } from '../../../themes';
import { Label } from '../Label';
import { Description } from './Description';
import styled from '../../../';


const hiddenContent = (
    <svg fill={'#111'} height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M12,15 C13.6568542,15 15,13.6568542 15,12 C15,10.3431458 13.6568542,9 12,9 C10.3431458,9 9,10.3431458 9,12 C9,13.6568542 10.3431458,15 12,15 Z M23.205,11.745 C21.4020228,7.08127593 16.9965732,3.93789621 12,3.75 C7.00342679,3.93789621 2.59797716,7.08127593 0.795,11.745 C0.735425436,11.9097807 0.735425436,12.0902193 0.795,12.255 C2.59797716,16.9187241 7.00342679,20.0621038 12,20.25 C16.9965732,20.0621038 21.4020228,16.9187241 23.205,12.255 C23.2645746,12.0902193 23.2645746,11.9097807 23.205,11.745 Z M12,16.875 C9.30761184,16.875 7.125,14.6923882 7.125,12 C7.125,9.30761184 9.30761184,7.125 12,7.125 C14.6923882,7.125 16.875,9.30761184 16.875,12 C16.87087,14.6906756 14.6906756,16.87087 12,16.875 Z"></path>
    </svg>
);

const showContent = (
    <svg fill={'#111'} height="24" width="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M23.205,10.745 C22.3482983,8.50311971 20.8544423,6.56084625 18.9075,5.1575 L22.5,1.5575 L21.4425,0.5 L1.5,20.4425 L2.5575,21.5 L6.3825,17.6825 C8.08981853,18.677557 10.0241442,19.2173088 12,19.25 C16.9965732,19.0621038 21.4020228,15.9187241 23.205,11.255 C23.2645746,11.0902193 23.2645746,10.9097807 23.205,10.745 Z M12,15.875 C10.9662021,15.8745258 9.95965929,15.5433916 9.1275,14.93 L10.5,13.5725 C11.6689611,14.2129868 13.1203338,14.0053768 14.0628553,13.0628553 C15.0053768,12.1203338 15.2129868,10.6689611 14.5725,9.5 L15.93,8.1425 C17.0073399,9.62220029 17.1635097,11.5811904 16.3342089,13.2128872 C15.5049081,14.844584 13.8303472,15.8731155 12,15.875 Z M3.3975,15.3575 L7.1475,11.6075 C7.12799769,11.4056228 7.1204845,11.2027667 7.125,11 C7.12912998,8.30932439 9.30932439,6.12912998 12,6.125 C12.1980583,6.12605178 12.3958895,6.13857274 12.5925,6.1625 L15.4275,3.335 C14.3241279,2.95603001 13.166609,2.75846661 12,2.75 C7.00342679,2.93789621 2.59797716,6.08127593 0.795,10.745 C0.735425436,10.9097807 0.735425436,11.0902193 0.795,11.255 C1.37101948,12.7869825 2.25699635,14.1836089 3.3975,15.3575 Z" id="Fill"></path>
    </svg>
);

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
    marginRight: 'auto',
    padding: '7px 11px', // To make it 12 pixels when accounting for the 1px border above
    boxSizing: 'border-box',
    appearance: 'none',
    boxShadow: 'none',
    transition: 'border-bottom-left-radius 150ms, border-bottom-right-radius 150ms',
    borderRadius: theme.borderRadius.small,
    borderColor: getBorderColor(indicateError, showAlertMessage, theme),
    borderBottomLeftRadius: showAlertMessage ? 0 : theme.borderRadius.small,
    borderBottomRightRadius: showAlertMessage ? 0 : theme.borderRadius.small,
    borderBottomColor: indicateError ? theme.colors.red : theme.colors.mediumGray,

    '&::-ms-reveal': {
        display: 'none', //to prevent browser from asking to save password
    },

    '&::-ms-clear': {
        display: 'none', //to prevent browser from asking to save password
    },

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
    hide?: boolean;
}

export interface InputState {
    id: string;
    isDirty: boolean;
}

const IconSpan = styled.span<{ show?: boolean }>(({ show }) => ({
    height: 24,
    position: 'absolute',
    cursor: 'pointer',
    alignSelf: 'center',
    zIndex: 1,

    '> svg': {
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        width: 24,
        height: 24,
        marginRight: 8,
        marginTop: show ? 1 : 0,
    },
}));

const Field = styled.div({
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: 'auto',
    userSelect: 'none',
});

export const Input = forwardRef<HTMLInputElement, InputProps>(({ label, error, warning, multiline, description, hide, onBlur, ...rest }, ref) => {
    const id = uniqid();
    const [isDirty, setIsDirty] = useState(false);
    const [show, setShow] = useState(false);
    Input.displayName = 'Collector.Input';

    const makeDirty = (event: React.FormEvent<HTMLInputElement> | undefined) => {
        if (onBlur) {
            onBlur(event);
        }

        setIsDirty(true);
    };

    const InputElement = multiline ? Textarea : InputField;
    const indicateError = Boolean(isDirty && error);
    const showErrorMessage = indicateError && typeof error !== 'boolean';
    const showWarningMessage = Boolean(isDirty && warning);

    return (
        <ClassNames>
            {({ css }) => (
                <InputContainer>
                    {label && (
                        <InputLabel htmlFor={id} error={indicateError}>
                            {label}

                            {description && <Description description={description} />}
                        </InputLabel>
                    )}

                    {hide ? (
                        <Field>
                            <IconSpan show={show} onClick={show ? () => setShow(false) : () => setShow(true)}>{show ? showContent : hiddenContent}</IconSpan>
                            <InputElement
                                id={id}
                                hasError={indicateError}
                                aria-invalid={indicateError}
                                showAlertMessage={showErrorMessage || showWarningMessage}
                                ref={ref}
                                {...rest}
                                onBlur={makeDirty}
                                type={show ? null : 'Password'}
                                onfocus="$(this).removeAttr('readonly');"
                                readonly
                            />
                        </Field>
                    ):(
                        <InputElement
                            id={id}
                            hasError={indicateError}
                            aria-invalid={indicateError}
                            showAlertMessage={showErrorMessage || showWarningMessage}
                            ref={ref}
                            {...rest}
                            onBlur={makeDirty}
                        />
                    )} 

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
});
