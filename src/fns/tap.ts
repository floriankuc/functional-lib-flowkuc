export type TTap = (fn: Function) => (arg: any) => Function;

export const tap: TTap = (fn) => (x): Function => (fn(x), x);
