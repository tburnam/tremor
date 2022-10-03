/// <reference types="react" />
import { Color, MarginTop, MaxWidth } from '../../../lib/inputTypes';
export interface DatepickerProps {
    handleSelect?: {
        (selectedStartDay: Date, selectedEndDay: Date): void;
    };
    enableRelativeDates?: boolean;
    defaultStartDate?: Date | null;
    defaultEndDate?: Date | null;
    minDate?: Date | null;
    maxDate?: Date | null;
    placeholder?: string;
    color?: Color;
    marginTop?: MarginTop;
    maxWidth?: MaxWidth;
}
declare const Datepicker: ({ handleSelect, enableRelativeDates, defaultStartDate, defaultEndDate, minDate, maxDate, placeholder, color, marginTop, maxWidth, }: DatepickerProps) => JSX.Element;
export default Datepicker;
