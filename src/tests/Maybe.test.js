import { Just } from '../containers/Just';
import { Maybe } from '../containers/Maybe';
import { Nothing } from '../containers/Nothing';

describe('Maybe', () => {
  const maybe = Maybe.of();
  const maybe2 = Maybe.of(2);
  const plus1 = (x) => x + 1;

  it('constructs correctly', () => {
    expect(maybe).toBeInstanceOf(Nothing);
    expect(maybe2).toBeInstanceOf(Just);
  });
  it('maps correctly', () => {
    expect(Maybe.of(2209).map(plus1).map(plus1).toString()).toEqual('Just(2211)');
    expect(Maybe.of(null).map(plus1).map(plus1).toString()).toEqual('Nothing()');
  });
});
