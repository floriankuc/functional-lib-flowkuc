export type TPipe = (...args: Function[]) => Function;

export const pipe: TPipe = (...fns) => fns.reduce((result, f) => (...args: Function[]): Function => f(result(...args)));
