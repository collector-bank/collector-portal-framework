var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var calendar = require('./calendar.svg');
var style = css({
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
var DatePicker = /** @class */ (function (_super) {
    __extends(DatePicker, _super);
    function DatePicker() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.handleChange = function (momentObject) {
            var date = momentObject ? new Date(momentObject.format()) : null;
            _this.props.onChange(date);
        };
        return _this;
    }
    DatePicker.prototype.componentWillMount = function () {
        moment.locale(this.props.locale);
    };
    DatePicker.prototype.render = function () {
        var _a = this.props, label = _a.label, selectedDate = _a.selectedDate, minDate = _a.minDate, maxDate = _a.maxDate, optional = _a.optional;
        return (React.createElement(InputContainer, null,
            label && React.createElement(Label, { optional: optional }, label),
            React.createElement(ReactDatePicker, { selected: selectedDate ? moment(selectedDate) : undefined, minDate: minDate ? moment(minDate) : undefined, maxDate: maxDate ? moment(maxDate) : undefined, dateFormat: "YYYY-MM-DD", useWeekdaysShort: true, calendarClassName: "" + style, onChange: this.handleChange, customInput: React.createElement(InputField, { css: {
                        background: "url(" + calendar + ") no-repeat 95% center",
                        backgroundPosition: "calc(100% - 12px) 50%",
                        backgroundSize: '24px 24px',
                    } }) })));
    };
    DatePicker.displayName = 'Collector.DatePicker';
    return DatePicker;
}(React.Component));
export { DatePicker };
//# sourceMappingURL=index.js.map