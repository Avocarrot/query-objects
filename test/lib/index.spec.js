const should = require('chai').Should();
const queryable = require('../../lib');

describe('Module Tests', () => {

  const people = [
    {
      name: 'George',
      lastName: 'Eracleous',
      age: 28
    },
    {
      name: 'Erica',
      lastName: 'Archer',
      age: 20
    },
    {
      name: 'George',
      lastName: 'Makkoulis',
      age: 57
    },
    {
      name: 'Bob',
      lastName: 'Smith',
      age: 32
    }
  ];

  it('queryable(arr) should return a queryable object', () => {
    queryable([]).should.have.property('and');
    queryable([]).should.have.property('or');
  });

  it('throw an error if `arr` is not an array', () => {
    (() => {
      queryable();
    }).should.throw('`arr` must be an array of objects');

    (() => { 
      queryable('this is a string');
    }).should.throw('`arr` must be an array of objects');

    (() => { 
      queryable(1234);
    }).should.throw('`arr` must be an array of objects');
  });

  it('queryable(arr).and(filters) should return all results that satisfy all filters', () => {
    const filters = [
      {
        field: 'name',
        value: 'George',
        operator: 'equals'
      },
      {
        field: 'age',
        value: 30,
        operator: 'lt'
      }
    ];
    const expected = [people[0]];
    queryable(people).and(filters).should.eql(expected);
  });

  it('queryable(arr).or(filters) should return all results that satisfy at least one of the filters', () => {
    const filters = [
      {
        field: 'name',
        value: 'George',
        operator: 'equals'
      },
      {
        field: 'age',
        value: 30,
        operator: 'lt'
      }
    ];
    const expected = [people[0], people[1], people[2]];
    queryable(people).or(filters).should.eql(expected);
  });

});