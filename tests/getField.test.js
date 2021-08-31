import { getField } from '../src/getField.js';

describe('getField', () => {
  const obj = {
    key1: 'val1',
    key2: 'val2',
  };
  it('access object fields', () => {
    expect(getField('key1')(obj)).toEqual(obj.key1);
  });
});
