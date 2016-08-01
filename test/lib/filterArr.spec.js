'use strict'

const should = require('chai').Should();
const filter = require('../../lib/filterArr');

describe('filter(arr, filters, operator) should', () => {

  const filters = [
    {
      field: 'foo',
      value: 1
    },
    {
      field: 'bar',
      value: 'baz'
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

  it('throw an error if `arr` is not an array', () => {
    (() => {
      filter()();
    }).should.throw('`arr` must be an array of objects');

    (() => { 
      filter(null)();
    }).should.throw('`arr` must be an array of objects');

    (() => { 
      filter(1234)();
    }).should.throw('`arr` must be an array of objects');
  });

  it('throw an error if `filters` is not an array', () => {
    (() => { 
      filter([])();
    }).should.throw('`filters` must be an array');

    (() => { 
      filter([], null)();
    }).should.throw('`filters` must be an array');

    (() => { 
      filter([], 1234)();
    }).should.throw('`filters` must be an array');
  });

  it('throw an error if `filters` contains an object which is not a valid filter', () => {
    (() => {
      filter([], [{key: 'value'}])();
    }).should.throw('Invalid filter object in `filters` array');
  });

  it('throw an error if `operator` is invalid', () => {
    (() => {
      filter([], [], 'wrong')();
    }).should.throw('Invalid operator');

    (() => {
      filter([], [], 'every')();
    }).should.not.throw('Invalid operator');

    (() => {
      filter([], [], 'some')();
    }).should.not.throw('Invalid operator');
  });

  it('return all the objects in `arr` which satisfy every filter in the array with filters `f` given that `operator` is `every`', () => {
    const expected = [arr[0]];
    filter(arr, filters, 'every').should.eql(expected);
  });

  it('return all the objects in `arr` which satisfies at least one of the filters in the array with filters `f` given that `operator` is `some`', () => {
    const expected = [arr[0], arr[1]];
    filter(arr, filters, 'some').should.eql(expected);
  });

});
