import React from 'react';
import { Height } from '../../../lib';
export interface FooterProps {
    height?: Height;
    children: React.ReactNode;
}
declare const Footer: ({ height, children }: FooterProps) => JSX.Element;
export default Footer;
