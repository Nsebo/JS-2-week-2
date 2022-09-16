// Syntax
//const values = [100, 200, 300, 400, 500];

const newArray = values.find((element, index, array) => {
  // Return true if you find the element you want
  // Return false if you haven't found the element you want
});

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const foundValue = values.find((currentValue, index) => {
  console.log('Current index: ', index);
  if (currentValue === 3) {
    return true;
  }
});

console.log('Found value:', foundValue);
// The console logs the following:
// Current index:  0
// Current index:  1
// Current index:  2
// Current index:  3
// Found value: 3
