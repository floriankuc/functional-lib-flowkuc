import { performance } from 'perf_hooks';

export type TOutFn = (name: string, start: number, end: number) => any;
export type TWrapTiming = (fn: Function, getTime: () => number, out: TOutFn) => (...args: any[]) => void;

const perfNow = performance.now;
const out: TOutFn = (name, start, end) => console.log(`${name}: ${end - start} ms`);

export const wrapTiming: TWrapTiming = (fn, getTime = perfNow, output = out) => (...args): void => {
  const start = getTime();
  try {
    const returnVal = fn(...args);
    output(fn.name, start, getTime());
    return returnVal;
  } catch (error) {
    output(fn.name, start, getTime());
    throw error;
  }
};
