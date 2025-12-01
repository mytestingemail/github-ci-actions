// Simple Calculator Module for CI Demo
// This is our "production" code

class Calculator {
    /**
     * Adds two numbers
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} Sum of a and b
     */
    add(a, b) {
        return a + b;
    }

    /**
     * Subtracts two numbers
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} Difference of a and b
     */
    subtract(a, b) {
        return a - b;
    }

    /**
     * Multiplies two numbers
     * @param {number} a - First number
     * @param {number} b - Second number
     * @returns {number} Product of a and b
     */
    multiply(a, b) {
        return a * b;
    }

    /**
     * Divides two numbers
     * @param {number} a - First number (numerator)
     * @param {number} b - Second number (denominator)
     * @returns {number} Quotient of a divided by b
     * @throws {Error} If attempting to divide by zero
     */
    divide(a, b) {
        if (b === 0) {
            throw new Error('Division by zero is not allowed');
        }
        return a / b;
    }

    /**
     * Checks if a number is even
     * @param {number} num - Number to check
     * @returns {boolean} True if number is even
     */
    isEven(num) {
        return num % 2 === 0;
    }

    // isInteger(num) {
    //     return Number.isInteger(num);
    // }

    /**
     * Calculates the factorial of a number
     * @param {number} num - Non-negative integer
     * @returns {number} Factorial of num
     * @throws {Error} If number is negative
     */
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

// Export the Calculator class
module.exports = Calculator;

// If run directly, demonstrate basic functionality
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