import React from 'react';
import { Color, Height, MarginTop, TextAlignment } from '../../../lib/inputTypes';
export interface TextProps {
    color?: Color;
    textAlignment?: TextAlignment;
    truncate?: boolean;
    height?: Height | '';
    marginTop?: MarginTop;
    children: React.ReactNode;
}
declare const Text: ({ color, textAlignment, truncate, height, marginTop, children }: TextProps) => JSX.Element;
export default Text;
