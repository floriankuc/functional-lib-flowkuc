import { Just } from '../containers/Just';

describe('Just', () => {
  const just = new Just('Just');
  it('constructs correctly', () => {
    expect(just).toBeInstanceOf(Just);
    expect(just.isNothing()).toBe(false);
  });
  it('wraps a value correctly', () => {
    expect(just.map(() => 'value').valueOf()).toBe('value');
  });
});
