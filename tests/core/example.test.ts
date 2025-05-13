// Import any necessary utilities or modules
import { describe, expect, test } from '@jest/globals';

// Sample function to test
function add(a: number, b: number): number {
  return a + b;
}

describe('Core Module Test Suite', () => {
  // Basic arithmetic test
  test('should add two numbers correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  // Type checking test
  test('should handle different number types', () => {
    expect(add(2.5, 3.5)).toBe(6);
    expect(add(Number.MAX_SAFE_INTEGER, 0)).toBe(Number.MAX_SAFE_INTEGER);
  });

  // Error case test
  test('should throw error for invalid inputs', () => {
    expect(() => {
      // @ts-ignore: Intentional type error for testing
      add('2' as any, 3);
    }).toThrow();
  });

  // Async test example
  test('should simulate an asynchronous operation', async () => {
    const asyncOperation = async () => {
      return new Promise<number>((resolve) => {
        setTimeout(() => resolve(42), 100);
      });
    };

    await expect(asyncOperation()).resolves.toBe(42);
  });
});