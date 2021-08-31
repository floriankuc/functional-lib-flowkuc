import { Left } from '../src/Left.js';

describe('Left', () => {
  const left = new Left();
  it('returns isLeft() === true', () => {
    expect(left.isLeft()).toBe(true);
  });
  it('returns itself on map()', () => {
    expect(left.map(() => 'some value')).toBe(left);
  });
});
