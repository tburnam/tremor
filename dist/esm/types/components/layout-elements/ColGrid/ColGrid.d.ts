import React from 'react';
import { GapX, GapY, MarginTop } from '../../../lib/inputTypes';
export interface ColGridProps {
    numCols?: number;
    numColsSm?: number;
    numColsMd?: number;
    numColsLg?: number;
    gapX?: GapX;
    gapY?: GapY;
    marginTop?: MarginTop;
    children: React.ReactNode;
}
declare const ColGrid: ({ numCols, numColsSm, numColsMd, numColsLg, gapX, gapY, marginTop, children, }: ColGridProps) => JSX.Element;
export default ColGrid;
