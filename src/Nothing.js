import { Functor } from './Functor.js';

export class Nothing extends Functor {
  isNothing() {
    return true;
  }
  toString() {
    return 'Nothing()';
  }
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  map(fn) {
    return this;
  }
}
