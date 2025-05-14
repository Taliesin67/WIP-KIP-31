import CoreUtils from './core-utils.mjs';

describe('CoreUtils', () => {
  describe('validateInput', () => {
    test('returns false for null input', () => {
      expect(CoreUtils.validateInput(null)).toBe(false);
    });

    test('returns false for undefined input', () => {
      expect(CoreUtils.validateInput(undefined)).toBe(false);
    });

    test('returns false for empty string', () => {
      expect(CoreUtils.validateInput('')).toBe(false);
      expect(CoreUtils.validateInput('   ')).toBe(false);
    });

    test('returns true for non-empty string', () => {
      expect(CoreUtils.validateInput('hello')).toBe(true);
    });

    test('validates numeric inputs', () => {
      expect(CoreUtils.validateInput(123)).toBe(true);
      expect(CoreUtils.validateInput(NaN)).toBe(false);
      expect(CoreUtils.validateInput(Infinity)).toBe(false);
    });

    test('validates object inputs', () => {
      expect(CoreUtils.validateInput({})).toBe(false);
      expect(CoreUtils.validateInput({key: 'value'})).toBe(true);
    });
  });

  describe('safeJsonParse', () => {
    test('parses valid JSON', () => {
      const jsonString = '{"key": "value"}';
      expect(CoreUtils.safeJsonParse(jsonString)).toEqual({ key: 'value' });
    });

    test('returns null for invalid JSON', () => {
      const invalidJsonString = '{invalid json}';
      expect(CoreUtils.safeJsonParse(invalidJsonString)).toBeNull();
    });

    test('returns null for non-string inputs', () => {
      expect(CoreUtils.safeJsonParse(null)).toBeNull();
      expect(CoreUtils.safeJsonParse(123)).toBeNull();
      expect(CoreUtils.safeJsonParse({})).toBeNull();
    });
  });

  describe('generateUniqueId', () => {
    test('generates unique identifiers', () => {
      const id1 = CoreUtils.generateUniqueId();
      const id2 = CoreUtils.generateUniqueId();
      
      expect(id1).not.toBe(id2);
      expect(id1).toMatch(/^\d+-[a-z0-9]+$/);
    });
  });
});