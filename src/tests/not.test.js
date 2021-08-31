import { not } from '../fns/not';

describe('not', () => {
  const arr = [-2, -1, 0, 1, 2];
  it('negates a strategy', () => {
    const isNegative = (a) => a < 0;

    expect(arr.filter(isNegative)).toEqual([-2, -1]);
    expect(arr.filter(not(isNegative))).toEqual([0, 1, 2]);
  });
});
