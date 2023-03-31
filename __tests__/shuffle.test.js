const { shuffle } = require('../src/shuffle')

describe('shuffle should...', () => {
  it('shuffle the items around', () => {
    const arr = [1, 2, 3];
    const result = shuffle(arr);
    expect(result).not.toEqual(arr);
  });

  it('return an array', () => {
    const result = shuffle([]);
    expect(Array.isArray(result)).toBe(true);
  });
  
})