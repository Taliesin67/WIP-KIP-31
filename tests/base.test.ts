import { describe, expect, test } from '@jest/globals';

// Utility function to simulate a core module operation
function coreModuleOperation(input: number): number {
  if (input < 0) {
    throw new Error('Input must be non-negative');
  }
  return input * 2;
}

describe('Core Module Base Test Suite', () => {
  test('Environment setup is correct', () => {
    expect(true).toBeTruthy();
  });

  test('Basic arithmetic test', () => {
    const value = 1 + 1;
    expect(value).toBe(2);
  });

  test('Core module operation works correctly', () => {
    expect(coreModuleOperation(5)).toBe(10);
  });

  test('Core module operation handles edge cases', () => {
    expect(() => coreModuleOperation(-1)).toThrow('Input must be non-negative');
  });

  test('Object equality test', () => {
    const data = { name: 'Core Module Test', version: 1 };
    expect(data).toEqual({ name: 'Core Module Test', version: 1 });
  });
});