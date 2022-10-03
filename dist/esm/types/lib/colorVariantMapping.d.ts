export declare type ColorTypes = {
    bgColor: string;
    hoverBgColor: string;
    textColor: string;
    hoverTextColor: string;
    borderColor: string;
    hoverBorderColor: string;
    ringRolor: string;
    hoverRingColor: string;
    divideColor: string;
    outlineColor: string;
    focusRingColor: string;
};
export declare const colorVariantMapping: {
    [baseColor: string]: {
        [colorVariant: string]: ColorTypes;
    };
};
