// Require the head function from its original file
const middle = require('../middle');

// TEST CODE USING MOCHA AND CHAI
const assert = require('chai').assert;

describe("#middle", () => {
  it("returns an empty array for arrays with one element", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns an empty array for arrays with two elements", () => {
    assert.deepEqual(middle([1, 2]), []); 
  });
  it("returns the single middle element for arrays with odd numbes", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  })
  it("returns an array containing the two elements in the middle for arrays with an even number of elements", () => {
    assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
  })
});



/*
// OLD TEST CODE FOR MIDDLE

// Require the assertEqual function from its original file
const assertArraysEqual = require('../assertArraysEqual');

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
*/