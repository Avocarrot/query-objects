const filterArr = require('./filterArr');

module.exports = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('`arr` must be an array of objects');
  }
  return {
    and: filters => filterArr(arr, filters, 'every'),
    or: filters => filterArr(arr, filters, 'some'),
  };
};