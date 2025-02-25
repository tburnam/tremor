import React from 'react';

import {
    CartesianGrid,
    Legend,
    Line,
    LineChart as ReChartsLineChart,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
} from 'recharts';

import BaseChartProps from '../common/BaseChartProps';
import ChartLegend from 'components/chart-elements/common/ChartLegend';
import ChartTooltip from '../common/ChartTooltip';

import {
    classNames,
    defaultValueFormatter,
    getColorTheme,
    getHexFromColorThemeValue,
    getPixelsFromTwClassName,
    parseHeight,
    parseMarginTop,
    themeColorRange
} from 'lib';

const LineChart = ({
    data = [],
    categories = [],
    dataKey,
    colors = themeColorRange,
    valueFormatter = defaultValueFormatter,
    startEndOnly = false,
    showXAxis = true,
    showYAxis = true,
    yAxisWidth = 'w-14',
    showAnimation = true,
    showTooltip = true,
    showLegend = true,
    showGridLines = true,
    height = 'h-80',
    marginTop = 'mt-0',
}: BaseChartProps) => {
    return (
        <div className={ classNames('tr-w-full', parseHeight(height), parseMarginTop(marginTop)) }>
            <ResponsiveContainer width="100%" height="100%">
                <ReChartsLineChart data={ data }>
                    { showGridLines ? (
                        <CartesianGrid
                            strokeDasharray="3 3"
                            horizontal={ true }
                            vertical={ false }
                        />
                    ) : null }
                    <XAxis
                        hide={ !showXAxis }
                        dataKey={ dataKey }
                        interval="preserveStartEnd"
                        tick={{ transform: 'translate(0, 6)' }} 
                        ticks={ startEndOnly ? [data[0][dataKey], data[data.length - 1][dataKey]] : undefined }
                        style={{
                            fontSize: '12px',
                            fontFamily: 'Inter; Helvetica',
                        }}
                        tickLine={ false }
                        axisLine={ false }
                        padding={{ left: 10, right: 10 }}
                        minTickGap={5}
                    />
                    <YAxis
                        width={ getPixelsFromTwClassName(yAxisWidth) }
                        hide={ !showYAxis }
                        axisLine={ false }
                        tickLine={ false }
                        domain={ ['auto', 'auto'] }
                        type="number"
                        tick={ { transform: 'translate(-3, 0)' } } 
                        style={ {
                            fontSize: '12px',
                            fontFamily: 'Inter; Helvetica',
                        } }
                        tickFormatter={ valueFormatter  }
                    />
                    { showTooltip ? (
                        <Tooltip
                            // ongoing issue: https://github.com/recharts/recharts/issues/2920
                            wrapperStyle={{ outline: 'none' }}
                            isAnimationActive={ false }
                            cursor={ { stroke: '#d1d5db', strokeWidth: 1 } }
                            content={ ({ active, payload, label }) => (
                                <ChartTooltip
                                    active={ active }
                                    payload={ payload }
                                    label={ label }
                                    valueFormatter={ valueFormatter }
                                    colors={ colors }
                                />
                            ) }
                            position={{ y: 0 }}
                        />
                    ) : null }
                    { showLegend ? (
                        <Legend
                            verticalAlign="top"
                            height={ 40 }
                            content={ ({ payload }) => ChartLegend({ payload }, colors) }
                        />
                    ) : null }
                    { categories.map((category, idx) => (
                        <Line
                            key={ category }
                            name={ category }
                            type="linear"
                            dataKey={ category }
                            stroke={ getHexFromColorThemeValue(getColorTheme(colors[idx]).background) }
                            strokeWidth={ 2 }
                            dot={ false }
                            isAnimationActive={ showAnimation }
                        />
                    )) }
                </ReChartsLineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineChart;
