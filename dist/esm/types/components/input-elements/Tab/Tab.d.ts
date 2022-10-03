import React from 'react';
import { Color } from '../../../lib';
export interface TabProps {
    text: string;
    value: any;
    privateProps?: {
        color: Color;
        isActive: boolean;
        setSelectedTab: React.Dispatch<React.SetStateAction<string>>;
    };
}
declare const Tab: ({ text, value, privateProps, }: TabProps) => JSX.Element;
export default Tab;
