import { compose } from '../fns/compose';

describe('Compose', () => {
  it('composes operations on one argument', () => {
    const splitString = (s) => s.split('');
    const reverse = (arr) => arr.reverse();
    const join = (arr) => arr.join(',');
    expect(compose(join, reverse, splitString)('Test')).toEqual('t,s,e,T');
  });
});
