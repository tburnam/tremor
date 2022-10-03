/// <reference types="react" />
import { Color, MarginTop } from '../../../lib';
export interface LegendItemProps {
    name: string;
    color: Color;
}
export interface LegendProps {
    categories: string[];
    colors?: Color[];
    marginTop?: MarginTop;
}
declare const Legend: ({ categories, colors, marginTop, }: LegendProps) => JSX.Element;
export default Legend;
