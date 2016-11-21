const contains = (val1, val2) => {
  if (!Array.isArray(val1)) {
    throw new Error('`val1` must be an array');
  }
  return val1.indexOf(val2) > -1;
};

const notcontains = (val1, val2) => {
  return !contains(val1, val2);
};

const equals = (val1, val2) => val1 === val2;
const ne = (val1, val2) => val1 !== val2;
const gt = (val1, val2) => val1 > val2;
const gte = (val1, val2) => val1 >= val2;
const lt = (val1, val2) => val1 < val2;
const lte = (val1, val2) => val1 <= val2;

module.exports = {
  contains,
  notcontains,
  equals,
  ne,
  gt,
  gte,
  lt,
  lte
};
