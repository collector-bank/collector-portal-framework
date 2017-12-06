/// <reference types="react" />
import * as React from 'react';
import 'moment/locale/sv';
import 'moment/locale/fi';
import 'react-datepicker/dist/react-datepicker.css';
export interface DatePickerProps {
    locale: 'sv' | 'fi';
    label?: string;
    selectedDate?: Date;
    minDate?: Date;
    maxDate?: Date;
    optional?: boolean;
    onChange: (date: Date | null) => void;
}
export declare class DatePicker extends React.Component<DatePickerProps, {}> {
    static displayName: string;
    componentWillMount(): void;
    private handleChange;
    render(): JSX.Element;
}
