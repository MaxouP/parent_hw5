const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const odd = array.filter((val) => val % 2 != 0);
console.log(odd);

const divBy2o5 = array.filter((val) => val % 2 == 0 || val % 5 == 0);
console.log(divBy2o5);

const divBy3 = [];
array.map((val) => {
	if (val % 3 == 0) {
		divBy3.push(Math.pow(val, 2));
	}
});
console.log(divBy3);

const sqrDivBy5 = array.filter((val) => val % 5 == 0);
const sum = sqrDivBy5.reduce((prev, curr) => Math.pow(prev, 2) + Math.pow(curr, 2));
console.log(sum);
