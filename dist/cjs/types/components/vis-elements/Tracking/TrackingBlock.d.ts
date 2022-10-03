/// <reference types="react" />
import 'tippy.js/dist/tippy.css';
import { Color, Height } from '../../../lib';
export interface TrackingBlockProps {
    color: Color;
    height?: Height;
    tooltip?: string;
}
declare const TrackingBlock: ({ color, height, tooltip }: TrackingBlockProps) => JSX.Element;
export default TrackingBlock;
