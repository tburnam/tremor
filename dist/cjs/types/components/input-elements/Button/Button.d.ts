import React from 'react';
import { Color, HorizontalPosition, Importance, MarginTop, Size } from '../../../lib';
export interface ButtonProps {
    text: string;
    Icon?: React.ElementType;
    iconPosition?: HorizontalPosition;
    size?: Size;
    color?: Color;
    importance?: Importance;
    handleClick?: {
        (): void;
    };
    marginTop?: MarginTop;
}
declare const Button: ({ text, Icon, iconPosition, handleClick, size, color, importance, marginTop, }: ButtonProps) => JSX.Element;
export default Button;
