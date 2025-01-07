import { vi, expect, describe, it } from 'vitest';

// Create a mock function
const mockFn = vi.fn();

describe('mock function argument checking', () => {
  it('should be called with the correct arguments', () => {
    // Call the mock function with some arguments
    mockFn('Green Day', 'American Idiot');

    // Check the arguments passed to the mock function
    expect(mockFn).toHaveBeenCalledWith('Green Day', 'American Idiot');
  });
});
