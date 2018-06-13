import * as React from 'react';
import ReactDatePicker from 'react-datepicker';
import Collapse from 'react-css-collapse';
import * as moment from 'moment';
import { css } from 'glamor';
import { Label, InputError } from '../';
import { InputContainer, InputField } from '../Input';
import { borderRadius, colors, fonts } from '../../../theme';

import 'moment/locale/sv';
import 'moment/locale/fi';
import 'react-datepicker/dist/react-datepicker.css';

const calendar = require('./calendar.svg');

const inputErrorTransition = css({
    transition: 'height 150ms',
});

const style = css({
    '.react-datepicker': {
        font: fonts.desktop.small,
        borderColor: colors.mediumGray,
        borderRadius: borderRadius.small,

        '& .react-datepicker__current-month, & .react-datepicker__day-name': {
            textTransform: 'capitalize',
        },

        '& .react-datepicker__current-month': {
            font: fonts.desktop.medium,
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
            backgroundColor: colors.purple,
        },

        '& .react-datepicker__day:not(.react-datepicker__day--selected):not(.react-datepicker__day--disabled):hover': {
            backgroundColor: colors.offWhite,
        },

        '& .react-datepicker__day-name': {
            color: colors.darkGray,
        },

        '& .react-datepicker__header': {
            backgroundColor: colors.offWhite,
            borderColor: colors.mediumGray,
            borderTopLeftRadius: borderRadius.small,
            borderTopRightRadius: borderRadius.small,
        },

        '.react-datepicker-popper[data-placement^="bottom"] & .react-datepicker__triangle': {
            borderBottomColor: colors.offWhite,
        },

        '.react-datepicker-popper[data-placement^="bottom"] & .react-datepicker__triangle:before': {
            borderBottomColor: colors.mediumGray,
        },

        '& .react-datepicker__navigation--previous': {
            borderRightColor: colors.mediumGray,
        },

        '& .react-datepicker__navigation--next': {
            borderLeftColor: colors.mediumGray,
        },
    },
});

const inputWidth = 220;
css.global('.react-datepicker__input-container', {
    width: inputWidth,
});

export interface DatePickerProps {
    locale: 'sv' | 'fi';
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

export class DatePicker extends React.Component<DatePickerProps, State> {
    static displayName = 'Collector.DatePicker';

    state: State = {
        showError: false,
        isValid: true,
    };

    componentWillMount() {
        moment.locale(this.props.locale);
    }

    /*
    * Here we use the fact that there are two onChange handlers, one of which
    * is used to set a valid date only, to handle an invalid state.
    * We set the isValid state to true whenever a valid date is set,
    * which is the onChange, but we always set isValid to false otherwise.
    * Since onChange is always executed later, we are able to ensure that
    * isValid is only set to valid if a proper onChange has been run.
    * Then, onBlur, if we did not recieve an onChange event, we display an error message.
    */
    private handleChange = (momentObject: moment.Moment) => {
        const date = momentObject ? new Date(momentObject.format()) : null;

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
        const { label, selectedDate, minDate, maxDate, invalidMessage } = this.props;
        const showError = Boolean(this.state.showError && !this.state.isValid && invalidMessage);

        return (
            <InputContainer>
                {label && <Label>{label}</Label>}
                <ReactDatePicker
                    selected={selectedDate ? moment(selectedDate) : undefined}
                    minDate={minDate ? moment(minDate) : undefined}
                    maxDate={maxDate ? moment(maxDate) : undefined}
                    dateFormat="YYYY-MM-DD"
                    useWeekdaysShort={true}
                    calendarClassName={`${style}`}
                    onChange={this.handleChange}
                    onChangeRaw={this.handleChangeRaw}
                    onBlur={this.handleBlur}
                    customInput={
                        <InputField
                            hasError={showError}
                            css={{
                                background: `url(${calendar}) no-repeat 95% center`,
                                backgroundPosition: `calc(100% - 12px) 50%`, // doesn't work in IE11, that's why we need the 95% fallback above
                                backgroundSize: '24px 24px', // a single value here doesn't work in IE11
                            }}
                        />
                    }
                />

                <Collapse isOpen={showError} className={`${inputErrorTransition}`}>
                    <InputError style={{ maxWidth: inputWidth }}>{invalidMessage}</InputError>
                </Collapse>
            </InputContainer>
        );
    }
}
