import React from 'react';
import 'tippy.js/dist/tippy.css';
import { Color, IconVariant, MarginTop, Size } from '../../../lib';
export declare const IconVariants: {
    [key: string]: IconVariant;
};
export interface IconProps {
    Icon: React.ElementType;
    variant?: IconVariant;
    tooltip?: string;
    size?: Size;
    color?: Color;
    marginTop?: MarginTop;
}
declare const Icon: ({ Icon, variant, tooltip, size, color, marginTop, }: IconProps) => JSX.Element;
export default Icon;
