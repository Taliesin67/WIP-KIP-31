/**
 * Test utility functions for consistent test setup and helper methods
 */
export class TestUtils {
  /**
   * Create a mock for testing
   * @param {Object} overrides - Optional properties to override
   * @returns {Object} Mocked object
   */
  static createMock(overrides = {}) {
    return {
      ...overrides
    };
  }

  /**
   * Generate random test data
   * @param {string} type - Type of data to generate
   * @returns {*} Generated test data
   */
  static generateTestData(type) {
    switch(type) {
      case 'string':
        return `test_${Math.random().toString(36).substring(7)}`;
      case 'number':
        return Math.floor(Math.random() * 1000);
      case 'boolean':
        return Math.random() > 0.5;
      default:
        return null;
    }
  }

  /**
   * Simulate async operation
   * @param {*} data - Data to resolve
   * @param {number} delay - Delay in milliseconds
   * @returns {Promise} Promise that resolves with data
   */
  static async mockAsyncOperation(data, delay = 100) {
    return new Promise(resolve => {
      setTimeout(() => resolve(data), delay);
    });
  }
}