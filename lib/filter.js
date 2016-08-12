const operators = require('./operators');
const isValid = f => f.hasOwnProperty('field') && f.hasOwnProperty('value') && f.hasOwnProperty('operator');
const isValidOperator = o => operators.hasOwnProperty(o);

exports.parseFilter = (filter) => {
  if (!isValid(filter)) {
    throw new Error('Object is not a valid filter');
  }

  if (!isValidOperator(filter.operator)) {
    throw new Error('Invalid filter operator');
  }

  filter.matchMissing = !!filter.matchMissing;
  filter.matchEmpty = !!filter.matchEmpty;

  return filter;
};


const isEmpty = (val) => {
  if (val == null) {
    return true;
  }
  if (Array.isArray(val) || typeof val === 'string') {
    return val.length === 0;
  }
  if (typeof val === 'object') {
    return Object.keys(val).length === 0;
  }
  return false;
};

exports.isSatisfied = (filter, obj) => {
  const field = filter.field;
  const value = filter.value;
  const operator = operators[filter.operator];
  const matchMissing = filter.matchMissing || false;
  const matchEmpty = filter.matchEmpty || false;

  if (!obj.hasOwnProperty(field)) {
    return matchMissing;
  }

  if (isEmpty(obj[field])) {
    return matchEmpty;
  }

  return operator(obj[field], value);
};