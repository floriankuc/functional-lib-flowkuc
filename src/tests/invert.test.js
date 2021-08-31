import { invert } from '../fns/invert';

describe('Invert', () => {
  const arr = [3, 5, 6, 5];
  const asc = (a, b) => a - b;

  it('inverts a strategy', () => {
    expect(arr.sort(asc)).toEqual([3, 5, 5, 6]);
    expect(arr.sort(invert(asc))).toEqual([6, 5, 5, 3]);
  });
});
