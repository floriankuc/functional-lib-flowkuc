export type TLogger = (fn: Function, logFn?: Function) => (...args: any[]) => void;
//eslint-disable-next-line @typescript-eslint/no-unused-vars
export const logger: TLogger = (fn, logFn = console.log) => (...args): void => {
  try {
    const returnVal = fn(...args);
    logFn(`Successfully exiting ${fn.name}: ${returnVal}`);
    return returnVal;
  } catch (err) {
    logFn(`Exiting ${fn.name}: threw ${err}`);
    throw err;
  }
};
