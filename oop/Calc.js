class Calc {
  constructor(operation, numbers) {
    this.operation = operation;
    this.numbers = numbers;
  }

  calculate(op, numbersArr) {
    switch (op) {
      case 'sum':
        return numbersArr.reduce((acc, item) => acc + item);
      case 'sub':
        return numbersArr.reduce((acc, item) => acc - item);
      case 'mult':
        return numbersArr.reduce((acc, item) => acc * item);
      case 'div':
        return numbersArr.reduce((acc, item) => acc / item);
      default:
        return 'Unknown operation type';
    }
  }

  init() {
    return this.calculate(this.operation, this.numbers);
  }
}

const [operation, ...arguments] = process.argv.slice(2);
const numbers = arguments.map(item => Number(item));

module.exports = new Calc(operation, numbers);
