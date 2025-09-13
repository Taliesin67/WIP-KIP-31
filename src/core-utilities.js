/**
 * Core utility functions for comprehensive testing
 */
export class CoreUtilities {
  /**
   * Validate and sanitize input string
   * @param {string} input - Input string to validate
   * @returns {string} - Sanitized input
   * @throws {Error} - If input is invalid
   */
  static validateInput(input) {
    if (typeof input !== 'string') {
      throw new Error('Input must be a string');
    }
    const sanitized = input.trim();
    if (sanitized.length === 0) {
      throw new Error('Input cannot be empty');
    }
    return sanitized;
  }

  /**
   * Safely parse JSON with comprehensive error handling
   * @param {string} jsonString - JSON string to parse
   * @returns {object} - Parsed JSON object
   * @throws {Error} - If JSON parsing fails
   */
  static safeJsonParse(jsonString) {
    if (typeof jsonString !== 'string') {
      throw new Error('Input must be a string');
    }
    try {
      const parsed = JSON.parse(jsonString);
      if (parsed === null || typeof parsed !== 'object') {
        throw new Error('Parsed result is not a valid object');
      }
      return parsed;
    } catch (error) {
      throw new Error(`JSON parsing failed: ${error.message}`);
    }
  }

  /**
   * Generate a unique identifier
   * @returns {string} - Unique identifier
   */
  static generateUniqueId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}