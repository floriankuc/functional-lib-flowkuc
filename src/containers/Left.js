import { Monad } from './Monad';

export class Left extends Monad {
  isLeft() {
    return true;
  }
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  map(fn) {
    return this;
  }
}
