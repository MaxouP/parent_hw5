const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(array.filter((val) => val % 2 != 0));

console.log(array.filter((val) => val % 2 == 0 || val % 5 == 0));

console.log(array.filter((val) => val % 3 === 0).map((val) => Math.pow(val, 2)));

console.log(array.filter((val) => val % 5 == 0).reduce((prev, curr) => Math.pow(prev, 2) + Math.pow(curr, 2)));
