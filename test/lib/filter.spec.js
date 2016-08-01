'use strict'

const should = require('chai').Should();
const parseFilter = require('../../lib/filter').parseFilter;
const isSatisfied = require('../../lib/filter').isSatisfied;

describe('Filter module tests', () => {

  it('parseFilter(filter) should a valid filter otherwise should throw errors', () => {

    const validFilter = {
      field: 'foo',
      value: 'bar',
      operator: 'equals'
    };

    parseFilter(validFilter).should.eql(validFilter);

    (() => {
      parseFilter({
        foo: 'bar'
      });
    }).should.throw('Object is not a valid filter');

    (() => {
      parseFilter({
        field: 'foo',
        value: 'bar',
        operator: 'wrong'
      });
    }).should.throw('Invalid filter operator');
  });

  it('isSatisfied(filter, obj) should return true if `filter` is satisfied by `obj` otherwise false', () => {
    isSatisfied({field: 'foo', value: 'bar', operator: 'equals'}, {'foo': 'bar'}).should.be.true;
    isSatisfied({field: 'foo', value: 'bar', operator: 'equals'}, {'foo': 'baz'}).should.be.false;
  });

});
