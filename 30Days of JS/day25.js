
// 2726. Calculator with Method Chaining - LeetCode
class Calculator {
  constructor(value) {
    this.result = Number(value); // store as number
  }

  add(value) {
    this.result += value;
    return this; // enable chaining
  }

  subtract(value) {
    this.result -= value;
    return this;
  }

  multiply(value) {
    this.result *= value;
    return this;
  }

  divide(value) {
    if (value === 0) {
      throw new Error("Division by zero is not allowed");
    }
    this.result /= value;
    return this;
  }

  power(value) {
    this.result = Math.pow(this.result, value);
    return this;
  }

  getResult() {
    return Number(this.result.toFixed(5)); // precision up to 1e-5
  }
}

const calc = new Calculator(10);

// Perform: ((10 + 5 - 3) * 2 / 4) ^ 2
const result = calc.add(5).subtract(3).multiply(2).divide(4).power(2).getResult();

console.log(result); // 36