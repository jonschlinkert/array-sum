# array-sum [![NPM version](https://badge.fury.io/js/array-sum.svg)](http://badge.fury.io/js/array-sum)

> Add up all of the numbers in an array of numbers. Works when non-numbers are present as well.

## Install
### Install with [npm](npmjs.org):

```bash
npm i array-sum --save-dev
```

## Usage

```js
var arraySum = require('array-sum');

arraySum([1, 2, 3, 4, 5]);
//=> 15

arraySum(['1', '2', 3, '4', 5]);
//=> 15

arraySum([1, 'foo', 2, 3, 4, {}, 5]);
//=> 15
```

## Author

**Jon Schlinkert**
 
+ [github/jonschlinkert](https://github.com/jonschlinkert)
+ [twitter/jonschlinkert](http://twitter.com/jonschlinkert) 

## License
Copyright (c) 2014-2015 Jon Schlinkert  
Released under the MIT license

***

_This file was generated by [verb](https://github.com/assemble/verb) on January 14, 2015._