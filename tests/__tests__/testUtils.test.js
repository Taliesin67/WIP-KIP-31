const TestUtils = require('../testUtils');

describe('TestUtils', () => {
  describe('createMock', () => {
    it('should create a mock object with default properties', () => {
      const mock = TestUtils.createMock();
      expect(mock).toEqual({});
    });

    it('should create a mock object with overridden properties', () => {
      const mock = TestUtils.createMock({ name: 'test' });
      expect(mock).toEqual({ name: 'test' });
    });
  });

  describe('generateTestData', () => {
    it('should generate a string when type is string', () => {
      const data = TestUtils.generateTestData('string');
      expect(typeof data).toBe('string');
      expect(data).toMatch(/^test_/);
    });

    it('should generate a number when type is number', () => {
      const data = TestUtils.generateTestData('number');
      expect(typeof data).toBe('number');
      expect(data).toBeGreaterThanOrEqual(0);
      expect(data).toBeLessThan(1000);
    });

    it('should generate a boolean when type is boolean', () => {
      const data = TestUtils.generateTestData('boolean');
      expect(typeof data).toBe('boolean');
    });
  });

  describe('mockAsyncOperation', () => {
    it('should resolve with provided data after delay', async () => {
      const testData = { key: 'value' };
      const result = await TestUtils.mockAsyncOperation(testData, 50);
      expect(result).toEqual(testData);
    });
  });
});