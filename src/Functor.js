import { Container, VALUE } from './Container.js';

export class Functor extends Container {
  static of(x) {
    return new Functor(x);
  }
  map(fn) {
    return Functor.of(fn(this[VALUE]));
  }
}
