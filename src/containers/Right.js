import { Monad } from './Monad';
import { VALUE } from './Container';
import { Either } from './Either';

export class Right extends Monad {
  isLeft() {
    return false;
  }
  map(fn) {
    return Either.of(null, fn(this[VALUE]));
  }
}
