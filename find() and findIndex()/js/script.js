// find()

// Syntax

//const newArray = values.find((element, index, array) => {
// Return true if you find the element you want
// Return false if you haven't found the element you want
// });

const values = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

const foundValue = values.find((currentValue, index) => currentValue === 5);

console.log('Found value:', foundValue);

// Found value: 5

// given an array of temperature, find the first temperature above 120 fahrenheit

const temperatures = [109.2, 115.2, 119.9, 120.8, 150.0, 175, 182];
// refactor

// const valueFound = temperatures.find(
//   (currentTemperature) => currentTemperature >= 120
// );

const valueFound = temperatures.find((currentTemperature) => {
  if (currentTemperature > 120) {
    return true;
  }
});

console.log(valueFound);

// Example 2
// In this example, we have a list of names. We find the first name that starts with the letter j.

const users = [
  { name: 'Kari', id: 19313 },
  { name: 'Hans', id: 40202 },
  { name: 'Joakim', id: 59230 },
  { name: 'Inger', id: 14023 },
  { name: 'Ellen', id: 76339 },
];

// refactor
// const friendlyUsers = users.find(({ name }) => name[0].toLowerCase() === 'j');

// console.log(friendlyUsers);

const profiles = [
  {
    name: 'Uzo',
    age: 12536,
  },
  {
    name: 'Hesh',
    age: 94893,
  },
  {
    name: 'Emil',
    age: 04677,
  },
  {
    name: 'Clarks',
    age: 46739,
  },
];

// in the given array of profiles, please find the first name that starts with letter h

const foundProfile = profiles.find((profile) => {
  if (profile.name[0].toLowerCase() === 'h') {
    return true;
  }
});

console.log(foundProfile);

// In this example, we look at no items being found by the find() array method.

const books = [
  { title: 'Building a Spaceship', inStock: false },
  { title: 'Growing Orchids', inStock: false },
  { title: 'River Fisher', inStock: false },
];

const foundBook = books.find((book) => {
  if (book.inStock === true) {
    return true;
  }
});

// "foundBooks" will be "undefined" there are books
// found by the find() array method

// console.log (foundBook);

if (foundBook === undefined) {
  console.log('no books in stock!');
} else {
  console.log('first book in stock:', foundBook);
}
