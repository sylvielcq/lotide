// Require the assertEqual function from its original file
const assertEqual = require('../assertEqual');

// Require the head function from its original file
const eqArrays = require('../eqArrays');



// TEST CODE FOR EQARRAY
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 3]), false);
assertEqual(eqArrays(["1", 2, 3], ["1", 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [1, 2, "3"]), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false);