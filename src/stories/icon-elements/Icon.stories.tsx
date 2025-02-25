import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArrowUpIcon } from 'assets';

import { BaseColors, Sizes } from 'lib/primitives';
import { Title } from 'components';

import { IconVariants } from 'components/icon-elements/Icon/Icon';

import Icon from 'components/icon-elements/Icon/Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/IconElements/Icon',
    component: Icon,
} as ComponentMeta<typeof Icon>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const MyIcon = ArrowUpIcon;

const Template: ComponentStory<never> = () => (
    <>
        <div className="tr-mb-5">
            <Title>
                Icon Simple
            </Title>
            <p>Sizes</p>
            <div className="tr-grid tr-grid-cols-8 tr-justify-start tr-gap-y-2">
                {Object.keys(Sizes).map(key => {
                    return(
                        <Icon
                            Icon={ MyIcon }
                            variant={ IconVariants.Simple }
                            size={ Sizes[key] }
                            tooltip="Icon Info"
                        />
                    );
                })}
            </div>
            <p>Colors</p>
            <div className="tr-grid tr-grid-cols-8">
                {Object.keys(BaseColors).map(key => {
                    console.log(BaseColors[key]);
                    return(
                        <Icon Icon={ MyIcon } variant={ IconVariants.Simple } color={ BaseColors[key] } />
                    );
                })}
            </div>
        </div>
        <div className="tr-mb-5">
            <Title>
                Icon Light
            </Title>
            <p>Sizes</p>
            <div className="tr-grid tr-grid-cols-8 tr-justify-start tr-gap-y-2">
                {Object.keys(Sizes).map(key => {
                    return(
                        <Icon
                            Icon={ MyIcon }
                            variant={ IconVariants.Light }
                            size={ Sizes[key] }
                            tooltip="Icon Info"
                        />
                    );
                })}
            </div>
            <p>Colors</p>
            <div className="tr-grid tr-grid-cols-8 tr-items-center tr-justify-start tr-gap-y-2">
                {Object.keys(BaseColors).map(key => {
                    console.log(BaseColors[key]);
                    return(
                        <Icon Icon={ MyIcon } variant={ IconVariants.Light } color={ BaseColors[key] } />
                    );
                })}
            </div>
        </div>
        <div className="tr-mb-5">
            <Title>
                Icon Shadow
            </Title>
            <p>Sizes</p>
            <div className="tr-grid tr-grid-cols-8 tr-justify-start tr-gap-y-2">
                {Object.keys(Sizes).map(key => {
                    return(
                        <Icon
                            Icon={ MyIcon }
                            variant={ IconVariants.Shadow }
                            size={ Sizes[key] }
                            tooltip="Icon Info"
                        />
                    );
                })}
            </div>
            <p>Colors</p>
            <div className="tr-grid tr-grid-cols-8 tr-items-center tr-justify-start tr-gap-y-2">
                {Object.keys(BaseColors).map(key => {
                    console.log(BaseColors[key]);
                    return(
                        <Icon Icon={ MyIcon } variant={ IconVariants.Shadow } color={ BaseColors[key] } />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <Title>
                Icon Solid
            </Title>
            <p>Sizes</p>
            <div className="tr-grid tr-grid-cols-8 tr-justify-start tr-gap-y-2">
                {Object.keys(Sizes).map(key => {
                    return(
                        <Icon
                            Icon={ MyIcon }
                            variant={ IconVariants.Solid }
                            size={ Sizes[key] }
                            tooltip="Icon Info"
                        />
                    );
                })}
            </div>
            <p>Colors</p>
            <div className="tr-grid tr-grid-cols-8 tr-items-center tr-justify-start tr-gap-y-2">
                {Object.keys(BaseColors).map(key => {
                    console.log(BaseColors[key]);
                    return(
                        <Icon Icon={ MyIcon } variant={ IconVariants.Solid } color={ BaseColors[key] } />
                    );
                })}
            </div>
        </div>
        <div className="tr-mb-5">
            <Title>
                Icon Outlined
            </Title>
            <p>Sizes</p>
            <div className="tr-grid tr-grid-cols-8 tr-justify-start tr-gap-y-2">
                {Object.keys(Sizes).map(key => {
                    return(
                        <Icon
                            Icon={ MyIcon }
                            variant={ IconVariants.Outlined }
                            size={ Sizes[key] }
                            tooltip="Icon Info"
                        />
                    );
                })}
            </div>
            <p>Colors</p>
            <div className="tr-grid tr-grid-cols-8 tr-items-center tr-justify-start tr-gap-y-2">
                {Object.keys(BaseColors).map(key => {
                    console.log(BaseColors[key]);
                    return(
                        <Icon Icon={ MyIcon } variant={ IconVariants.Outlined } color={ BaseColors[key] } />
                    );
                })}
            </div>
        </div>
    </>
);
  


export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
