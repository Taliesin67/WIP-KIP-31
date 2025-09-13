import { CoreUtils } from '../src/core-utils.js';

describe('CoreUtils', () => {
  describe('safeAdd', () => {
    test('should add two positive numbers correctly', () => {
      expect(CoreUtils.safeAdd(2, 3)).toBe(5);
    });

    test('should add positive and negative numbers', () => {
      expect(CoreUtils.safeAdd(5, -3)).toBe(2);
    });

    test('should throw error for non-number inputs', () => {
      expect(() => CoreUtils.safeAdd('2', 3)).toThrow('Inputs must be numbers');
      expect(() => CoreUtils.safeAdd(2, '3')).toThrow('Inputs must be numbers');
    });
  });

  describe('isInRange', () => {
    test('should return true for value within range', () => {
      expect(CoreUtils.isInRange(5, 1, 10)).toBe(true);
      expect(CoreUtils.isInRange(1, 1, 10)).toBe(true);
      expect(CoreUtils.isInRange(10, 1, 10)).toBe(true);
    });

    test('should return false for value outside range', () => {
      expect(CoreUtils.isInRange(0, 1, 10)).toBe(false);
      expect(CoreUtils.isInRange(11, 1, 10)).toBe(false);
    });

    test('should throw error for non-number inputs', () => {
      expect(() => CoreUtils.isInRange('5', 1, 10)).toThrow('All inputs must be numbers');
      expect(() => CoreUtils.isInRange(5, '1', 10)).toThrow('All inputs must be numbers');
      expect(() => CoreUtils.isInRange(5, 1, '10')).toThrow('All inputs must be numbers');
    });
  });
});