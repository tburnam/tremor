import React from 'react';
import { Color } from '../../../lib';
export interface ToggleItemProps {
    value: any;
    text: string;
    Icon?: React.ElementType;
    privateProps?: {
        color: Color;
        setActiveToggleItem: React.Dispatch<React.SetStateAction<any>>;
        isActive: boolean;
    };
}
declare const ToggleItem: ({ value, text, Icon, privateProps, }: ToggleItemProps) => JSX.Element;
export default ToggleItem;
