/// <reference types="react" />
import { Sizing } from 'lib';
export declare type BadgeProportionTypes = {
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    fontSize: string;
};
export declare const badgeProportionsIconOnly: {
    [char: string]: BadgeProportionTypes;
};
export declare const badgeProportionsWithText: {
    [char: string]: BadgeProportionTypes;
};
export declare const iconSizes: {
    [size: string]: Sizing;
};
export declare type ColorTypes = {
    bgColor: string;
    textColor: string;
};
export declare const colors: {
    [key: string]: ColorTypes;
};
export declare const deltaIcons: {
    [key: string]: React.ElementType;
};
