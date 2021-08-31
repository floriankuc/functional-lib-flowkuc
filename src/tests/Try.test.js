import { Left } from '../containers/Left';
import { Right } from '../containers/Right';
import { Try } from '../containers/Try';

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
