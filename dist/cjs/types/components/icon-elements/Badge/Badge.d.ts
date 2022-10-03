import React from 'react';
import 'tippy.js/dist/tippy.css';
import { Color, MarginTop, Size } from '../../../lib';
export interface BadgeProps {
    text: string;
    color?: Color;
    size?: Size;
    Icon?: React.ElementType;
    tooltip?: string;
    marginTop?: MarginTop;
}
declare const Badge: ({ text, color, Icon, size, tooltip, marginTop, }: BadgeProps) => JSX.Element;
export default Badge;
