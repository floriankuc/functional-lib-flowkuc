import { once } from '../src/once.js';

describe('Once', () => {
  const testfn1 = jest.fn();
  const testfn2 = jest.fn();
  const testOnce = once(testfn2);

  const testfn3 = jest.fn();
  const testfn4 = jest.fn();
  const testOnceWithTwo = once(testfn3, testfn4);

  it('functions are called x number of times', () => {
    testfn1();
    testfn1();
    testfn1();
    expect(testfn1).toHaveBeenCalledTimes(3);
  });

  it('should allow a function to be called only once', () => {
    testOnce();
    expect(testfn2).toHaveBeenCalledTimes(1);
    testOnce();
    expect(testfn2).not.toHaveBeenCalledTimes(2);
  });

  it('should call an optional second function if passed as argument', () => {
    testOnceWithTwo();
    expect(testfn3).toHaveBeenCalledTimes(1);
    testOnceWithTwo();
    expect(testfn4).toHaveBeenCalledTimes(1);
  });
});
