// Require the head function from its original file
const head = require('../head');

// TEST CODE USING MOCHA AND CHAI
const assert = require('chai').assert;

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });
  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });
});



// OLD TEST CODE FOR HEAD FUNCTION

// Require the assertEqual function from its original file
// const assertEqual = require('../assertEqual');

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
// assertEqual(head([]), undefined);