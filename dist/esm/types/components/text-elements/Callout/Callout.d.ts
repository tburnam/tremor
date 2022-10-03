import React from 'react';
import { Color, Height, MarginTop } from '../../../lib';
export interface CalloutProps {
    title: string;
    text: string;
    Icon?: React.ElementType;
    color?: Color;
    height?: Height | '';
    marginTop?: MarginTop;
}
declare const Callout: ({ title, text, Icon, color, height, marginTop }: CalloutProps) => JSX.Element;
export default Callout;
