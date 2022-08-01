// Require the assertEqual function from its original file
const assertArraysEqual = require('../assertArraysEqual');

// Require the head function from its original file
const middle = require('../middle');


// TEST CODE FOR MIDDLE
const test1 = middle([1]);
assertArraysEqual(test1, []);

const test2 = middle([1, 2]);
assertArraysEqual(test2, []);

const test3 = middle([1, 2, 3]);
assertArraysEqual(test3, [2]);

const test4 = middle([1, 2, 3, 4, 5]);
assertArraysEqual(test4, [3]);

const test5 = middle([1, 2, 3, 4]);
assertArraysEqual(test5, [2, 3]);

const test6 = middle([1, 2, 3, 4, 5, 6]);
assertArraysEqual(test6, [3, 4]);
