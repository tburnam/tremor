/// <reference types="react" />
import 'tippy.js/dist/tippy.css';
import { Color, MarginTop } from '../../../lib';
export interface ProgressBarProps {
    percentageValue: number;
    label?: string;
    tooltip?: string;
    showAnimation?: boolean;
    color?: Color;
    marginTop?: MarginTop;
}
declare const ProgressBar: ({ percentageValue, label, tooltip, showAnimation, color, marginTop, }: ProgressBarProps) => JSX.Element;
export default ProgressBar;
