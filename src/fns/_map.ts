export type T_map = (value: any, cb: Function) => void;

const mockObject = {
  id: '1',
  data: 'value',
};

export const _map: T_map = (value, cb) => {
  if (!Array.isArray(value)) {
    value = [value];
  }

  // return value.map((v: typeof value, i: number, src: typeof value[]) => (x: any) => cb(x));
  return value.map(cb);
};
