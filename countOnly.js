// ASSERTION FUNCTION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`❌❌❌ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// ACTUAL FUNCTION
// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  // Declare a new empty object called "results"
  const results = {};
  // Loop over all the times in the array
  for (const item of allItems) {
    // If the item is found in the itemsToCount object...
    if (itemsToCount[item]) {
      // if we already encounted the item in the results object...
      if (results[item]) {
        // increment the counter for the item
        results[item] += 1;
      // else if nothing was there yet...
      } else {
        // set a property with that string key, and set count to 1
        results[item] = 1;
      }
    }
  }
  return results;
}

// TEST CODE
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);