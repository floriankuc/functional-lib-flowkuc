import { Either } from './Either';

export class Try extends Either {
  constructor(fn, msg) {
    try {
      return Either.of(null, fn());
    } catch (e) {
      return Either.of(msg || e, null);
    }
  }
  static of(fn, msg) {
    return new Try(fn, msg);
  }
}
