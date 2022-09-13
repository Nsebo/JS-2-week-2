// original array

const arrayValues = [5, 7, 9, 16];
// New array called "new array" that contains the
// results from the `map` method

// const newArray = arrayValues.map(/*code here */);

// callback function

// 1. anonymous function (mostly used once)
// 2. separate named function.

// const values = [100, 200, 300, 400];
// const newValues = values.map(function (element, index, array) {
//   // modify and return element
//   return index;
// });

// console.log(newValues);

// arrow function¨
// const new2Values = values.map((element, index, array) => {
//   // modify and return element

//   return array;
// });

// console.log(new2Values);

// 2. separate callback function
const values = [100, 200, 300, 400, 500];

function callbackFn(element, index, array) {
  // Modify and return element here
}

const newArray = values.map(callbackFn);
