describe('Core Module Base Test Suite', () => {
  test('Environment setup is correct', () => {
    expect(true).toBeTruthy();
  });

  test('Basic assertion works', () => {
    const value = 1 + 1;
    expect(value).toBe(2);
  });

  test('Object equality test', () => {
    const data = { name: 'Core Module Test' };
    expect(data).toEqual({ name: 'Core Module Test' });
  });
});