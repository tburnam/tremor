import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';

import { Card, LineChart } from 'components';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/ChartElements/LineChart',
    component: LineChart,
} as ComponentMeta<typeof LineChart>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Template: ComponentStory<typeof LineChart> = (args) => (
    <Card hFull={ true } >
        <div className="h-96">
            <LineChart { ...args } />
        </div>
    </Card>
);
  

const data = [
    {
        month: 'Jan 21\'',
        Sales: 4000,
        Profit: 2400,
    },
    {
        month: 'Feb 21\'',
        Sales: 3000,
        Profit: 1398,
    },
    {
        month: 'Mar 21\'',
        Sales: 2000,
        Profit: 900,
    },
    {
        month: 'Apr 21\'',
        Sales: 2780,
        Profit: 3908,
    },
    {
        month: 'May 21',
        Sales: 1890,
        Profit: 4800,
    },
    {
        month: 'Jun 21\'',
        Sales: 2390,
        Profit: 3800,
    },
    {
        month: 'Jul 21\'',
        Sales: 3490,
        Profit: 4300,
    },
];

const dataFormatter = (number: number) => {
    return Intl.NumberFormat('us').format(number).toString() + ' $';
};

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {
    data: data,
    categories: ['Sales', 'Profit'],
    dataKey: 'month',
    valueFormatter: dataFormatter,
};
