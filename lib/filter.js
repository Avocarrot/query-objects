exports.isValid = f => f.hasOwnProperty('field') && f.hasOwnProperty('value');

exports.isSatisfied = (filter, obj) => {
  const field = filter.field;
  const value = filter.value;
  return obj.hasOwnProperty(field) ? obj[field] === value : false;
};