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
const letterPositions = function(sentence) {
  // Declare a new empty object called "results"
  const results = {};
  // Loop over each index in the string
  for (let i = 0; i < sentence.length; i++) {
    // If the char located at i index isn't a space (as we do not want to count those)...
    if (sentence.charAt(i) !== " ") {
      // and if we already encountered the char and it appears as property in the results object...
      if (results[sentence.charAt(i)]) {
        // push the char index in the key's value array
        results[sentence.charAt(i)].push(i);
      // or else if nothing was there yet...
      } else {
        // set a property as that char, and set array to char index
        results[sentence.charAt(i)] = [i];
      }
    }
  }
  return results;
};



// TEST CODE
assertArraysEqual(letterPositions("hello").e, [1]);
assertArraysEqual(letterPositions("hello").l, [2, 3]);
assertArraysEqual(letterPositions("lighthouse in the house").h, [3, 5, 15, 18]);

module.exports = letterPositions;
