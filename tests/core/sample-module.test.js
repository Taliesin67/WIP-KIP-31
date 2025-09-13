import { createMockFunction, generateTestData, asyncSimulator } from '../test-utils.js';

// Sample core module to demonstrate testing capabilities
class SampleCoreModule {
  constructor() {
    this.data = [];
  }

  addItem(item) {
    if (!item) {
      throw new Error('Cannot add empty item');
    }
    this.data.push(item);
    return this.data.length;
  }

  async processData(transformer) {
    if (!transformer || typeof transformer !== 'function') {
      throw new Error('Invalid transformer');
    }
    return await asyncSimulator(this.data.map(transformer));
  }
}

describe('SampleCoreModule', () => {
  let coreModule;

  beforeEach(() => {
    coreModule = new SampleCoreModule();
  });

  test('should add item successfully', () => {
    const testData = generateTestData('string');
    const result = coreModule.addItem(testData);
    expect(result).toBe(1);
    expect(coreModule.data).toContain(testData);
  });

  test('should throw error when adding empty item', () => {
    expect(() => coreModule.addItem()).toThrow('Cannot add empty item');
  });

  test('should process data with transformer', async () => {
    const mockTransformer = createMockFunction(x => x.toUpperCase());
    const testData = [generateTestData('string'), generateTestData('string')];
    
    testData.forEach(item => coreModule.addItem(item));
    
    const result = await coreModule.processData(mockTransformer);
    
    expect(result).toEqual(testData.map(x => x.toUpperCase()));
    expect(mockTransformer).toHaveBeenCalledTimes(testData.length);
  });
});