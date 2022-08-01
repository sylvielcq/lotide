// ACTUAL FUNCTION: ASSERTEQUAL
// Compares 2 values (string or numbers)
// Prints out a message telling us if they match or not.
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};



module.exports = assertEqual;