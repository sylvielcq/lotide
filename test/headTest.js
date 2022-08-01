// Require the assertEqual function from its original file
const assertEqual = require('../assertEqual');

// Require the head function from its original file
const head = require('../head');


// TEST CODE FOR HEAD FUNCTION
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);