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


// (Option 1) Declare without function
const without = function(source, itemsToRemove) {
  // declare a new array variable
  let newArray = source.slice();
  // loop through both arguments
  for (let i = 0; i < source.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      // check if elements match
      if (source[i] === itemsToRemove[j]) {
        // remove source[i] with splice
        newArray.splice(i, 1);
      }
    }
  }
  return newArray;
};

// (Option 2) Declare without function
// const without = (arr1, arr2) => {
//   const newArray = arr1.filter(item => !arr2.includes(item));
//   return newArray;
// };

// TEST CASES
const test1 = without([1, 2, 3], [1]); // => [2, 3]
assertArraysEqual(test1, [2, 3]);

const test2 = without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
assertArraysEqual(test2, ["1", "2"]);

// TEST CASE - Original array should not be modified
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);