/// <reference types="react" />
import { Color, MarginTop, ValueFormatter } from '../../../lib';
declare type BarListData = {
    name: string;
    value: number;
};
export interface BarListProps {
    data: BarListData[];
    valueFormatter?: ValueFormatter;
    color?: Color;
    showAnimation?: boolean;
    marginTop?: MarginTop;
}
declare const BarList: ({ data, color, valueFormatter, showAnimation, marginTop, }: BarListProps) => JSX.Element;
export default BarList;
