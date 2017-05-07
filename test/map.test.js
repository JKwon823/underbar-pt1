const _ = require('../underbar');

describe('map()', () => {
  it('maps every numbers in an array of numbers to their square', () => {
    const arr = [1, 2, 3, 4, 5];
    const mappedArr = _.map(arr, (el) => el * el);
    expect(mappedArr).toEqual([1, 4, 9, 16, 25]);
  });

  it('maps every element in a mixed array and adds a string', () => {
    const arr = [1, 2, 'three', 'blue', 'green'];
    const mappedArr = _.map(arr, (el) => el + ' fish');
    expect(mappedArr).toEqual(['1 fish', '2 fish', 'three fish', 'blue fish', 'green fish']);
  });
});
