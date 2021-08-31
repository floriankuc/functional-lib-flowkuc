import { Functor } from './Functor.js';
import { Just } from './Just.js';
import { Nothing } from './Nothing.js';

export class Maybe extends Functor {
  constructor(x) {
    return x === undefined || x === null ? new Nothing() : new Just(x);
  }
  static of(x) {
    return new Maybe(x);
  }
}
