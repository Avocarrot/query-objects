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

  return filter;
};

exports.isSatisfied = (filter, obj) => {
  const field = filter.field;
  const value = filter.value;
  const operator = operators[filter.operator];
  return obj.hasOwnProperty(field) ? operator(obj[field], value) : false;
};