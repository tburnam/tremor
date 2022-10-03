import React from 'react';
import { MarginTop } from '../../../lib';
export interface TrackingProps {
    marginTop?: MarginTop;
    children: React.ReactNode;
}
declare const Tracking: ({ marginTop, children }: TrackingProps) => JSX.Element;
export default Tracking;
