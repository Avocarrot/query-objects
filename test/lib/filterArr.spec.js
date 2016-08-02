'use strict'

const should = require('chai').Should();
const filter = require('../../lib/filterArr');

describe('filter(arr, filters, operator) should', () => {

  const filters = [
    {
      field: 'foo',
      value: 1,
      operator: 'equals'
    },
    {
      field: 'bar',
      value: 'baz',
      operator: 'equals'
    }
  ];

  const arr = [
    {
      foo: 1,
      bar: 'baz'
    },
    {
      foo: 2,
      bar: 'baz'
    },
    {
      foo: 3,
      bar: 'fiz'
    }
  ];

  it('throw an error if `filters` is not an array', () => {
    (() => { 
      filter(arr);
    }).should.throw('`filters` must be an array');

    (() => { 
      filter(arr, 'this is a string');
    }).should.throw('`filters` must be an array');

    (() => { 
      filter(arr, 1234);
    }).should.throw('`filters` must be an array');
  });

  it('throw an error if `filters` contains an object which is not a valid filter', () => {
    (() => {
      filter(arr, [{key: 'value'}], 'every');
    }).should.throw('Object is not a valid filter');
  });

  it('throw an error if `operator` is invalid', () => {
    (() => {
      filter(arr, filters);
    }).should.throw('Invalid operator');

    (() => {
      filter(arr, filters, 'every');
    }).should.not.throw('Invalid operator');

    (() => {
      filter(arr, filters, 'some');
    }).should.not.throw('Invalid operator');
  });

  it('return all the objects in `arr` which satisfy every filter in the array of `filters` given that `operator` is `every`', () => {
    const expected = [arr[0]];
    filter(arr, filters, 'every').should.eql(expected);
  });

  it('return all the objects in `arr` which satisfy at least one of the `filters` given that `operator` is `some`', () => {
    const expected = [arr[0], arr[1]];
    filter(arr, filters, 'some').should.eql(expected);
  });

});
