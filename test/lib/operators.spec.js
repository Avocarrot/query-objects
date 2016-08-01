const should = require('chai').Should();
const contains = require('../../lib/operators').contains;
const equals = require('../../lib/operators').equals;

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

});
