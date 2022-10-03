/// <reference types="react" />
import { Color, ValueFormatter } from '../../../lib';
export interface ChartTooltipRowProps {
    value: string;
    name: string;
    color: Color;
}
export interface ChartTooltipProps {
    active: boolean | undefined;
    payload: any;
    label: string;
    colors?: Color[];
    valueFormatter: ValueFormatter;
}
declare const ChartTooltip: ({ active, payload, label, colors, valueFormatter }: ChartTooltipProps) => JSX.Element | null;
export default ChartTooltip;
