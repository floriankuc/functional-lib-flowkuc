import { _map } from '../fns/_map';

describe('_map', () => {
  const mockObject = {
    id: '1',
    data: 'value',
  };

  const mockObjectArray = [mockObject];

  it('maps over array of type', () => {
    const result = _map(mockObjectArray, (obj) => obj.id);
    expect(result).toEqual(['1']);
  });

  it('maps over single value of type', () => {
    const result = _map(mockObject, (obj) => obj.id);
    expect(result).toEqual(['1']);
  });

  it('procudes the same result for an array of T with a length of 1 and one instance of T', () => {
    const result1 = _map(mockObjectArray, (obj) => obj.id);
    const result2 = _map(mockObjectArray, (obj) => obj.id);
    expect(result1).toEqual(result2);
  });
});
