class Calculator {
  static sum(x, y) {
    return x + y;
  }

  sum2(x, y) {
    return x + y;
  }

  multiply(x, y) {
    return x * y;
  }
}
const calculator = new Calculator();
console.log(Calculator.sum(5, 5));
console.log(calculator.sum2(5, 5));
console.log(calculator.multiply(5, 5));
