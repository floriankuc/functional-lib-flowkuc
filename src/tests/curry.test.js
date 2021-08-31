import { curry } from '../fns/curry';

describe('Curry', () => {
  const make123 = (a, b, c) => String(100 * a + 10 * b + c);

  it('curries correctly', () => {
    const make1 = curry(make123);
    const make2 = make1(1)(2);
    const make3 = make2(3);
    expect(make3).toBe(make123(1, 2, 3));
  });
});
