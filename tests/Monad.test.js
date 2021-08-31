import { Monad } from '../src/Monad.js';

describe('Monad', () => {
  it('constructs correctly', () => {
    const add = (x) => (y) => x + y;
    const something = Monad.of(2).map(add);
    expect(something).toBeInstanceOf(Monad);
    const monad5 = something.ap(Monad.of(3));
    expect(monad5).toBeInstanceOf(Monad);
  });
});
