import { Functor } from './Functor.js';
import { Maybe } from './Maybe.js';
import { VALUE } from './Container.js';

export class Just extends Functor {
  isNothing() {
    return false;
  }
  map(fn) {
    return Maybe.of(fn(this[VALUE]));
  }
}
