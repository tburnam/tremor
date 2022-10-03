import React from 'react';
import { SpaceX } from '../../../lib';
export interface ListItemProps {
    spaceX?: SpaceX | '';
    children: React.ReactNode;
}
declare const ListItem: ({ spaceX, children, }: ListItemProps) => JSX.Element;
export default ListItem;
