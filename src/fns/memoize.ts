export type TMemoize = (f: Function) => (...args: any[]) => { [key: string]: any } | Function;

export const memoize: TMemoize = (fn) => {
  const cache: { [key: string]: any } = {};
  return (...args: any[]): typeof cache | Function => {
    const strX = JSON.stringify(args);
    return strX in cache ? cache[strX] : (cache[strX] = fn(...args));
  };
};
