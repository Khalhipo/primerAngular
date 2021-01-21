import { NumsPipe } from './nums.pipe';

describe('NumsPipe', () => {
  it('create an instance', () => {
    const pipe = new NumsPipe();
    expect(pipe).toBeTruthy();
  });
});
