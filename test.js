/*!
 * array-sum <https://github.com/jonschlinkert/array-sum>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

var assert = require('assert');
var arraySum = require('./');

it('should return 0 when the value is undefined.', function () {
  assert.equal(arraySum(), 0);
});

it('should return 0 when an empty array is passed.', function () {
  assert.equal(arraySum([]), 0);
});

it('should add the numbers in the array.', function () {
  assert.equal(arraySum([1, 2, 3, 4, 5]), 15);
});

it('should add the numbers in the array.', function () {
  assert.equal(arraySum(['-1.1', 10]), 8.9);
  assert.equal(arraySum(['0', 1]), 1);
  assert.equal(arraySum(['012', 1]), 13);
  assert.equal(arraySum(['0xff', 1]), 256);
  assert.equal(arraySum(['1', 1]), 2);
  assert.equal(arraySum(['1.1', 1]), 2.1);
  assert.equal(arraySum(['10', 1]), 11);
  assert.equal(arraySum(['10.10', 1]), 11.10);
  assert.equal(arraySum(['100', 1]), 101);
  assert.equal(arraySum(['5e3', 1]), 5001);
  assert.equal(arraySum(['Infinity', 5]), 5);
  assert.equal(arraySum([-1.1, 10]), 8.9);
  assert.equal(arraySum([0, 1]), 1);
  assert.equal(arraySum([0xff, 1]), 256);
  assert.equal(arraySum([1, 1]), 2);
  assert.equal(arraySum([1.1, 1]), 2.1);
  assert.equal(arraySum([10, 1]), 11);
  assert.equal(arraySum([10.10, 1]), 11.10);
  assert.equal(arraySum([100, 1]), 101);
  assert.equal(arraySum([5e3, 1]), 5001);
  assert.equal(arraySum([Infinity, 1]), 1);
  assert.equal(arraySum([parseFloat('012'), 1]), 13);
  assert.equal(arraySum([parseInt('25a'), 1]), 26);
});

it('should work with strings', function () {
  assert.equal(arraySum(['1', '2', '3', '4', '5']), 15);
});

it('should work with a mixture of numbers and strings', function () {
  assert.equal(arraySum(['1', 2, '3', 4, '5']), 15);
});

it('should ignore non-numbers.', function () {
  assert.equal(arraySum([1, 'foo', 2, 3, 4, {}, 5]), 15);
});
