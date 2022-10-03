import React from 'react';
import { Color, HorizontalPosition, MarginTop, MaxWidth, VerticalPosition } from '../../../lib';
export interface CardProps {
    hFull?: boolean;
    maxWidth?: MaxWidth;
    shadow?: boolean;
    decoration?: HorizontalPosition | VerticalPosition | '';
    decorationColor?: Color;
    marginTop?: MarginTop;
    children: React.ReactNode;
}
declare const Card: ({ hFull, maxWidth, shadow, decoration, decorationColor, marginTop, children }: CardProps) => JSX.Element;
export default Card;
