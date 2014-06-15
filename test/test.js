/*!
 * array-sum <https://github.com/jonschlinkert/array-sum>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

var expect = require('chai').expect;
var arraySum = require('../');

it('should add the numbers in the array.', function () {
  var actual = arraySum([1, 2, 3, 4, 5]);
  expect(actual).to.eql(15);
});

it('should add the numbers in an array with non-numbers.', function () {
  var actual = arraySum([1, 'foo', 2, 3, 4, {}, 5]);
  expect(actual).to.eql(15);
});
