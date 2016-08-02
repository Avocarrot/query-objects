const filterArr = require('./filterArr');

module.exports = (arr) => {
  if (!Array.isArray(arr)) {
    throw new Error('`arr` must be an array of objects');
  }
  return {
    every: filters => filterArr(arr, filters, 'every'),
    some: filters => filterArr(arr, filters, 'some'),
  };
}