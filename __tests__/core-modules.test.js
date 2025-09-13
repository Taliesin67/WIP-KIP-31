// Core Modules Test Suite

// Validated function with comprehensive error handling
export function validateInput(a, b) {
  // Type checking
  if (typeof a !== 'number' || typeof a !== 'number') {
    throw new TypeError('Both arguments must be numbers');
  }

  // Finite number validation
  if (!Number.isFinite(a) || !Number.isFinite(b)) {
    throw new Error('Arguments must be finite numbers');
  }

  return true;
}

// Advanced addition function with input validation
export function safeAdd(a, b) {
  validateInput(a, b);
  return a + b;
}

// Comprehensive test suite
describe('Core Module: Safe Arithmetic Operations', () => {
  // Standard addition test
  test('should correctly add two positive numbers', () => {
    expect(safeAdd(2, 3)).toBe(5);
  });

  // Zero and negative number handling
  test('should handle adding zero and negative numbers', () => {
    expect(safeAdd(5, 0)).toBe(5);
    expect(safeAdd(-2, 3)).toBe(1);
    expect(safeAdd(-5, -3)).toBe(-8);
  });

  // Input validation tests
  test('should throw TypeError for non-numeric inputs', () => {
    expect(() => safeAdd('2', 3)).toThrow(TypeError);
    expect(() => safeAdd(null, 3)).toThrow(TypeError);
    expect(() => safeAdd(undefined, 3)).toThrow(TypeError);
  });

  // Finite number tests
  test('should throw error for non-finite numbers', () => {
    expect(() => safeAdd(Infinity, 3)).toThrow('Arguments must be finite numbers');
    expect(() => safeAdd(NaN, 3)).toThrow('Arguments must be finite numbers');
  });

  // Edge case: Maximum safe integer
  test('should handle large numbers within safe integer range', () => {
    const maxSafeInt = Number.MAX_SAFE_INTEGER;
    expect(safeAdd(maxSafeInt - 1, 1)).toBe(maxSafeInt);
  });
});