class Polygon {
    constructor(arrayOfIntegers) {
        this.sideLengths = arrayOfIntegers;
    }

    get countSides() {
        return this.numOfSides = this.sideLengths.length;
    }
    get perimeter() {
        this.total = 0;
        for (let i = 0; i < this.sideLengths.length; i++) {
            this.total += this.sideLengths[i]
        }
        return this.total;
    }
  }
  
  const rectangle = new Polygon([2, 2, 4, 4])
  console.log(rectangle.countSides)

  class Triangle extends Polygon {
    get isValid() {
        let isValid = false;
       if (this.countSides === 3) {
        if ((this.sideLengths[0] + this.sideLengths[1]) > this.sideLengths[2]) {
            if ((this.sideLengths[0] + this.sideLengths[2]) > this.sideLengths[1]) {
                if ((this.sideLengths[1] + this.sideLengths[2]) > this.sideLengths[0]) {
                    isValid = true;
                }
            }
        }
       }
       return isValid
    }
  }
 
class Square extends Polygon {
    get isValid() {
        let isValid = false;
        if (this.countSides === 4) {
            if (this.sideLengths[0] === this.sideLengths[1] && this.sideLengths[0]
                === this.sideLengths[2] && this.sideLengths[0] === this.sideLengths[3]) {
                    isValid = true;
                }
        }
        return isValid;
    }
    get area() {
        let area = this.sideLengths[0] * this.sideLengths[0];
        return area;
    }
}
const square = new Square([3, 3, 3, 3])
square.isValid
console.log(square.isValid)