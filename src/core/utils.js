/**
 * Utility functions for core modules
 */
class CoreUtils {
  /**
   * Safely parses a JSON string
   * @param {string} jsonString - JSON string to parse
   * @returns {object|null} Parsed object or null if parsing fails
   */
  static safeJsonParse(jsonString) {
    if (typeof jsonString !== 'string') {
      return null;
    }
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error('JSON parsing error:', error);
      return null;
    }
  }

  /**
   * Validates if input is a positive number
   * @param {*} value - Value to validate
   * @returns {boolean} True if positive number, false otherwise
   */
  static isPositiveNumber(value) {
    return typeof value === 'number' && value > 0;
  }
}

module.exports = CoreUtils;