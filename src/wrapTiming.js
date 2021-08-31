import { performance } from 'perf_hooks';

const perfNow = performance.now;

const out = (name, start, end) => console.log(`${name}: ${end - start} ms`);

export const wrapTiming = (fn, getTime = perfNow, output = out) => (...args) => {
  let start = getTime();
  try {
    const returnVal = fn(...args);
    output(fn.name, start, getTime());
    return returnVal;
  } catch (error) {
    output(fn.name, start, getTime());
    throw error;
  }
};
