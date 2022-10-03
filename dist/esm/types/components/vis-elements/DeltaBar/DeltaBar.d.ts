/// <reference types="react" />
import 'tippy.js/dist/tippy.css';
import { MarginTop } from '../../../lib';
export interface DeltaBarProps {
    percentageValue: number;
    isIncreasePositive?: boolean;
    tooltip?: string;
    showAnimation?: boolean;
    marginTop?: MarginTop;
}
declare const DeltaBar: ({ percentageValue, isIncreasePositive, tooltip, showAnimation, marginTop, }: DeltaBarProps) => JSX.Element;
export default DeltaBar;
