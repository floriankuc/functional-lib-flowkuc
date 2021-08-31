import { Monad } from './Monad.js';
import { VALUE } from './Container.js';
import { Either } from './Either.js';

export class Right extends Monad {
  isLeft() {
    return false;
  }
  map(fn) {
    return Either.of(null, fn(this[VALUE]));
  }
}
