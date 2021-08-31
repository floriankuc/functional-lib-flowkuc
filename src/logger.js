//eslint-disable-next-line @typescript-eslint/no-unused-vars
export const logger = (fn, logFn = console.log) => (...args) => {
  try {
    const returnVal = fn(...args);
    logger(`Successfully exiting ${fn.name}: ${returnVal}`);
    return returnVal;
  } catch (err) {
    logger(`Exiting ${fn.name}: threw ${err}`);
    throw err;
  }
};
