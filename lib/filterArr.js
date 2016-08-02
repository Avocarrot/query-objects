const parseFilter = require('./filter').parseFilter;
const isSatisfied = require('./filter').isSatisfied;
const isValidOperator = o => ~['every', 'some'].indexOf(o);

const match = (filters, operator) => {
  return (obj) => {
    return filters[operator](f => isSatisfied(f, obj));
  };
};

module.exports = (arr, filters, operator) => {
  if (!Array.isArray(filters)) {
    throw new Error('`filters` must be an array of filters');
  }

  if (!isValidOperator(operator)) {
    throw new Error('Invalid operator');
  }

  const parsedFilters = filters.map(f => parseFilter(f));
  const matches = match(parsedFilters, operator);
  return arr.filter(matches);
};