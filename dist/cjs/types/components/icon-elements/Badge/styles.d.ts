import { Sizing } from 'lib/sizing';
export declare type BadgeProportionTypes = {
    paddingLeft: string;
    paddingRight: string;
    paddingTop: string;
    paddingBottom: string;
    fontSize: string;
};
export declare const badgeProportions: {
    [char: string]: BadgeProportionTypes;
};
export declare const iconSizes: {
    [size: string]: Sizing;
};
