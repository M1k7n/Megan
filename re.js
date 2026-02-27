//17
let arr14 = [1, 2, 3, 4, 5, 6, 7, 89];
let heh = arr14[0];

for (let i = 1; i < arr14.length; i++) {
  if (arr14[i] > heh) {
    heh = arr14[i];
  }
}
console.log(heh);
//18
let arr15 = [1, 2, 3, 4, 5];
let sumiin = arr15.reduce((re, re2) => re + re2, 0);
console.log(sumiin);
//19

for (let i = 1; i <= 100; i++) {
  if (i % 15 === 0) {
    console.log("buuzmuuz");
  } else if (i % 5 === 0) {
    console.log("bizz");
  } else if (i % 3 === 0) {
    console.log("fuzz");
  } else {
    console.log(i);
  }
}

//20
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let full = arr1.concat(arr2);
console.log(full);
