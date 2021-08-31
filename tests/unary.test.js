import { unary } from '../src/unary.js';

describe('Unary', () => {
  const arr = ['1.1', '-2', '3'];

  it('changes arity to 1', () => {
    expect(arr.map(parseInt)).toEqual([1, NaN, NaN]);
    expect(arr.map(unary(parseInt))).toEqual([1, -2, 3]);
  });
});
