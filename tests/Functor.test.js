import { Functor } from '../src/Functor';

describe('Functor', () => {
  const functor = Functor.of('TestValue');
  it('wraps values correctly', () => {
    expect(functor).toBeInstanceOf(Functor);
    expect(functor.valueOf()).toEqual('TestValue');
  });
  it('logs itself', () => {
    expect(functor.toString()).toEqual('Functor(TestValue)');
  });
  it('maps correctly', () => {
    expect(functor.map(() => 'value')).toBeInstanceOf(Functor);
    expect(functor.map(() => 'value').valueOf()).toBe('value');
  });
});
