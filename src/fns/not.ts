export type TNot = (f: Function) => (...args: any[]) => boolean;

export const not: TNot = (fn) => (...args): boolean => !fn(...args);
