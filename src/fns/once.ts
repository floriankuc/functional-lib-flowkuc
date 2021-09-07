export type TOnce = (f: Function | null, g: Function) => (...args: any[]) => void;

export const once: TOnce = (f, g = (): void => {}) => {
  return (...args): void => {
    f !== null ? f(...args) : g(...args);
    f = null;
  };
};
