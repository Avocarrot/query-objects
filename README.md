# filter-objects

## Purpose

Given an array of objects returns those that satisfy some or all desired filters.

## Contents

- [Installation](#installation)
- [Filtering objects](#filtering-objects)
- [Constructing filters](#constructing-filters)
- [Examples](#examples)
- [Contributing](#contributing)

## Installation

```npm install filter-objects```

## Filtering objects 

```filter(arr, filters, operator)```

Returns an array of all the objects in `arr` that satisfy the `filters`. `operator` can take two values `every` or 'some'. If 'every' is used then the returned objects satisfy *every* filter or alternatively if 'some' is used then the returned objects satisfy at least one of the filters.

## Constructing filters

`field` - The name of the property we will filter on

`value` - The value of the property we will filter on

`operator` - The filter operator. Supported operators `equals`, `contains`, `gt`, `gte`, `lt`, `lte`

## Examples

```javascript
  const filters = [
    {
      field: 'foo',
      value: 1,
      operator: 'equals'
    },
    {
      field: 'bar',
      value: 'baz',
      operator: 'equals'
    }
  ];

  const arr = [
    {
      foo: 1,
      bar: 'baz'
    },
    {
      foo: 2,
      bar: 'baz'
    },
    {
      foo: 3,
      bar: 'fiz'
    }
  ];

  let res = filter(arr, filters, 'every');
```


## Contributing

This project is work in progress and we'd love more people contributing to it. 

1. Fork the repo
2. Apply your changes
3. Write tests
4. Submit your pull request

For feedback or suggestions you can drop us a line at support@avocarrot.com