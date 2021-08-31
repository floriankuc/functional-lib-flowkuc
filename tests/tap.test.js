import { tap } from '../src/tap.js';
import { pipe } from '../src/pipe.js';

describe('Tap', () => {
  const mock = jest.fn();
  it('taps into pipe flow', () => {
    const splitString = (s) => s.split('');
    const reverse = (arr) => arr.reverse();
    const join = (arr) => arr.join(',');

    const tapConsole = tap(mock);
    pipe(splitString, tapConsole, reverse, join)('Tap');
    expect(mock).toHaveBeenCalledTimes(1);
  });
});
