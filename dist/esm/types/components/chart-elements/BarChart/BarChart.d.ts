/// <reference types="react" />
import BaseChartProps from '../common/BaseChartProps';
export interface BarChartProps extends BaseChartProps {
    layout?: 'vertical' | 'horizontal';
    stack?: boolean;
    relative?: boolean;
}
declare const BarChart: ({ data, categories, dataKey, colors, valueFormatter, layout, stack, relative, startEndOnly, showAnimation, showXAxis, showYAxis, yAxisWidth, showTooltip, showLegend, showGridLines, height, marginTop, }: BarChartProps) => JSX.Element;
export default BarChart;
