const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('removes extra copies of strings', () => {
    const elements = ['he', 'he', 'ho', 'ho', 'ha', 'hue'];
    expect(_.uniq(elements)).toEqual(['he', 'ho', 'ha', 'hue']);
  });

});
