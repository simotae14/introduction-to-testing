import { vi, expect, describe, it } from 'vitest';

// Create a mock function
const mockFn = vi.fn();

describe('checking multiple calls', () => {
  it('should track all the arguments for multiple calls', () => {
    // Call the mock function multiple times with different arguments
    mockFn('Green Day', 'American Idiot');
    mockFn('The Beatles', 'Abbey Road');

    // Check the arguments of the first call
    expect(mockFn).toHaveBeenNthCalledWith(1, 'Green Day', 'American Idiot');

    // Check the arguments of the second call
    expect(mockFn).toHaveBeenNthCalledWith(2, 'The Beatles', 'Abbey Road');
  });
});
