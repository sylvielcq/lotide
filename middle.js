//ASSERTION FUNCTIONS
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
const middle = function(arr) {
  let result = [];
  if (arr.length === 1 || arr.length === 2) {
    return [];
  } else if (arr.length % 2 === 1) {
    let x = Math.floor(arr.length / 2);
    result.push(arr[x]);
    return result;
  } else if (arr.length % 2 === 0) {
    let y = arr.length/2;
    return arr.splice(y - 1, 2);
  }
}


// TEST CODE
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
