import { Left } from '../src/Left.js';
import { Right } from '../src/Right.js';
import { Try } from '../src/Try.js';

describe('Try', () => {
  const tryLeft = Try.of('value');
  const tryRight = Try.of(() => 'value', 'value');
  const getFieldWithTry = (attr) => (obj) => Try.of(() => obj[attr], 'NULL OBJECT');
  const x = getFieldWithTry('somefield')(null);

  it('constructs correctly', () => {
    expect(tryLeft).toBeInstanceOf(Left);
    expect(tryRight).toBeInstanceOf(Right);
    expect(tryRight.toString()).toBe('Right(value)');
    expect(x.isLeft()).toBe(true);
    expect(x.toString()).toBe('Left(NULL OBJECT)');
  });
});
