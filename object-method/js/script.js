// object

const person = {
  name: 'Uzo',
  lastName: 'Oloh',
  age: 33,
};
// dot notation
console.log(person.age);

// bracket notation
const appartment = {
  name: 'Bjerregaardsgate',

  number: 90,

  size: 65,
};

console.log('[] notation:', appartment['name']);

console.log('[] notation:', appartment['number']);

console.log('[] notation:', appartment['size']);

const recipe = {
  ingredients_0: 'milk',
  ingredients_1: 'egg',
  ingredients_2: 'flour',
};

for (let i = 0; i <= 2; i++) {
  console.log(recipe);
}

const carProfile = {
  make: 'BMW',
  year: 2015,
  vinNumber: 243637,
};

// use for in the loop
// console log "key:"key and the "value"

// the make is bmw
// the year is 2015
// the vinNumber is 243637

for (const myKey in carProfile) {
  console.log(' the ' + myKey + ' is ' + carProfile[myKey]);
}

// Object.keys()
//syntax

const userProfile = {
  name: 'uzo',
  age: 33,
};
const userProfileKeys = Object.keys(userProfile);
console.log(userProfileKeys);
