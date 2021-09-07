export type TUnary = (fn: Function) => (...args: any[]) => Function;

export const unary: TUnary = (fn) => (...args): Function => fn(args[0]);
