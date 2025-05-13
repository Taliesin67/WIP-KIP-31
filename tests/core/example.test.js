describe('Core Module Basic Tests', () => {
  // Simple truthiness test
  test('basic test setup works', () => {
    expect(true).toBe(true);
  });

  // Arithmetic test
  test('simple arithmetic', () => {
    const value = 1 + 2;
    expect(value).toBe(3);
  });

  // Object comparison test
  test('object comparison', () => {
    const obj = { key: 'value' };
    expect(obj).toEqual({ key: 'value' });
  });

  // Error handling test
  test('error handling', () => {
    const throwError = () => {
      throw new Error('Test error');
    };
    expect(throwError).toThrow('Test error');
  });
});