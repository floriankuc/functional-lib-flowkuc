export type TCurry = (f: Function) => void;

export const curry: TCurry = (fn) => (fn.length === 0 ? fn() : (p: any): void => curry(fn.bind(null, p)));
