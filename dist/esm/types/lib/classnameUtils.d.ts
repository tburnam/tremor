import { ColorTypes } from './colorVariantMapping';
import { Height, MarginTop, Width } from './inputTypes';
interface StringJoiner {
    (...classes: (string)[]): string;
}
export declare const classNames: StringJoiner;
export declare const getPixelsFromTwClassName: (twClassName: MarginTop | Height | Width) => number;
export declare const getColorVariantsFromColorThemeValue: (colorThemeValue: string) => ColorTypes;
export declare const getHexFromColorThemeValue: (colorThemeValue: string) => string;
interface BoolClassParser {
    (twClassName: boolean): string;
}
export declare const parseTruncateOption: BoolClassParser;
export declare const parseHFullOption: BoolClassParser;
export declare const parseWFullOption: BoolClassParser;
export {};
