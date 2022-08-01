// FUNCTIONS TO REUSE

// Function eqArrays which takes in two arrays and returns true or false,
// based on a perfect match.

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

// Function eqObjects: returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!

const eqObjects = function(object1, object2) {
  // Check if the 2 objects have the same number of keys
  const object1Keys = Object.keys(object1);
  const object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) {
    return false;
  }
  // Check if the keys have the same value in both objects
  for (let key of object1Keys) {
    // First check if keys are arrays, and if yes compare them
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      let isEqual = eqArrays(object1[key], object2[key]);
      return isEqual;
    // Otherwise compare keys as primitives
    } else if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};


// ACTUAL FUNCTION

// Verifies that 2 objects are the same
const assertObjectsEqual = function(actual, expected) {
  // Import the util library, so that we can use it later to clearly output objects in our console.log
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} equal to ${inspect(expected)}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${inspect(actual)} not equal to ${inspect(expected)}`);
  }
};

// TEST CODE
const testObject1 = {
  a: "1",
  b: "2"
};

const testObject2 = {
  b: "2",
  a: "1"
};

const testObject3 = {
  a: "1",
  b: "3"
};

assertObjectsEqual(testObject1, testObject2);
assertObjectsEqual(testObject1, testObject3);


module.exports = assertObjectsEqual;