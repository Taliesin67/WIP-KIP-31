/**
 * Core utility functions for KIP-31 project
 */
class CoreUtils {
  /**
   * Validate input with comprehensive checks
   * @param {*} input - Input to validate
   * @returns {boolean} Validation result
   */
  static validateInput(input) {
    if (input === null || input === undefined) return false;
    if (typeof input === 'string' && input.trim() === '') return false;
    
    // Additional type-specific validations
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
      
      // Ensure parsed result is not null or undefined
      if (parsed === null || parsed === undefined) {
        throw new Error('Parsed result is null or undefined');
      }
      
      return parsed;
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

module.exports = CoreUtils;