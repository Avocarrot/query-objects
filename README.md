# query-objects

[![NPM](https://nodei.co/npm/query-objects.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/query-objects/)

## Purpose

A utility library which filters objects from an array of objects based on a set of filter conditions.

```javascript
  const query = require('query-objects');

  const users = [
    {
      firstName: 'George',
      lastName: 'Eracleous',
      age: 28
    },
    {
      firstName: 'Erica',
      lastName: 'Archer',
      age: 50
    },
    {
      firstName: 'Leo',
      lastName: 'Andrews',
      age: 20
    }
  ];

  const filters = [
    {
      field: 'age',
      value: 30,
      operator: 'lt'
    },
    {
      field: 'firstName',
      value: 'Erica',
      operator: 'equals'
    }
  ];

  // Filter all users that are less than 30 years old AND their first name is Erica
  const res = query(users).every(filters);

  // Filter all users that are less than 30 years old OR their first name is Erica
  const res = query(users).some(filters);

```

## Contents

- [Installation](#installation)
- [Usage](#usage)
- [Filters](#filters)
- [Examples](#examples)
- [Contributing](#contributing)

## Installation

```npm install filter-objects```

## Usage 

1. Create a query object by using `query(arr)` where `arr` is the array of objects you want to query.

```javascript
const q = query(arr)
```

2. Finally get the result array using: 

```javascript
q.every(filters); //returns an array of all objects in `arr` that satisfy EVERY filter

q.some(filters); //returns an array of all objects in `arr` that satisfy SOME of the filters
```

## Filters

`field` - The name of the property we will filter on

`value` - The value of the property we will filter on

`operator` - The filter operator. Supported operators `equals`, `contains`, `gt`, `gte`, `lt`, `lte`

## Contributing

This project is work in progress and we'd love more people contributing to it. 

1. Fork the repo
2. Apply your changes
3. Write tests
4. Submit your pull request

For feedback or suggestions you can drop us a line at support@avocarrot.com
