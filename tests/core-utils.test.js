import { CoreUtilities } from '../src/core-utils.js';

describe('CoreUtilities', () => {
  let coreUtils;

  beforeEach(() => {
    coreUtils = new CoreUtilities();
  });

  test('should initialize with default version', () => {
    expect(coreUtils.getVersion()).toBe('1.0.0');
  });

  test('should perform operation correctly', () => {
    expect(coreUtils.performOperation('test')).toBe('TEST');
  });

  test('should throw error for undefined input', () => {
    expect(() => {
      coreUtils.performOperation();
    }).toThrow('Input is required');
  });

  test('should handle risky operation', () => {
    expect(coreUtils.potentialRiskyOperation()).toBe(true);
  });

  test('should create instance with custom version', () => {
    const customUtils = new CoreUtilities('2.0.0');
    expect(customUtils.getVersion()).toBe('2.0.0');
  });
});