const should = require('chai').Should();
const contains = require('../../lib/operators').contains;
const equals = require('../../lib/operators').equals;
const gt = require('../../lib/operators').gt;
const gte = require('../../lib/operators').gte;
const lt = require('../../lib/operators').lt;
const lte = require('../../lib/operators').lte;

describe('Operators module tests', () => {

  it('contains(val1, val2) should return true `val1` contains `val2` otherwise false', () => {
    const val1 = [1, 2, 3];
    contains(val1, 1).should.be.true;
    contains(val1, 10).should.be.false;

    (() => {
      contains('', 10);
    }).should.throw('`val1` must be an array');

  });

  it('equals(val1, val2) should return true `val1` equals `val2` otherwise false', () => {
    equals(1, 1).should.be.true;
    equals(1, 10).should.be.false;
  });

  it('gt(val1, val2) should return true `val1` is greater than `val2` otherwise false', () => {
    gt(10, 1).should.be.true;
    gt(1, 10).should.be.false;
    gt(1, 1).should.be.false;
  });

  it('gte(val1, val2) should return true `val1` is greater than or equal to `val2` otherwise false', () => {
    gte(10, 1).should.be.true;
    gte(1, 10).should.be.false;
    gte(1, 1).should.be.true;
  });

  it('lt(val1, val2) should return true `val1` is lower than `val2` otherwise false', () => {
    lt(10, 1).should.be.false;
    lt(1, 10).should.be.true;
    lt(1, 1).should.be.false;
  });

  it('lte(val1, val2) should return true `val1` is lower than or equal to `val2` otherwise false', () => {
    lte(10, 1).should.be.false;
    lte(1, 10).should.be.true;
    lte(1, 1).should.be.true;
  });

});
