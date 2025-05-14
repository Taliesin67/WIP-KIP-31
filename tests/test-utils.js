/**
 * Test utility functions for KIP-31 core modules
 */

/**
 * Simple function to validate input
 * @param {*} input - Input to validate
 * @returns {boolean} Whether input is valid
 */
function validateInput(input) {
  if (input === null || input === undefined) return false;
  if (typeof input === 'string' && input.trim() === '') return false;
  return true;
}

/**
 * Safely parse JSON with error handling
 * @param {string} jsonString - JSON string to parse
 * @returns {object|null} Parsed object or null
 */
function safeJsonParse(jsonString) {
  try {
    return JSON.parse(jsonString);
  } catch (error) {
    console.error('JSON Parse Error:', error);
    return null;
  }
}

module.exports = {
  validateInput,
  safeJsonParse
};