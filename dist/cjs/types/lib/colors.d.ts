import { Color } from './inputTypes';
export declare const themeColorRange: Color[];
export declare type DefaultColors = {
    transparent: string;
    white: string;
    black: string;
    canvasBackground: string;
    lightBackground: string;
    background: string;
    darkBackground: string;
    darkestBackground: string;
    lightBorder: string;
    border: string;
    darkBorder: string;
    lightRing: string;
    ring: string;
    lightText: string;
    text: string;
    darkText: string;
    darkestText: string;
    icon: string;
};
export declare const defaultColors: DefaultColors;
export declare type TwColorValues = {
    500: string;
};
export declare const twColorsHex: {
    [baseColor: string]: TwColorValues;
};
export declare type BaseColorTheme = {
    canvasBackground: string;
    lightBackground: string;
    background: string;
    darkBackground: string;
    darkestBackground: string;
    lightBorder: string;
    border: string;
    darkBorder: string;
    lightRing: string;
    ring: string;
    lightText: string;
    text: string;
    darkText: string;
    icon: string;
};
export declare const colorTheme: {
    [baseColor: string]: BaseColorTheme;
};
