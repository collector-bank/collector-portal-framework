import React from 'react';
import ReactDatePicker, { registerLocale, setDefaultLocale } from 'react-datepicker';
import Collapse from 'react-css-collapse';
import { css } from 'glamor';
import { Label, InputError } from '../';
import { InputContainer, InputField } from '../Input';
import styled from '../../../';
import { Theme } from '../../../themes';

import sv from 'date-fns/locale/sv';
import nb from 'date-fns/locale/nb';
import fi from 'date-fns/locale/fi';
import 'react-datepicker/dist/react-datepicker.css';
import { withTheme } from 'emotion-theming';

registerLocale('sv', sv);
registerLocale('nb', nb);
registerLocale('fi', fi);
setDefaultLocale('sv');

const calendar =
    "'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 16 16%22%3E%3Cpath fill=%22%23111%22 d=%22M13.504 1.463h-1.223V.502a.5.5 0 0 0-1 0v.961H4.742V.502a.5.5 0 0 0-1 0v.961H2.52c-.758 0-1.374.616-1.374 1.374v11.339a.5.5 0 0 0 .5.5h12.732a.5.5 0 0 0 .5-.5V2.837c0-.758-.616-1.374-1.374-1.374zm-10.984 1h10.984c.206 0 .374.168.374.374v1.857H2.146V2.837c0-.206.168-.374.374-.374zm-.374 11.213V5.694h11.732v7.982H2.146z%22/%3E%3Cpath fill=%22%23111%22 d=%22M12.117 8.904h-2.5a.5.5 0 0 0-.5.5v2.5a.5.5 0 0 0 .5.5h2.5a.5.5 0 0 0 .5-.5v-2.5a.5.5 0 0 0-.5-.5zm-.5 2.5h-1.5v-1.5h1.5v1.5z%22/%3E%3C/svg%3E'";

const inputErrorTransition = css({
    transition: 'height 150ms',
});

const InputFieldWithIcon = styled(InputField)<{ hasError: boolean }>({
    background: `url(${calendar}) no-repeat 95% center`,
    backgroundPosition: `calc(100% - 12px) 50%`, // doesn't work in IE11, that's why we need the 95% fallback above
    backgroundSize: '24px 24px', // a single value here doesn't work in IE11
});

const style = (theme: Theme) =>
    css({
        '.react-datepicker': {
            font: theme.fonts.desktop.small,
            borderColor: theme.colors.mediumGray,
            borderRadius: theme.borderRadius.small,

            '& .react-datepicker__current-month, & .react-datepicker__day-name': {
                textTransform: 'capitalize',
            },

            '& .react-datepicker__current-month': {
                font: theme.fonts.desktop.medium,
                fontWeight: 500,
            },

            '& .react-datepicker__navigation': {
                top: 14,
            },

            '& .react-datepicker__day-name, & .react-datepicker__day': {
                width: 32,
                lineHeight: '32px',
            },

            '& .react-datepicker__day--selected': {
                backgroundColor: theme.colors.purple,
            },

            '& .react-datepicker__day:not(.react-datepicker__day--selected):not(.react-datepicker__day--disabled):hover': {
                backgroundColor: theme.colors.offWhite,
            },

            '& .react-datepicker__day-name': {
                color: theme.colors.darkGray,
            },

            '& .react-datepicker__header': {
                backgroundColor: theme.colors.offWhite,
                borderColor: theme.colors.mediumGray,
                borderTopLeftRadius: theme.borderRadius.small,
                borderTopRightRadius: theme.borderRadius.small,
            },

            '.react-datepicker-popper[data-placement^="bottom"] & .react-datepicker__triangle': {
                borderBottomColor: theme.colors.offWhite,
            },

            '.react-datepicker-popper[data-placement^="bottom"] & .react-datepicker__triangle:before': {
                borderBottomColor: theme.colors.mediumGray,
            },

            '& .react-datepicker__navigation--previous': {
                borderRightColor: theme.colors.mediumGray,
            },

            '& .react-datepicker__navigation--next': {
                borderLeftColor: theme.colors.mediumGray,
            },
        },
    });

const inputWidth = 220;
css.global('.react-datepicker__input-container', {
    width: inputWidth,
});

export interface DatePickerProps {
    locale: 'sv' | 'fi' | 'nb';
    label?: string;
    selectedDate?: Date;
    minDate?: Date;
    maxDate?: Date;
    invalidMessage?: string;
    onChange: (date: Date | null) => void;
}

export interface State {
    showError: boolean;
    isValid: boolean;
}

class DatePicker_ extends React.Component<DatePickerProps & { theme: Theme }, State> {
    static displayName = 'Collector.DatePicker';

    state: State = {
        showError: false,
        isValid: true,
    };

    /*
     * Here we use the fact that there are two onChange handlers, one of which
     * is used to set a valid date only, to handle an invalid state.
     * We set the isValid state to true whenever a valid date is set,
     * which is the onChange, but we always set isValid to false otherwise.
     * Since onChange is always executed later, we are able to ensure that
     * isValid is only set to valid if a proper onChange has been run.
     * Then, onBlur, if we did not recieve an onChange event, we display an error message.
     */
    private handleChange = (date: Date) => {
        this.setState({ isValid: true }, () => {
            this.props.onChange(date);
        });
    };

    private handleChangeRaw = () => {
        this.setState({ isValid: false });
    };

    private handleBlur = () => {
        this.setState(
            prevState => ({ showError: !prevState.isValid }),
            () => {
                if (!this.state.isValid) {
                    this.props.onChange(null);
                }
            }
        );
    };

    render() {
        const { label, locale, selectedDate, minDate, maxDate, invalidMessage, onChange, ...rest } = this.props;
        const showError = Boolean(this.state.showError && !this.state.isValid && invalidMessage);
        const calendarClassName = `${style(this.props.theme)}`;

        return (
            <InputContainer {...rest}>
                {label && <Label>{label}</Label>}
                <ReactDatePicker
                    locale={locale}
                    selected={selectedDate}
                    minDate={minDate}
                    maxDate={maxDate}
                    dateFormat="yyyy-MM-dd"
                    useWeekdaysShort={true}
                    calendarClassName={calendarClassName}
                    onChange={this.handleChange}
                    onChangeRaw={this.handleChangeRaw}
                    onBlur={this.handleBlur}
                    customInput={<InputFieldWithIcon hasError={showError} />}
                />

                <Collapse isOpen={showError} className={`${inputErrorTransition}`}>
                    <InputError style={{ maxWidth: inputWidth }}>{invalidMessage}</InputError>
                </Collapse>
            </InputContainer>
        );
    }
}

export const DatePicker = withTheme(DatePicker_ as React.ComponentClass<DatePickerProps>);
