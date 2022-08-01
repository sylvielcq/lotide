// ACTUAL FUNCTION: HEAD
// Creating a function to retrieve the first element (head) of an array.
const head = function(array) {
  if (array === []) {
    return undefined;
  } else {
    return array[0];
  }
};


module.exports = head;