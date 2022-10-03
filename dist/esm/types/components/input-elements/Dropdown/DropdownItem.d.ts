import React from 'react';
export interface DropdownItemProps {
    value: any;
    text: string;
    Icon?: React.ElementType;
    privateProps?: {
        isActive: boolean;
        handleDropdownItemClick: (value: any) => void;
    };
}
declare const DropdownItem: ({ value, text, Icon, privateProps, }: DropdownItemProps) => JSX.Element;
export default DropdownItem;
