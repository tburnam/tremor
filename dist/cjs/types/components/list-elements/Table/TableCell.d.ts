import React from 'react';
import { TextAlignment } from '../../../lib/inputTypes';
export interface TableCellProps {
    textAlignment?: TextAlignment;
    children: React.ReactNode;
}
declare const TableCell: ({ textAlignment, children }: TableCellProps) => JSX.Element;
export default TableCell;
