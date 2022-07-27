// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
const countLetters = function(string) {
  // Declare a new empty object called "results"
  const results = {};
  // Loop over all the characters in the string
  for (const char of string) {
    // If char isn't a space (as we do not want to count those)
    if (char !== " ") {
      // if we already encounted the char and it appears as property in the results object...
      if (results[char]) {
        // increment the counter for the char
        results[char] += 1;
      // else if nothing was there yet...
      } else {
        // set a property with that char key, and set count to 1
        results[char] = 1;
      }
    }
  }
  return results;
};


// TEST CODE
const result1 = countLetters('lighthouse in the house');
console.log(result1);

assertEqual(result1["h"], 4);
assertEqual(result1["o"], 2);
assertEqual(result1["x"], undefined);
assertEqual(result1["n"], 1);