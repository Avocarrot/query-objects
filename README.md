# filter-objects

## Purpose

Given an array of objects returns those that satisfy some or all desired filters.

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)

## Installation

```npm install filter-objects```

## Usage

- ```filter(arr, filters, operator)```

Returns an array of all the objects in `arr` that satisfy the `filters`. `operator` can take two values `every` or 'some'. If 'every' is used then the returned objects satisfy *every* filter or alternatively if 'some' is used then the returned objects satisfy at least one of the filters.

### Examples

```javascript
  const filters = [
    {
      field: 'foo',
      value: 1
    },
    {
      field: 'bar',
      value: 'baz'
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