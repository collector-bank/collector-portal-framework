import * as React from 'react';
import ReactDatePicker from 'react-datepicker';
import * as moment from 'moment';
import { css } from 'glamor';
import { Label } from '../';
import { InputContainer, InputField } from '../Input';
import { borderRadius, colors, fonts } from '../../../theme';

import 'moment/locale/sv';
import 'moment/locale/fi';
import 'react-datepicker/dist/react-datepicker.css';

const calendar = require('./calendar.svg');

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
    }
});

css.global('.react-datepicker__input-container', {
    width: 220,
});

export interface DatePickerProps {
    locale: 'sv' | 'fi';
    label?: string;
    selectedDate?: Date;
    minDate?: Date;
    maxDate?: Date;
    onChange: (date: Date | null) => void;
}

export class DatePicker extends React.Component<DatePickerProps, {}> {
    static displayName = 'Collector.DatePicker';

    componentWillMount() {
        moment.locale(this.props.locale);
    }

    private handleChange = (momentObject: moment.Moment) => {
        const date = momentObject ? new Date(momentObject.format()) : null;
        this.props.onChange(date);
    }

    render() {
        const { label, selectedDate, minDate, maxDate } = this.props;

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
                    customInput={
                        <InputField
                            css={{
                                background: `url(${calendar}) no-repeat 95% center`,
                                backgroundPosition: `calc(100% - 12px) 50%`, // doesn't work in IE11, that's why we need the 95% fallback above
                                backgroundSize: '24px 24px', // a single value here doesn't work in IE11
                            }}
                        />
                    }
                />
            </InputContainer>
        );
    }
}
