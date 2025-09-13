import { CoreUtilities } from '../../src/core-utilities.js';

describe('CoreUtilities', () => {
  describe('validateInput', () => {
    test('should return sanitized input for valid string', () => {
      expect(CoreUtilities.validateInput('  hello  ')).toBe('hello');
    });

    test('should throw error for empty string', () => {
      expect(() => CoreUtilities.validateInput('   ')).toThrow('Input cannot be empty');
    });

    test('should throw error for non-string input', () => {
      expect(() => CoreUtilities.validateInput(123)).toThrow('Input must be a string');
    });
  });

  describe('safeJsonParse', () => {
    test('should parse valid JSON object', () => {
      const jsonString = '{"key": "value", "number": 42}';
      expect(CoreUtilities.safeJsonParse(jsonString)).toEqual({key: 'value', number: 42});
    });

    test('should throw error for invalid JSON', () => {
      expect(() => CoreUtilities.safeJsonParse('{invalid json}')).toThrow('JSON parsing failed');
    });

    test('should throw error for non-string input', () => {
      expect(() => CoreUtilities.safeJsonParse(123)).toThrow('Input must be a string');
    });
  });

  describe('generateUniqueId', () => {
    test('should generate unique identifiers', () => {
      const id1 = CoreUtilities.generateUniqueId();
      const id2 = CoreUtilities.generateUniqueId();
      
      expect(id1).not.toBe(id2);
      expect(id1).toMatch(/^\d+-[a-z0-9]+$/);
    });
  });
});