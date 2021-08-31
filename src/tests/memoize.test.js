import { memoize } from '../fns/memoize';

describe('Timing', () => {
  const fn = jest.fn((value) => Math.pow(value, 3));

  const fib = (n) => {
    if (n === 0) {
      return 0;
    } else if (n === 1) {
      return 1;
    } else {
      return fib(n - 2) + fib(n - 1);
    }
  };
  it('should produce correct results', () => {
    expect(fib(0)).toBe(0);
    expect(fib(1)).toBe(1);
    expect(fib(5)).toBe(5);
    expect(fib(8)).toBe(21);
    expect(fib(10)).toBe(55);
  });

  it('memoizes correctly', () => {
    const memoizedFunc = memoize(fn);
    expect(memoizedFunc(3)).toEqual(27);
    expect(memoizedFunc(4)).toEqual(64);
    expect(memoizedFunc(3)).toEqual(27);
    expect(memoizedFunc(5)).toEqual(125);
    expect(fn).toHaveBeenCalled();
    expect(fn).toHaveBeenCalledWith(4);
    expect(fn).toHaveBeenLastCalledWith(5);
    expect(fn).toHaveBeenCalledTimes(3);
  });
});
