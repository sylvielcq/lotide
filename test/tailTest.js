// Require the head function from its original file
const tail = require('../tail');

// TEST CODE USING MOCHA AND CHAI
const assert = require('chai').assert;

describe("#tail", () => {
  it("returns [2, 3, 4] for [1, 2, 3, 4]", () => {
    assert.deepEqual(tail([1, 2, 3, 4]), [2, 3, 4]);
  });
  it("returns an empty array for [1]", () => {
    assert.deepEqual(tail([1]), []); 
  });
  it("returns an empty array if given an empty array", () => {
    assert.deepEqual(tail([]), []);
  })
});



/*
// OLD TEST CODE FOR TAIL

// Require the assertEqual function from its original file
const assertEqual = require('../assertEqual');

console.log(tail([1, 2, 3, 4]));
console.log(tail([1]));
console.log(tail([]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/