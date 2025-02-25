export declare type ValueFormatter = {
    (value: number): string;
};
declare const iconVariantValues: readonly ["simple", "light", "shadow", "solid", "outlined"];
export declare type IconVariant = typeof iconVariantValues[number];
export declare type HorizontalPosition = 'left' | 'right';
export declare type VerticalPosition = 'top' | 'bottom';
export declare type Importance = 'primary' | 'secondary';
declare const deltaTypeValues: readonly ["increase", "moderateIncrease", "decrease", "moderateDecrease", "unchanged"];
export declare type DeltaType = typeof deltaTypeValues[number];
declare const sizeValues: readonly ["xs", "sm", "md", "lg", "xl"];
export declare type Size = typeof sizeValues[number];
declare const baseColorValues: readonly ["slate", "gray", "zinc", "neutral", "stone", "red", "orange", "amber", "yellow", "lime", "green", "emerald", "teal", "cyan", "sky", "blue", "indigo", "violet", "purple", "fuchsia", "pink", "rose"];
export declare type Color = typeof baseColorValues[number];
declare const twJustifyContentValues: readonly ["justify-start", "justify-end", "justify-center", "justify-between", "justify-around", "justify-evenly"];
export declare type JustifyContent = typeof twJustifyContentValues[number];
declare const twAlignItemsValues: readonly ["items-start", "items-end", "items-center", "items-baseline", "items-stretch"];
export declare type AlignItems = typeof twAlignItemsValues[number];
declare const twTextAlignmentValues: readonly ["text-left", "text-center", "text-right", "text-justify", "text-start", "text-end"];
export declare type TextAlignment = typeof twTextAlignmentValues[number];
declare const twMaxWidthValues: readonly ["max-w-0", "max-w-none", "max-w-xs", "max-w-sm", "max-w-md", "max-w-lg", "max-w-xl", "max-w-2xl", "max-w-3xl", "max-w-4xl", "max-w-5xl", "max-w-6xl", "max-w-7xl", "max-w-full", "max-w-min", "max-w-max", "max-w-fit", "max-w-prose", "max-w-screen-sm", "max-w-screen-lg", "max-w-screen-xl", "max-w-screen-2xl"];
export declare type MaxWidth = typeof twMaxWidthValues[number];
declare const twSpaceXValues: readonly ["space-x-0", "space-x-0.5", "space-x-1", "space-x-1.5", "space-x-2", "space-x-2.5", "space-x-3", "space-x-3.5", "space-x-4", "space-x-5", "space-x-6", "space-x-7", "space-x-8", "space-x-9", "space-x-10", "space-x-11", "space-x-12", "space-x-14", "space-x-16", "space-x-20", "space-x-24", "space-x-28", "space-x-32", "space-x-36", "space-x-40", "space-x-44", "space-x-48", "space-x-52", "space-x-56", "space-x-60", "space-x-64", "space-x-72", "space-x-80", "space-x-96", "-space-x-0.5", "-space-x-1", "-space-x-1.5", "-space-x-2", "-space-x-2.5", "-space-x-3", "-space-x-3.5", "-space-x-4", "-space-x-5", "-space-x-6", "-space-x-7", "-space-x-8", "-space-x-9", "-space-x-10", "-space-x-11", "-space-x-12", "-space-x-14", "-space-x-16", "-space-x-20", "-space-x-24", "-space-x-28", "-space-x-32", "-space-x-36", "-space-x-40", "-space-x-44", "-space-x-48", "-space-x-52", "-space-x-56", "-space-x-60", "-space-x-64", "-space-x-72", "-space-x-80", "-space-x-96"];
export declare type SpaceX = typeof twSpaceXValues[number];
declare const twSpaceYValues: readonly ["space-y-0", "space-y-0.5", "space-y-1", "space-y-1.5", "space-y-2", "space-y-2.5", "space-y-3", "space-y-3.5", "space-y-4", "space-y-5", "space-y-6", "space-y-7", "space-y-8", "space-y-9", "space-y-10", "space-y-11", "space-y-12", "space-y-14", "space-y-16", "space-y-20", "space-y-24", "space-y-28", "space-y-32", "space-y-36", "space-y-40", "space-y-44", "space-y-48", "space-y-52", "space-y-56", "space-y-60", "space-y-64", "space-y-72", "space-y-80", "space-y-96", "-space-y-0.5", "-space-y-1", "-space-y-1.5", "-space-y-2", "-space-y-2.5", "-space-y-3", "-space-y-3.5", "-space-y-4", "-space-y-5", "-space-y-6", "-space-y-7", "-space-y-8", "-space-y-9", "-space-y-10", "-space-y-11", "-space-y-12", "-space-y-14", "-space-y-16", "-space-y-20", "-space-y-24", "-space-y-28", "-space-y-32", "-space-y-36", "-space-y-40", "-space-y-44", "-space-y-48", "-space-y-52", "-space-y-56", "-space-y-60", "-space-y-64", "-space-y-72", "-space-y-80", "-space-y-96"];
export declare type SpaceY = typeof twSpaceYValues[number];
declare const twTopMargins: readonly ["mt-0", "mt-0.5", "mt-1", "mt-1.5", "mt-2", "mt-2.5", "mt-3", "mt-3.5", "mt-4", "mt-5", "mt-6", "mt-7", "mt-8", "mt-9", "mt-10", "mt-11", "mt-12", "mt-14", "mt-16", "mt-20", "mt-24", "mt-28", "mt-32", "mt-36", "mt-40", "mt-44", "mt-48", "mt-52", "mt-56", "mt-60", "mt-64", "mt-72", "mt-80", "mt-96", "-mt-0.5", "-mt-1", "-mt-1.5", "-mt-2", "-mt-2.5", "-mt-3", "-mt-3.5", "-mt-4", "-mt-5", "-mt-6", "-mt-7", "-mt-8", "-mt-9", "-mt-10", "-mt-11", "-mt-12", "-mt-14", "-mt-16", "-mt-20", "-mt-24", "-mt-28", "-mt-32", "-mt-36", "-mt-40", "-mt-44", "-mt-48", "-mt-52", "-mt-56", "-mt-60", "-mt-64", "-mt-72", "-mt-80", "-mt-96"];
export declare type MarginTop = typeof twTopMargins[number];
declare const twHeights: readonly ["h-0", "h-0.5", "h-1", "h-1.5", "h-2", "h-2.5", "h-3", "h-3.5", "h-4", "h-5", "h-6", "h-7", "h-8", "h-9", "h-10", "h-11", "h-12", "h-14", "h-16", "h-20", "h-24", "h-28", "h-32", "h-36", "h-40", "h-44", "h-48", "h-52", "h-56", "h-60", "h-64", "h-72", "h-80", "h-96"];
export declare type Height = typeof twHeights[number];
declare const twWidths: readonly ["w-0", "w-0.5", "w-1", "w-1.5", "w-2", "w-2.5", "w-3", "w-3.5", "w-4", "w-5", "w-6", "w-7", "w-8", "w-9", "w-10", "w-11", "w-12", "w-14", "w-16", "w-20", "w-24", "w-28", "w-32", "w-36", "w-40", "w-44", "w-48", "w-52", "w-56", "w-60", "w-64", "w-72", "w-80", "w-96"];
export declare type Width = typeof twWidths[number];
declare const twGapXValues: readonly ["gap-x-0", "gap-x-0.5", "gap-x-1", "gap-x-1.5", "gap-x-2", "gap-x-2.5", "gap-x-3", "gap-x-3.5", "gap-x-4", "gap-x-5", "gap-x-6", "gap-x-7", "gap-x-8", "gap-x-9", "gap-x-10", "gap-x-11", "gap-x-12", "gap-x-14", "gap-x-16", "gap-x-20", "gap-x-24", "gap-x-28", "gap-x-32", "gap-x-36", "gap-x-40", "gap-x-44", "gap-x-48", "gap-x-52", "gap-x-56", "gap-x-60", "gap-x-64", "gap-x-72", "gap-x-80", "gap-x-96"];
export declare type GapX = typeof twGapXValues[number];
declare const twGapYValues: readonly ["gap-y-0", "gap-y-0.5", "gap-y-1", "gap-y-1.5", "gap-y-2", "gap-y-2.5", "gap-y-3", "gap-y-3.5", "gap-y-4", "gap-y-5", "gap-y-6", "gap-y-7", "gap-y-8", "gap-y-9", "gap-y-10", "gap-y-11", "gap-y-12", "gap-y-14", "gap-y-16", "gap-y-20", "gap-y-24", "gap-y-28", "gap-y-32", "gap-y-36", "gap-y-40", "gap-y-44", "gap-y-48", "gap-y-52", "gap-y-56", "gap-y-60", "gap-y-64", "gap-y-72", "gap-y-80", "gap-y-96"];
export declare type GapY = typeof twGapYValues[number];
export {};
