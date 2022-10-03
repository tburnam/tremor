import React from 'react';
import { MarginTop } from '../../../lib';
export interface TableProps {
    marginTop?: MarginTop;
    children: React.ReactNode;
}
declare const Table: ({ marginTop, children }: TableProps) => JSX.Element;
export default Table;
