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

    (() => {
      parseFilter({
        field: 'foo',
        value: 'bar',
        operator: 'equals',
        matchMissing: 'true'
      });
    }).should.throw('`matchMissing` must be a boolean');

    (() => {
      parseFilter({
        field: 'foo',
        value: 'bar',
        operator: 'equals',
        matchEmpty: 'true'
      });
    }).should.throw('`matchEmpty` must be a boolean');
  });

  it('isSatisfied(filter, obj) should return true if `filter` is satisfied by `obj` otherwise false', () => {
    let filter = {field: 'foo', value: 'bar', operator: 'equals'};
    isSatisfied(filter, {'foo': 'bar'}).should.be.true;
    isSatisfied(filter, {'foo': 'baz'}).should.be.false;
    isSatisfied(filter, {'fiz': 'bar'}).should.be.false;

    // Test `matchMissing`
    filter.matchMissing = true;
    isSatisfied(filter, {}).should.be.true;

    // Test `matchEmpty`
    filter.matchEmpty = true;
    isSatisfied(filter, {'foo': null}).should.be.true;
    isSatisfied(filter, {'foo': []}).should.be.true;
    isSatisfied(filter, {'foo': undefined}).should.be.true;
    isSatisfied(filter, {'foo': ''}).should.be.true;
    isSatisfied(filter, {'foo': {}}).should.be.true;

  });

});