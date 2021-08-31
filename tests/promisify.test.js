//todo

import { promisify } from '../src/promisify.js';

describe('Promisify', () => {
  const promisifyMap = promisify(() => 2);
  it('promisifies', () => {
    expect(promisifyMap()).toBeInstanceOf(Promise);
  });
});
