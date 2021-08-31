import { Functor } from './Functor';
import { Just } from './Just';
import { Nothing } from './Nothing';

export class Maybe extends Functor {
  constructor(x) {
    return x === undefined || x === null ? new Nothing() : new Just(x);
  }
  static of(x) {
    return new Maybe(x);
  }
}
