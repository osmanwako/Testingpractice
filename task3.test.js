const Calculator = require('./task3.js');

describe('Calculator', () => {
  const calculator = new Calculator();

  describe('add', () => {
    test('adds two positive numbers', () => {
      expect(calculator.add(2, 3)).toBe(5);
    });

    test('adds a positive and a negative number', () => {
      expect(calculator.add(2, -3)).toBe(-1);
    });

    test('adds two negative numbers', () => {
      expect(calculator.add(-2, -3)).toBe(-5);
    });
  });

  describe('subtract', () => {
    test('subtracts two positive numbers', () => {
      expect(calculator.subtract(-3, -2)).toBe(-1);
    });
  });

  describe('divide', () => {
    test('divides two positive numbers', () => {
      expect(calculator.divide(6, 3)).toBe(2);
    });

    test('divides a positive and a negative number', () => {
      expect(calculator.divide(6, -3)).toBe(-2);
    });

    test('throws an error when dividing by zero', () => {
      expect(() => calculator.divide(6, 0)).toThrow('Cannot divide by zero');
    });
  });

  describe('multiply', () => {
    test('multiplies two positive numbers', () => {
      expect(calculator.multiply(2, 3)).toBe(6);
    });

    test('multiplies a positive and a negative number', () => {
      expect(calculator.multiply(2, -3)).toBe(-6);
    });

    test('multiplies two negative numbers', () => {
      expect(calculator.multiply(-2, -3)).toBe(6);
    });
  });
});
