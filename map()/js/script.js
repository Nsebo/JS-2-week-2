// map()
const names = [
  { firstName: 'Ola', lastName: 'Nordmann' },
  { firstName: 'John', lastName: 'Doe' },
  { firstName: 'Mario', lastName: 'Rossi' },
  { firstName: 'Jan', lastName: 'Jansen' },
];
console.log('before map', names);

// Returns:
// [ "Ola Nordmann", "John Doe", "Mario Rossi", "Jan Jansen" ]
const newCombinedNames = names.map(({ firstName, lastName }) => {
  // modify and return element
  console.log(`${firstName} ${lastName}`);
  return `${firstName} ${lastName}`;
});

console.log('after map', newCombinedNames);

const triangles = [
  { base: 100, height: 200 },
  { base: 50, height: 100 },
  { base: 600, height: 700 },
];

// please calculate the area of the triangles inside the given triangles
// please use the map function to return an array
// Return : [1000, 2500, 2.1x105]

// to calculate the area of the triangle please use the given
// formula A = 1/2 x b x h
// A stands for Area
// B stands for base
// H stands for height

const areas = triangles.map(({ base, height }) => {
  // modify and return
  return (1 / 2) * base * height;
});

console.log(areas);
