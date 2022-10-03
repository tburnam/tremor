/// <reference types="react" />
import 'tippy.js/dist/tippy.css';
import { Color, MarginTop } from '../../../lib';
export interface CategoryBarProps {
    categoryPercentageValues: number[];
    colors?: Color[];
    percentageValue?: number;
    showLabels?: boolean;
    tooltip?: string;
    showAnimation?: boolean;
    marginTop?: MarginTop;
}
declare const CategoryBar: ({ categoryPercentageValues, colors, percentageValue, showLabels, tooltip, showAnimation, marginTop, }: CategoryBarProps) => JSX.Element;
export default CategoryBar;
