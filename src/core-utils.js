/**
 * Core utility functions for KIP-31 project
 */
export class CoreUtils {
  /**
   * Safely add two numbers with error handling
   * @param {number} a First number
   * @param {number} b Second number
   * @returns {number} Sum of a and b
   */
  static safeAdd(a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
      throw new Error('Inputs must be numbers');
    }
    return a + b;
  }

  /**
   * Validate if a value is a valid email
   * @param {string} email Email to validate
   * @returns {boolean} Whether email is valid
   */
  static isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return typeof email === 'string' && emailRegex.test(email);
  }
}