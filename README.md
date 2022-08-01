# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @slcq/lotide`

**Require it:**

`const _ = require('@slcq/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual(array1, array2)`: Console.logs an appropriate message to the console, based on a perfect match.
* `assertEqual(actual, expected)`: Compares two values, and console.logs an appropriate message to the console, based on a perfect match.
* `assertObjectEqual(object1, object2)`: Console.logs an appropriate message to the console, based on a perfect match.
* `countLetters(string)`: Returns a count of each of the letters in the string.
* `countOnly(array, object)`: Returns an object containing counts of everything that the input object listed.
* `eqArrays(array1, array2)`: Returns true or false based on a perfect match.
* `eqObjects(object1, object2)`: Returns true or false based on a perfect match.
* `findKey(object, callback)`: Scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it returns undefined.
* `findKeyByValue(object, value)`: Scans the object and returns the first key which contains the given value. If no key with that given value is found, then it returns undefined.
* `head(array)`: Returns the first item in an array.
* `letterPositions(string)`: determines the letters of a given string, and at what positions those letters occur. Returns an object where the letter is a key, and its value is all the indices in the string where each character is found.
* `map(array, callback)`: Returns a new array after the callback function changes the values of the original array.
* `middle(array)`: Return the middle-most element(s) of the given array.
* `tail(array)`: Returns the tail of an array (everything except for the first item (head) of the provided array).
* `takeUntil(array, callback)`: Returns a slice of the array with elements taken from the beginning until the callback returns a truthy.
* `without(array, itemsToRemoveArray)`: Returns a subset of a given array, removing the unwanted elements included in the itemsToRemoveArray.