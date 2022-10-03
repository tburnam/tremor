import React from 'react';
import { MarginTop } from '../../../lib/inputTypes';
export interface ListProps {
    marginTop?: MarginTop;
    children: React.ReactNode;
}
declare const List: ({ marginTop, children }: ListProps) => JSX.Element;
export default List;
