import { Left } from './Left.js';
import { Monad } from './Monad.js';
import { Right } from './Right.js';

export class Either extends Monad {
  constructor(left, right) {
    return right === undefined || right === null ? new Left(left) : new Right(right);
  }
  static of(left, right) {
    return new Either(left, right);
  }
}
