import { Left } from './Left';
import { Monad } from './Monad';
import { Right } from './Right';

export class Either extends Monad {
  constructor(left, right) {
    return right === undefined || right === null ? new Left(left) : new Right(right);
  }
  static of(left, right) {
    return new Either(left, right);
  }
}
