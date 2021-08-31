import { Either } from '../src/Either.js';
import { Left } from '../src/Left.js';
import { Right } from '../src/Right.js';

describe('Either', () => {
  it('contructs a Right if called with appropriate constructor', () => {
    const left = new Left();
    const right = new Right('Right');
    const either = Either.of(left, right);
    expect(either).toBeInstanceOf(Right);
  });
  it('contructs a Left if called with inappropriate constructor', () => {
    const left = new Left();
    const either = Either.of(left);
    expect(either).toBeInstanceOf(Left);
  });
});
