/// <reference types="react" />
import 'tippy.js/dist/tippy.css';
import { DeltaType, MarginTop, Size } from '../../../lib';
export interface BadgeDeltaProps {
    text?: string;
    deltaType: DeltaType;
    isIncreasePositive?: boolean;
    size?: Size;
    tooltip?: string;
    marginTop?: MarginTop;
}
declare const BadgeDelta: ({ text, deltaType, isIncreasePositive, size, tooltip, marginTop, }: BadgeDeltaProps) => JSX.Element;
export default BadgeDelta;
