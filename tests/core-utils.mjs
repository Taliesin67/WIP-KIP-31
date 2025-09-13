/**
 * Core utility functions for KIP-31 project
 */
export class CoreUtils {
  /**
   * Validate input with comprehensive checks
   * @param {*} input - Input to validate
   * @returns {boolean} Validation result
   */
  static validateInput(input) {
    if (input === null || input === undefined) return false;
    if (typeof input === 'string' && input.trim() === '') return false;
    
    switch (typeof input) {
      case 'number':
        return !isNaN(input) && isFinite(input);
      case 'object':
        return Object.keys(input).length > 0;
      default:
        return true;
    }
  }

  /**
   * Safely parse JSON with comprehensive error handling
   * @param {string} jsonString - JSON string to parse
   * @returns {object|null} Parsed object or null
   */
  static safeJsonParse(jsonString) {
    if (typeof jsonString !== 'string') return null;
    
    try {
      const parsed = JSON.parse(jsonString);
      return parsed !== null && parsed !== undefined ? parsed : null;
    } catch (error) {
      console.error('JSON Parse Error:', error);
      return null;
    }
  }

  /**
   * Generate a unique identifier
   * @returns {string} Unique identifier
   */
  static generateUniqueId() {
    return `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  }
}

export default CoreUtils;