class Square {
	side;
	constructor(side) {
		this.side = side;
	}

	perimeter() {
		return this.side * 4;
	}

	area() {
		return this.side * this.side;
	}

	diagonal() {
		return (Math.sqrt(2 * Math.pow(this.side, 2)));
	}

	describe() {
		console.log(`Square with side ${this.side} has perimeter of ${this.perimeter()}, area of ${this.area()}, and diagonal of ${this.diagonal()}`);
	}
}

const square1 = new Square(2);
const square2 = new Square(5);
const square3 = new Square(8);

square1.describe();
square2.describe();
square3.describe();
