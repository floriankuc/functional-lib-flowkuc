import { demethodise } from '../fns/demethodise';

describe('Demethodise', () => {
  const dMap = demethodise(Array.prototype.map);
  const dToUppercase = demethodise(String.prototype.toUpperCase);
  it('demethodises a method into a function', () => {
    const result = dMap('TEST', dToUppercase);
    expect(result).toEqual(['T', 'E', 'S', 'T']);
  });
});
