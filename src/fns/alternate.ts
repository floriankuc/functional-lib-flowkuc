export type TAlternate = (f: Function, g: Function) => (args: any[]) => void;

export const alternate: TAlternate = (fn1, fn2) => (...args): void => {
  fn1(...args);
  [fn1, fn2] = [fn2, fn1];
};
