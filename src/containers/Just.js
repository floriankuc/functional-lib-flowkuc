import { Functor } from './Functor';
import { Maybe } from './Maybe';
import { VALUE } from './Container';

export class Just extends Functor {
  isNothing() {
    return false;
  }
  map(fn) {
    return Maybe.of(fn(this[VALUE]));
  }
}
