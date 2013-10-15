var pluck = require('lodash.pluck');

var data = require('../../data');

var result = pluck(data, 'name');

console.log(result);
