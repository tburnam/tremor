/// <reference types="react" />
import 'tippy.js/dist/tippy.css';
import { Color, MarginTop } from '../../../lib';
export interface MarkerBarProps {
    percentageValue: number;
    color?: Color;
    tooltip?: string;
    showAnimation?: boolean;
    marginTop?: MarginTop;
}
declare const MarkerBar: ({ percentageValue, color, tooltip, showAnimation, marginTop, }: MarkerBarProps) => JSX.Element;
export default MarkerBar;
