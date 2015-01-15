/*!
 * array-sum <https://github.com/jonschlinkert/array-sum>
 *
 * Copyright (c) 2014-2015, Jon Schlinkert.
 * Licensed under the MIT License
 */

'use strict';

var isNumber = require('is-number');

module.exports = function arraySum(arr) {
  if (!Array.isArray(arr)) {
    return 0;
  }

  var len = arr.length;
  var res = 0;

  while (len--) {
    var n = arr[len];
    if (isNumber(n) && isFinite(n)) {
      res += (+n);
    }
  }

  return res;
};