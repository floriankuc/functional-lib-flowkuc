import { Container } from '../src/Container';

describe('Container', () => {
  const container = Container.of('TestValue');
  it('wraps values correctly', () => {
    expect(container).toBeInstanceOf(Container);
    expect(container.valueOf()).toEqual('TestValue');
  });
  it('logs itself', () => {
    expect(container.toString()).toEqual('Container(TestValue)');
  });
  it('maps with functions', () => {
    expect(container.map((v) => v.slice(0, 1))).toEqual('T');
  });
});
