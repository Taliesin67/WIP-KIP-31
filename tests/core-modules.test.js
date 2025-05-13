// Core Modules Test Suite

// Sample function to test
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

describe('Core Mathematical Operations', () => {
  // Basic addition test
  test('addition works correctly', () => {
    expect(add(2, 3)).toBe(5);
    expect(add(-1, 1)).toBe(0);
    expect(add(0, 0)).toBe(0);
  });

  // Subtraction test
  test('subtraction works correctly', () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(-1, 1)).toBe(-2);
    expect(subtract(0, 0)).toBe(0);
  });

  // Edge case tests
  test('handles edge cases', () => {
    expect(add(Number.MAX_SAFE_INTEGER, 1)).toBe(Number.MAX_SAFE_INTEGER + 1);
    expect(subtract(Number.MIN_SAFE_INTEGER, 1)).toBe(Number.MIN_SAFE_INTEGER - 1);
  });
});

// Async function test
async function fetchData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('data');
    }, 100);
  });
}

describe('Asynchronous Operations', () => {
  test('async function works correctly', async () => {
    const data = await fetchData();
    expect(data).toBe('data');
  });
});