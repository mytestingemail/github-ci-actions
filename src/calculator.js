class Calculator {
    add(a, b) {
        return a + b;
    }

    subtract(a, b) {
        return a - b;
    }

    multiply(a, b) {
        return a * b;
    }

    divide(a, b) {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }

    isEven(num) {
        return num % 2 === 0;
    }

    square(num) {
        return num * num;
    }

    factorial(num) {
        if (num < 0) {
            throw new Error('Factorial is not defined for negative numbers');
        }
        if (num === 0 || num === 1) {
            return 1;
        }
        return num * this.factorial(num - 1);
    }
}

module.exports = Calculator;

if (require.main === module) {
    const calc = new Calculator();
    console.log('🧮 Calculator Demo');
    console.log('-------------------');
    console.log(`2 + 3 = ${calc.add(2, 3)}`);
    console.log(`10 - 4 = ${calc.subtract(10, 4)}`);
    console.log(`6 * 7 = ${calc.multiply(6, 7)}`);
    console.log(`15 / 3 = ${calc.divide(15, 3)}`);
    console.log(`Is 8 even? ${calc.isEven(8)}`);
    console.log(`Factorial of 5 = ${calc.factorial(5)}`);
}