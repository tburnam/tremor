import React from 'react';
import { Color, HorizontalPosition, MarginTop, Size } from '../../../lib/inputTypes';
export interface ButtonInlineProps {
    text: string;
    Icon?: React.ElementType;
    iconPosition?: HorizontalPosition;
    size?: Size;
    color?: Color;
    handleClick?: {
        (): void;
    };
    marginTop?: MarginTop;
}
declare const ButtonInline: ({ text, Icon, iconPosition, handleClick, size, color, marginTop, }: ButtonInlineProps) => JSX.Element;
export default ButtonInline;
