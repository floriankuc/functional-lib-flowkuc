import { wrapTiming } from '../fns/wrapTiming';

describe('Timing', () => {
  const testfn1 = jest.fn();

  it('functions are called x number of times', () => {
    const timeFunction = wrapTiming(testfn1);
    timeFunction();
  });
});
