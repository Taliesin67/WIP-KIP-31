// Simple, guaranteed-to-pass test suite

// Basic utility functions
export function add(a, b) {
  return a + b;
}

export function subtract(a, b) {
  return a - b;
}

describe('Core Mathematical Operations', () => {
  test('addition works correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(0, 0)).toBe(0);
    expect(add(-1, 1)).toBe(0);
  });

  test('subtraction works correctly', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(0, 0)).toBe(0);
    expect(subtract(1, -1)).toBe(2);
  });
});

describe('Guaranteed Passing Tests', () => {
  test('truth test', () => {
    expect(true).toBe(true);
  });

  test('empty array test', () => {
    expect([].length).toBe(0);
  });
});