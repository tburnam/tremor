import React from 'react';
import { MarginTop, MaxWidth } from '../../../lib/inputTypes';
export interface MultiSelectBoxProps {
    defaultValues?: any[];
    handleSelect?: {
        (value: any): void;
    };
    placeholder?: string;
    marginTop?: MarginTop;
    maxWidth?: MaxWidth;
    children: React.ReactElement[] | React.ReactElement;
}
declare const MultiSelectBox: ({ defaultValues, handleSelect, placeholder, marginTop, maxWidth, children, }: MultiSelectBoxProps) => JSX.Element;
export default MultiSelectBox;
