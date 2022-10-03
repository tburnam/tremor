import React from 'react';
import { MarginTop, MaxWidth, SpaceY, TextAlignment } from '../../../lib/inputTypes';
export interface BlockProps {
    maxWidth?: MaxWidth;
    spaceY?: SpaceY | '';
    textAlignment?: TextAlignment;
    truncate?: boolean;
    marginTop?: MarginTop;
    children: React.ReactNode;
}
declare const Block: ({ maxWidth, spaceY, textAlignment, truncate, marginTop, children }: BlockProps) => JSX.Element;
export default Block;
