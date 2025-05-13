/**
 * Core utility functions for the KIP-31 project
 */
export class CoreUtils {
  /**
   * Safely adds two numbers
   * @param {number} a - First number
   * @param {number} b - Second number
   * @returns {number} Sum of a and b
   */
  static safeAdd(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Inputs must be numbers');
    }
    return a + b;
  }

  /**
   * Checks if a value is within a specified range
   * @param {number} value - Value to check
   * @param {number} min - Minimum allowed value
   * @param {number} max - Maximum allowed value
   * @returns {boolean} Whether the value is within the range
   */
  static isInRange(value, min, max) {
    if (typeof value !== 'number' || typeof min !== 'number' || typeof max !== 'number') {
      throw new Error('All inputs must be numbers');
    }
    return value >= min && value <= max;
  }
}