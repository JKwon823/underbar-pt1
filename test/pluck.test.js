const _ = require('../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
      { name: 'Harriet', age: 12},
      { name: 'Lazarus', age: 999},
      { name: 'Bethany', age: 14}
    ];
    const result = _.pluck(people, 'age');
    expect(result).toEqual([12, 999, 14]);
  });

  it('returns an array of just teams, given an array of players objects', () => {
    const players = [
      { name: 'Lebron James', team: 'Cavs'},
      { name: 'Kevin Durant', team: 'Warriors'},
      { name: 'John Wall', team: 'Wizards'}
    ];
    const result = _.pluck(players, 'team');
    expect(result).toEqual(['Cavs', 'Warriors', 'Wizards']);
  });
});
