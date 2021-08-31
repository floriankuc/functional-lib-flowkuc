import { pipe } from '../fns/pipe';

describe('pipe', () => {
  it('pipes operations on one argument', () => {
    const splitString = (s) => s.split('');
    const reverse = (arr) => arr.reverse();
    const join = (arr) => arr.join(',');
    expect(pipe(splitString, reverse, join)('Test')).toEqual('t,s,e,T');
  });
});
