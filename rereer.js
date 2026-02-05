let arr = [1, 2, 3, 4];
let roar = arr.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0,
);
console.log(roar);

let arra = [5, 12, 3, 21];

let roarr = arra.reduce(
  (accumulator, currentValue) =>
    accumulator > currentValue ? accumulator : currentValue,
  0,
);

console.log(roarr);

let bagaroarr = arra.reduce((accumulator, currentValue) =>
  accumulator < currentValue ? accumulator : currentValue,
);
console.log(bagaroarr);

let evenarr = [1, 2, 3, 4, 6];

let even = evenarr.reduce((accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    return accumulator + currentValue;
  }
  return accumulator;
}, 0);

console.log(even);

let evanarr = [1, 2, 3, 4, 5];

let evenNums = evanarr.reduce((accumulator, currentValue) => {
  if (currentValue % 2 === 0) {
    accumulator.push(currentValue);
  }
  return accumulator;
}, []);
console.log(evenNums);

let elo = ["h", "e", "l", "l", "o"];

let ello = elo.reduceRight(
  (accumulator, currentValue) => accumulator + currentValue,
);

console.log(ello);

let plusarr = [10, 2, 1];
let minus = plusarr.reduceRight((accumulator, currentValue) => {
  return currentValue - accumulator;
});
console.log(minus);

const users = [
  { name: "Bat", age: 20 },
  { name: "Bold", age: 30 },
  { name: "Saraa", age: 25 },
];
function avgage(arr) {
  const avg = arr.reduce((sum, user) => sum + user.age, 0);
  if (arr.length === 0) {
    return 0;
  }
  return avg / arr.length;
}
let avg = avgage(users);
console.log(avg);

const items = [
  { name: "Apple", category: "fruit", price: 3 },
  { name: "Carrot", category: "vegetable", price: 2 },
  { name: "Banana", category: "fruit", price: 4 },
];
function avgprice(arr) {
  const avg = arr.reduce((sum, item) => sum + item.price, 0);
  if (arr.length === 0) {
    return 0;
  }
  return avg;
}
let price = avgprice(items);
console.log(price);

const words = ["hi", "hello", "goodbye", "hey"];
let longw = words.reduce(
  (accumulator, currentValue) =>
    accumulator.length > currentValue.length ? accumulator : currentValue,
  0,
);
console.log(longw);
