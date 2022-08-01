// ASSERTION FUNCTIONS
// eqArrays function that compares 2 arrays.
const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      return false;
    }
  }
  return true;
};

// assertArraysEqual function that asserts that 2 arrays are equal.
const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed: ${arr1} equal to ${arr2}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${arr1} not equal to ${arr2}`);
  }
};




// ACTUAL FUNCTION
// The map function returns a new array based on the results of the callback function
const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


// TEST CODE
const words = ["ground", "control", "to", "major", "tom"];

assertArraysEqual(map(words, word => word[0]), ['g', 'c', 't', 'm', 't']);
assertArraysEqual(map(words, word => word[1]), ["r", "o", "o", "a", "o"]);
assertArraysEqual(map(words, word => word + "z"), ["groundz", "controlz", "toz", "majorz", "tomz"]);


module.exports = map;