import React from 'react';

import { Color, ValueFormatter } from '../../../lib';
import {
    border,
    borderRadius,
    boxShadow,
    classNames,
    defaultColors,
    fontSize,
    fontWeight,
    getColorTheme,
    getColorVariantsFromColorThemeValue,
    sizing,
    spacing,
    themeColorRange
} from 'lib';

export interface ChartTooltipRowProps {
    value: string,
    name: string,
    color: Color,
}

const ChartTooltipRow = ({ value, name, color }: ChartTooltipRowProps) => (
    <div className="tr-flex tr-items-center tr-justify-between tr-space-x-8">
        <div className="tr-flex tr-items-center tr-space-x-2">
            <span className={ classNames(
                getColorVariantsFromColorThemeValue(getColorTheme(color).background).bgColor,
                getColorVariantsFromColorThemeValue(defaultColors.white).borderColor,
                sizing.sm.height,
                sizing.sm.width,
                borderRadius.full.all,
                border.md.all,
                boxShadow.md,
            ) } />
            <p className={ classNames(
                getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                'tr-font-medium tr-tabular-nums tr-text-right'
            ) }>
                { value }
            </p>
        </div>
        <p className={ classNames(
            getColorVariantsFromColorThemeValue(defaultColors.text).textColor,
            fontWeight.sm,
        ) }>
            { name }
        </p>
    </div>
);

export interface ChartTooltipProps {
    active: boolean | undefined,
    payload: any,
    label: string,
    colors?: Color[],
    valueFormatter: ValueFormatter,
}

const ChartTooltip = ({ active, payload, label, colors = themeColorRange, valueFormatter }: ChartTooltipProps) => {
    if (active && payload) {
        return (
            <div className={ classNames(
                getColorVariantsFromColorThemeValue(defaultColors.white).bgColor,
                fontSize.sm,
                borderRadius.md.all,
                border.sm.all,
                boxShadow.lg,
            ) }>
                <div className={ classNames(
                    getColorVariantsFromColorThemeValue(defaultColors.lightBorder).borderColor,
                    spacing.twoXl.paddingLeft,
                    spacing.twoXl.paddingRight,
                    spacing.sm.paddingTop,
                    spacing.sm.paddingBottom,
                    border.sm.bottom,
                ) }>
                    <p className={ classNames(
                        getColorVariantsFromColorThemeValue(defaultColors.darkText).textColor,
                        fontWeight.md,
                    ) }>
                        { label }
                    </p>
                </div>
  
                <div className={ classNames(
                    spacing.twoXl.paddingLeft,
                    spacing.twoXl.paddingRight,
                    spacing.sm.paddingTop,
                    spacing.sm.paddingBottom,
                    'tr-space-y-1',
                ) }>
                    {
                        payload.map(({value, name}: { value: number, name: string }, idx: number) => (
                            <ChartTooltipRow
                                key={ `id-${idx}` }
                                value={ valueFormatter(value) }
                                name={ name }
                                color={ colors[idx] }
                            />
                        ))
                    }
                </div>
            </div>
        );
    }
  
    return null;
};

export default ChartTooltip;
