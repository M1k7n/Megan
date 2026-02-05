let three = [1, 2, 3, 4, 5];
tree = three.splice(2, 1);
console.log(tree);

const animals = ["Lion", "Tiger", "Elephant", "Giraffe"];
animals[1] = "panda";
console.log(animals);

const books = ["1984", "Brave New World", "Fahrenheit 451"];
books.push("1984", "Brave New World", "Fahrenheit 451");
console.log(books);

const numbers = [10, 20, 30, 40, 50];
console.log(numbers.indexOf(30));

const fruits = ["Banana", "Orange", "Apple", "Mango"];
const fruits1 = ["Banana2", "Orange2", "Apple2", "Mango2"];
const fruits2 = ["Banana21", "Orange21", "Apple21", "Mango21"];
let fruitschildren = fruits.concat(fruits1, fruits2);
console.log(fruitschildren);

const colors = ["Red", "Green", "Blue", "Yellow", "Purple"];
let color = colors.includes(("Red", "Green", "Blue", "Yellow", "Purple"));

console.log(color);

const array1 = ["a", "b", "c"];
const array2 = ["a", "b", "c"];

function tentsuu(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  return arr1.every((ree, ree2) => {
    return ree === arr2[ree2];
  });
}
console.log(tentsuu(array1, array2));

const words = ["JavaScript", "is", "a", "versatile", "language"];
console.log(...words);
