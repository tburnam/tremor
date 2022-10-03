import React from 'react';
import { TextAlignment } from '../../../lib/inputTypes';
interface TableHeaderCellProps {
    textAlignment?: TextAlignment;
    children: React.ReactNode;
}
declare const TableHeaderCell: ({ textAlignment, children, }: TableHeaderCellProps) => JSX.Element;
export default TableHeaderCell;
