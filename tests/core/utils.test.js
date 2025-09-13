const CoreUtils = require('../../src/core/utils');

describe('CoreUtils', () => {
  describe('safeJsonParse', () => {
    test('parses valid JSON string', () => {
      const validJson = '{"key": "value"}';
      expect(CoreUtils.safeJsonParse(validJson)).toEqual({ key: 'value' });
    });

    test('returns null for invalid JSON', () => {
      const invalidJson = '{invalid json}';
      expect(CoreUtils.safeJsonParse(invalidJson)).toBeNull();
    });

    test('returns null for non-string input', () => {
      expect(CoreUtils.safeJsonParse(123)).toBeNull();
      expect(CoreUtils.safeJsonParse(null)).toBeNull();
    });
  });

  describe('isPositiveNumber', () => {
    test('returns true for positive numbers', () => {
      expect(CoreUtils.isPositiveNumber(5)).toBe(true);
      expect(CoreUtils.isPositiveNumber(0.1)).toBe(true);
    });

    test('returns false for non-positive numbers', () => {
      expect(CoreUtils.isPositiveNumber(0)).toBe(false);
      expect(CoreUtils.isPositiveNumber(-5)).toBe(false);
      expect(CoreUtils.isPositiveNumber('5')).toBe(false);
    });
  });
});