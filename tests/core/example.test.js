describe('Core Module Basic Tests', () => {
  test('basic test setup works', () => {
    expect(true).toBe(true);
  });

  test('simple assertion', () => {
    const value = 1 + 2;
    expect(value).toBe(3);
  });
});