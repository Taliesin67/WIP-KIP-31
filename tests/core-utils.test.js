const CoreUtils = require('./core-utils');

describe('CoreUtils', () => {
  describe('validateInput', () => {
    test('should return false for null input', () => {
      expect(CoreUtils.validateInput(null)).toBe(false);
    });

    test('should return false for undefined input', () => {
      expect(CoreUtils.validateInput(undefined)).toBe(false);
    });

    test('should return false for empty string', () => {
      expect(CoreUtils.validateInput('')).toBe(false);
      expect(CoreUtils.validateInput('   ')).toBe(false);
    });

    test('should return true for non-empty string', () => {
      expect(CoreUtils.validateInput('hello')).toBe(true);
    });

    test('should validate numeric inputs', () => {
      expect(CoreUtils.validateInput(123)).toBe(true);
      expect(CoreUtils.validateInput(NaN)).toBe(false);
      expect(CoreUtils.validateInput(Infinity)).toBe(false);
    });

    test('should validate object inputs', () => {
      expect(CoreUtils.validateInput({})).toBe(false);
      expect(CoreUtils.validateInput({key: 'value'})).toBe(true);
    });
  });

  describe('safeJsonParse', () => {
    test('should parse valid JSON', () => {
      const jsonString = '{"key": "value"}';
      expect(CoreUtils.safeJsonParse(jsonString)).toEqual({ key: 'value' });
    });

    test('should return null for invalid JSON', () => {
      const invalidJsonString = '{invalid json}';
      expect(CoreUtils.safeJsonParse(invalidJsonString)).toBeNull();
    });

    test('should return null for non-string inputs', () => {
      expect(CoreUtils.safeJsonParse(null)).toBeNull();
      expect(CoreUtils.safeJsonParse(123)).toBeNull();
      expect(CoreUtils.safeJsonParse({})).toBeNull();
    });
  });

  describe('generateUniqueId', () => {
    test('should generate unique identifiers', () => {
      const id1 = CoreUtils.generateUniqueId();
      const id2 = CoreUtils.generateUniqueId();
      
      expect(id1).not.toBe(id2);
      expect(id1).toMatch(/^\d+-[a-z0-9]+$/);
    });

    test('generated ID should have correct format', () => {
      const id = CoreUtils.generateUniqueId();
      const parts = id.split('-');
      
      expect(parts.length).toBe(2);
      expect(parts[0]).toMatch(/^\d+$/);  // First part is timestamp
      expect(parts[1]).toMatch(/^[a-z0-9]+$/);  // Second part is random string
    });
  });
});