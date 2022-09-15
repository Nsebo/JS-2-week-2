// number that will loop through

const values = [2, 3, 5, 7, 9];

const sum = values.reduce((total, item) => {
  total += item;

  return total;
}, 0);

console.log('sum:', sum);

const garages = [
  { make: 'telsa', car: 10 },
  { make: 'BMW', car: 20 },
  { make: 'Volvo', car: 30 },
  { make: 'Opel', car: 50 },
];

// calculate the total number of cars in all the garages
// use the reduce array method

const allCars = garages.reduce((total, { car }) => {
  total += car;
  return total;
}, 50);

console.log(allCars);

const products = [
  {
    title: 'pudding',
    isInStock: true,
    quantity: 10,
    price: 20,
    currency: 'NOK',
  },
  {
    title: 'cheese',
    isInStock: false,
    quantity: 0,
    price: 200,
    currency: 'NOK',
  },
  {
    title: 'milk',
    isInStock: true,
    quantity: 20,
    price: 100,
    currency: 'NOK',
  },
  {
    title: 'eggs',
    isInStock: true,
    quantity: 1000,
    price: 10,
    currency: 'NOK',
  },
];

// get the total cost of in-stock products
// to calculate the total cost you need to multiply
// price * quantity
// use reduce array method

// const totalCost = products.reduce((total, product) => {
//   if (product.isInStock === true) {
//     total += product.price * product.quantity;
//   }
//   return total;
// }, 0);

// console.log(totalCost);

const totalCost = products.reduce((total, product) => {
  return product.isInStock === true
    ? (total += product.price * product.quantity)
    : total;
}, 0);

console.log(totalCost);
