/*!
 * array-sum <https://github.com/jonschlinkert/array-sum>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

module.exports = function arraySum(arr) {
  if(arr.length == 0) return 0;
  return arr.reduce(function(a, b, i, c) {
    a = typeof a === 'number' ? a : 0;
    b = typeof b === 'number' ? b : 0;
    return a + b;
  });
};