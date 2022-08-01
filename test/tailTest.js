// Require the assertEqual function from its original file
const assertEqual = require('../assertEqual');

// Require the head function from its original file
const tail = require('../tail');



// TEST CODE FOR TAIL
console.log(tail([1, 2, 3, 4]));
console.log(tail([1]));
console.log(tail([]));

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!