import React from 'react';
import { AlignItems, JustifyContent, MarginTop, SpaceX } from '../../../lib';
export interface FlexProps {
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    spaceX?: SpaceX | '';
    truncate?: boolean;
    marginTop?: MarginTop;
    children: React.ReactNode;
}
declare const Flex: ({ justifyContent, alignItems, spaceX, truncate, marginTop, children }: FlexProps) => JSX.Element;
export default Flex;
