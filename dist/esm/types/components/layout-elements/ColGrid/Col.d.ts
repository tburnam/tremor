import React from 'react';
export interface ColProps {
    numColSpan?: number;
    numColSpanSm?: number;
    numColSpanMd?: number;
    numColSpanLg?: number;
    children: React.ReactNode;
}
declare const Col: ({ numColSpan, numColSpanSm, numColSpanMd, numColSpanLg, children, }: ColProps) => JSX.Element;
export default Col;
