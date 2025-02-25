import React from 'react';

import { ComponentMeta, ComponentStory } from '@storybook/react';
import { ArrowRightIcon } from 'assets';

import { Sizes } from 'lib/primitives';

import { Flex } from 'components';

import {
    Button,
    ButtonInline,
} from 'components';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Tremor/InputElements/ButtonSizes',
    component: Flex,
} as ComponentMeta<typeof Flex>;
// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args

const Icon = ArrowRightIcon;
const handleClick = () => console.log('clicked');
const buttonText = 'Button Text';

const Template: ComponentStory<never> = () => (
    <>
        <div className="mb-5">
            <div className="tr-grid tr-grid-cols-8 tr-items-center tr-justify-start tr-gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <Button
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <div className="tr-grid tr-grid-cols-8 tr-items-center tr-justify-start tr-gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <Button 
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                            importance="secondary" />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <div className="tr-grid tr-grid-cols-8 tr-items-center tr-justify-start tr-gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <Button
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <div className="tr-grid tr-grid-cols-8 tr-items-center tr-justify-start tr-gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <Button
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                            importance="secondary"
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <div className="tr-grid tr-grid-cols-8 tr-justify-start tr-items-center tr-gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <Button
                            Icon={ Icon }
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                            iconPosition="right"
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <div className="tr-grid tr-grid-cols-8 tr-items-center tr-justify-start tr-gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <Button
                            Icon={ Icon }
                            text={ buttonText }
                            importance={ 'secondary' }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <div className="tr-grid tr-grid-cols-8 tr-items-center tr-justify-start tr-gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <ButtonInline
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
        <div className="mb-5">
            <div className="tr-grid tr-grid-cols-8 tr-items-center tr-justify-start tr-gap-y-2">
                {Object.keys(Sizes).map(key => {
                    console.log(Sizes[key]);
                    return(
                        <ButtonInline
                            text={ buttonText }
                            size={ Sizes[key] }
                            handleClick={ handleClick }
                        />
                    );
                })}
            </div>
        </div>
    </>
);

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
