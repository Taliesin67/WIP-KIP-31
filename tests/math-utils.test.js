const { MathUtils } = require('../src/math-utils');

describe('MathUtils', () => {
  describe('add', () => {
    test('adds two positive numbers correctly', () => {
      expect(MathUtils.add(2, 3)).toBe(5);
    });

    test('adds a positive and a negative number', () => {
      expect(MathUtils.add(2, -3)).toBe(-1);
    });

    test('throws error for non-numeric inputs', () => {
      expect(() => MathUtils.add('2', 3)).toThrow('Both arguments must be numbers');
      expect(() => MathUtils.add(2, '3')).toThrow('Both arguments must be numbers');
    });
  });

  describe('divide', () => {
    test('divides two numbers correctly', () => {
      expect(MathUtils.divide(6, 3)).toBe(2);
    });

    test('handles floating point division', () => {
      expect(MathUtils.divide(5, 2)).toBe(2.5);
    });

    test('throws error when dividing by zero', () => {
      expect(() => MathUtils.divide(5, 0)).toThrow('Cannot divide by zero');
    });

    test('throws error for non-numeric inputs', () => {
      expect(() => MathUtils.divide('6', 3)).toThrow('Both arguments must be numbers');
      expect(() => MathUtils.divide(6, '3')).toThrow('Both arguments must be numbers');
    });
  });
});