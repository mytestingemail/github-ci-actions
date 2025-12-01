const Calculator = require('../src/calculator');

describe('Calculator', () => {
    let calculator;

    // Runs before each test
    beforeEach(() => {
        calculator = new Calculator();
    });

    describe('add() method', () => {
        test('adds two positive numbers correctly', () => {
            expect(calculator.add(2, 3)).toBe(5);
        });

        test('adds negative numbers correctly', () => {
            expect(calculator.add(-5, -3)).toBe(-8);
        });

        test('adds positive and negative numbers correctly', () => {
            expect(calculator.add(10, -3)).toBe(7);
        });

        test('adds zero correctly', () => {
            expect(calculator.add(5, 0)).toBe(5);
        });
    });

    describe('subtract() method', () => {
        test('subtracts two numbers correctly', () => {
            expect(calculator.subtract(10, 4)).toBe(6);
        });

        test('subtracts negative numbers correctly', () => {
            expect(calculator.subtract(5, -3)).toBe(8);
        });
    });

    describe('multiply() method', () => {
        test('multiplies two positive numbers correctly', () => {
            expect(calculator.multiply(6, 7)).toBe(42);
        });

        test('multiplies by zero correctly', () => {
            expect(calculator.multiply(5, 0)).toBe(0);
        });
    });

    describe('divide() method', () => {
        test('divides two numbers correctly', () => {
            expect(calculator.divide(15, 3)).toBe(5);
        });

        test('throws error when dividing by zero', () => {
            expect(() => calculator.divide(10, 0)).toThrow('Division by zero is not allowed');
        });

        test('handles decimal results correctly', () => {
            expect(calculator.divide(5, 2)).toBe(2.5);
        });
    });

    describe('isEven() method', () => {
        test('returns true for even numbers', () => {
            expect(calculator.isEven(8)).toBe(true);
            expect(calculator.isEven(0)).toBe(true);
            expect(calculator.isEven(-4)).toBe(true);
        });

        test('returns false for odd numbers', () => {
            expect(calculator.isEven(7)).toBe(false);
            expect(calculator.isEven(1)).toBe(false);
            expect(calculator.isEven(-3)).toBe(false);
        });
    });

    //   describe('is Integer', () => {
    //     test('returns true for integer values', () => {
    //         expect(calculator.isInteger(-2).toBe(true))
    //     })
    //   })

    describe('factorial() method', () => {
        test('calculates factorial correctly', () => {
            expect(calculator.factorial(5)).toBe(120);
            expect(calculator.factorial(3)).toBe(6);
        });

        test('returns 1 for factorial of 0', () => {
            expect(calculator.factorial(0)).toBe(1);
        });

        test('returns 1 for factorial of 1', () => {
            expect(calculator.factorial(1)).toBe(1);
        });

        test('throws error for negative numbers', () => {
            expect(() => calculator.factorial(-5)).toThrow('Factorial is not defined for negative numbers');
        });
    });

    // Integration-style test
    describe('complex calculation', () => {
        test('performs multiple operations correctly', () => {
            const result1 = calculator.add(10, 5);
            const result2 = calculator.multiply(result1, 2);
            const result3 = calculator.subtract(result2, 3);
            expect(result3).toBe(27);
        });
    });
});