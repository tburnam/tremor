import React from 'react';
export interface SelectBoxItemProps {
    value: any;
    text: string;
    Icon?: React.ElementType;
    privateProps?: {
        handleSelectBoxItemClick: (selectedItem: any) => void;
        isActive: boolean;
    };
}
declare const SelectBoxItem: ({ value, text, Icon, privateProps, }: SelectBoxItemProps) => JSX.Element;
export default SelectBoxItem;
