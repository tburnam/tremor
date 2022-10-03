import React from 'react';
import { Color } from '../../../lib';
export declare const relativeFilterOptions: {
    value: string;
    name: string;
}[];
export declare const colStartClasses: string[];
export declare const previousMonth: (firstDayCurrentMonth: Date, setCurrentMonth: React.Dispatch<React.SetStateAction<string>>) => void;
export declare const nextMonth: (firstDayCurrentMonth: Date, setCurrentMonth: React.Dispatch<React.SetStateAction<string>>) => void;
export declare const displaySelected: (selectedStartDay: Date | null, selectedEndDay: Date | null) => string | undefined;
export declare const getDayBgColorClassName: (day: Date, selectedStartDay: Date | null, selectedEndDay: Date | null, hoveredDay: Date | null, color: Color, isDayDisabled?: boolean) => string;
export declare const getDayTextClassNames: (day: Date, selectedStartDay: Date | null, selectedEndDay: Date | null, hoveredDay: Date | null, color: Color, isDayDisabled?: boolean) => string;
export declare const getDayHoverBgColorClassName: (day: Date, selectedStartDay: Date | null, selectedEndDay: Date | null, isDayDisabled?: boolean) => string;
export declare const getDayRoundedClassName: (day: Date, selectedStartDay: Date | null, selectedEndDay: Date | null, hoveredDay: Date | null) => string;
