import { Right } from '../containers/Right';

describe('Right', () => {
  const right = new Right();
  it('produces correct values', () => {
    expect(right.isLeft()).toEqual(false);
    expect(right.map(() => 2).valueOf()).toBe(2);
  });
});
