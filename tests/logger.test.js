import { logger } from '../src/logger.js';

describe('Logger', () => {
  const add = (a, b) => a + b;

  it('logs correctly', () => {
    const logFunction = logger(add);
    logFunction(1, 2);
  });

  it('throws correctly', () => {
    let thrower = () => {
      throw 'CRASH!';
    };
    expect(thrower).toThrow();

    thrower = logger(thrower);
    try {
      thrower(1, 2, 3);
    } catch (e) {
      expect(thrower).toThrowError('CRASH!');
    }
  });
});
