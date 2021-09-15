export type T_map = (value: any, cb: Function) => void;

export const _map: T_map = (value, cb) => {
  if (!Array.isArray(value)) {
    value = [value];
  }

  return value.map(cb);
};
