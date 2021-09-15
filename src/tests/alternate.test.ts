import { alternate } from '../fns/alternate';

describe('Alternate', () => {
  const fn1 = jest.fn();
  const fn2 = jest.fn();

  it('alternates between two funtions', () => {
    const alt = alternate(fn1, fn2);
    alt();
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(0);
    alt();
    expect(fn1).toHaveBeenCalledTimes(1);
    expect(fn2).toHaveBeenCalledTimes(1);
    alt();
    expect(fn1).toHaveBeenCalledTimes(2);
    expect(fn2).toHaveBeenCalledTimes(1);
  });
});
