// node calc.js sum 5 10 20
// node calc.js sub 100 50 30
// node calc.js mult 2 3 5
// node calc.js div 12 2 3

const [operation, ...arguments] = process.argv.slice(2);
const numbers = arguments.map(item => Number(item));

function calculate(op, numbersArr) {
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

const result = calculate(operation, numbers);
console.log(result);
