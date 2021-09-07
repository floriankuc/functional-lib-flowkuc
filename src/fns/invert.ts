export type TInvert = (f: Function) => (...args: any[]) => number;

export const invert: TInvert = (fn) => (...args): number => -fn(...args);
