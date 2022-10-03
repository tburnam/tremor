import React from 'react';
import { MarginTop } from '../../../lib';
export interface AccordionListProps {
    shadow?: boolean;
    marginTop?: MarginTop;
    children: React.ReactElement[] | React.ReactElement;
}
declare const AccordionList: ({ shadow, marginTop, children, }: AccordionListProps) => JSX.Element;
export default AccordionList;
