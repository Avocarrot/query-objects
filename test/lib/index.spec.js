const should = require('chai').Should();
const query = require('../../lib');

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

  it('query(arr) should return a query object', () => {
    query([]).should.have.property('every');
    query([]).should.have.property('some');
  });

  it('throw an error if `arr` is not an array', () => {
    (() => {
      query();
    }).should.throw('`arr` must be an array of objects');

    (() => { 
      query('this is a string');
    }).should.throw('`arr` must be an array of objects');

    (() => { 
      query(1234);
    }).should.throw('`arr` must be an array of objects');
  });

  it('query(arr).every(filters) should return all results that satisfy all filters', () => {
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
    query(people).every(filters).should.eql(expected);
  });

  it('query(arr).some(filters) should return all results that satisfy at least one of the filters', () => {
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
    query(people).some(filters).should.eql(expected);
  });

});