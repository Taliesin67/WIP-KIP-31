const { validateInput, safeJsonParse } = require('./test-utils');

describe('Test Utilities', () => {
  describe('validateInput', () => {
    test('should return false for null input', () => {
      expect(validateInput(null)).toBe(false);
    });

    test('should return false for undefined input', () => {
      expect(validateInput(undefined)).toBe(false);
    });

    test('should return false for empty string', () => {
      expect(validateInput('')).toBe(false);
      expect(validateInput('   ')).toBe(false);
    });

    test('should return true for non-empty input', () => {
      expect(validateInput('hello')).toBe(true);
      expect(validateInput(123)).toBe(true);
    });
  });

  describe('safeJsonParse', () => {
    test('should parse valid JSON', () => {
      const jsonString = '{"key": "value"}';
      expect(safeJsonParse(jsonString)).toEqual({ key: 'value' });
    });

    test('should return null for invalid JSON', () => {
      const invalidJsonString = '{invalid json}';
      expect(safeJsonParse(invalidJsonString)).toBeNull();
    });
  });
});