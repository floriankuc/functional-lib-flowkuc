import { Functor } from '../containers/Functor';
import { Nothing } from '../containers/Nothing';

describe('Nothing', () => {
  const nothing = new Nothing();
  it('constructs correctly', () => {
    expect(nothing).toBeInstanceOf(Functor);
  });
  it('produces correct values', () => {
    expect(nothing.toString()).toBe('Nothing()');
    expect(nothing.isNothing()).toBe(true);
    expect(nothing.map((x) => x)).toEqual(nothing);
  });
});
