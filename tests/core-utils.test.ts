import { add, subtract, validateInput } from '../src/core-utils';

describe('Core Utility Functions', () => {
  describe('add', () => {
    it('should correctly add two numbers', () => {
      expect(add(2, 3)).toBe(5);
      expect(add(-1, 1)).toBe(0);
      expect(add(0, 0)).toBe(0);
    });
  });

  describe('subtract', () => {
    it('should correctly subtract two numbers', () => {
      expect(subtract(5, 3)).toBe(2);
      expect(subtract(-1, 1)).toBe(-2);
      expect(subtract(0, 0)).toBe(0);
    });
  });

  describe('validateInput', () => {
    it('should validate input correctly', () => {
      expect(validateInput('test')).toBe(true);
      expect(validateInput('')).toBe(false);
      expect(validateInput(null)).toBe(false);
      expect(validateInput(undefined)).toBe(false);
      expect(validateInput('   ')).toBe(false);
    });
  });
});