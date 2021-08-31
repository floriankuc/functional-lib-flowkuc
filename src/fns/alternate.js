export const alternate = (fn1, fn2) => (...args) => {
  fn1(...args);
  [fn1, fn2] = [fn2, fn1];
};
