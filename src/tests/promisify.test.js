import { promisify } from '../fns/promisify';

describe('Promisify', () => {
  const promisifyMap = promisify(() => 2);
  it('promisifies', () => {
    expect(promisifyMap()).toBeInstanceOf(Promise);
  });
});
