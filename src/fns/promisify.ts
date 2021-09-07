export type TPromisify = (fn: Function) => (...args: any[]) => any;

export const promisify: TPromisify = (fn) => (...args): any =>
  // eslint-disable-next-line
  new Promise((resolve, reject) => fn(...args, (err: Error, data: any) => (err ? reject(err) : resolve(data))));
