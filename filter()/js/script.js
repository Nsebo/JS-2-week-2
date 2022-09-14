// example 1

// const numbers = [1, 3, 7, 6, 24, 9];
// const filterNumbers = numbers.filter((numbers) => {
//   // return in the new array all the numbers which is greater than or equal to 4
//   if (numbers >= 4) {
//     return true;
//   } else {
//     return false;
//   }
// });

// console.log(filterNumbers);

// [7, 6, 24, 9]

// another method

const numbers = [4, 13, 17, 60];

const filterNumbers = numbers.filter((number) => number >= 4);
console.log(filterNumbers);

// example 2
const values = [0, 23, 55, 66, 777, 100, 500, 250];
// write a function

// example 3
const people = [
  { name: 'Kari', age: 28 },
  { name: 'Astrid', age: 32 },
  { name: 'Hans', age: 22 },
  { name: 'Inger', age: 19 },
  { name: 'Liv', age: 42 },
  { name: 'Kristoffer', age: 12 },
  { name: 'Anne', age: 12 },
  { name: 'Martin', age: 17 },
  { name: 'Joakim', age: 45 },
  { name: 'Ellen', age: 7 },
];

// filter this array to ages >= 22
// use filter method

// const filterAges = people.filter((person) => {
//   if (person.age >= 22) {
//     return true;
//   }
// });

// console.log(filterAges);

//const filterAges = people.filter((age) => age >= 22);

//console.log(filterAges);

const games = [
  { title: 'Mayhem Fighter', isMultiplayer: true, rating: 8 },
  { title: 'Build-a-farm', isMultiplayer: true, rating: 9 },
  { title: 'Ghost Story', isMultiplayer: false, rating: 8 },
  { title: 'Fast Car Racer', isMultiplayer: true, rating: 7 },
  { title: 'Elf and Dwarf RPG', isMultiplayer: false, rating: 8 },
];

// in this example we have a list of games
// we want to filter the games that have
// multiplayer and a rating of 8 or higher
// const filterAges = people.filter((person) => {
//   if (person.age >= 22) {
//     return true;
//   }
// });

const players = games.filter((game) => {
  if (game.isMultiplayer === true && game.rating >= 8) {
    return true;
  }
});
console.log(players);
