'use strict'

const should = require('chai').Should();
const isValid = require('../../lib/filter').isValid;
const isSatisfied = require('../../lib/filter').isSatisfied;

describe('Filter module Tests', () => {

  it('validate filters', () => {
    isValid({
      foo: 'bar'
    }).should.be.false;

    isValid({
      field: 'foo',
      value: 'bar'
    }).should.be.true;
  });

  it('isSatisfied(filter, obj) return true if `filter` is satisfied by `obj` otherwise false', () => {
    isSatisfied({field: 'foo', value: 'bar'}, {'foo': 'bar'}).should.be.true;
    isSatisfied({field: 'foo', value: 'bar'}, {'foo': 'baz'}).should.be.false;
  });

});
