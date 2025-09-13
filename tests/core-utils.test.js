import { CoreUtils } from '../src/core-utils.js';

describe('CoreUtils', () => {
  describe('safeAdd', () => {
    test('should add two numbers correctly', () => {
      expect(CoreUtils.safeAdd(2, 3)).toBe(5);
    });

    test('should throw error for non-numeric inputs', () => {
      expect(() => CoreUtils.safeAdd('2', 3)).toThrow('Inputs must be numbers');
      expect(() => CoreUtils.safeAdd(null, undefined)).toThrow('Inputs must be numbers');
    });
  });

  describe('isValidEmail', () => {
    test('should validate correct email addresses', () => {
      expect(CoreUtils.isValidEmail('test@example.com')).toBe(true);
      expect(CoreUtils.isValidEmail('user.name+tag@example.co.uk')).toBe(true);
    });

    test('should reject invalid email addresses', () => {
      expect(CoreUtils.isValidEmail('invalid-email')).toBe(false);
      expect(CoreUtils.isValidEmail('missing@domain')).toBe(false);
      expect(CoreUtils.isValidEmail('')).toBe(false);
      expect(CoreUtils.isValidEmail(null)).toBe(false);
    });
  });
});