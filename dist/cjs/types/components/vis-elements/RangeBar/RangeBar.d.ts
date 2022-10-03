/// <reference types="react" />
import 'tippy.js/dist/tippy.css';
import { Color, MarginTop } from '../../../lib';
export interface RangeBarProps {
    percentageValue: number;
    minPercentageValue: number;
    maxPercentageValue: number;
    markerTooltip?: string;
    rangeTooltip?: string;
    showAnimation?: boolean;
    color?: Color;
    marginTop?: MarginTop;
}
declare const RangeBar: ({ percentageValue, minPercentageValue, maxPercentageValue, markerTooltip, rangeTooltip, showAnimation, color, marginTop, }: RangeBarProps) => JSX.Element;
export default RangeBar;
