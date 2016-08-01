const contains = (val1, val2) => {
  if (!Array.isArray(val1)) {
    throw new Error('`val1` must be an array');
  }
  return val1.indexOf(val2) > -1;
};

const equals = (val1, val2) => val1 === val2;

module.exports = {
  contains: contains,
  equals: equals
};